"use strict";

const horizons = [
  ["1d", "1 day"],
  ["30d", "30 days"],
  ["365d", "365 days"],
];
const rules = [
  ["cash", "Cash"],
  ["buy-and-hold", "Buy and hold"],
  ["momentum-v1", "Momentum v1"],
  ["trend-filter-v1", "Trend filter v1"],
  ["mean-reversion-v1", "Mean reversion v1"],
];
const amount = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const signedPercent = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 3,
  signDisplay: "exceptZero",
});
const count = new Intl.NumberFormat("en-US");
const utc = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "UTC",
});

function element(tag, text) {
  const node = document.createElement(tag);
  node.textContent = text;
  return node;
}

function decimal(value) {
  if (typeof value !== "string" || value.trim() === "" || !Number.isFinite(Number(value))) {
    throw new Error("Invalid benchmark value");
  }
  return Number(value);
}

function table(caption, results) {
  const wrapper = document.createElement("div");
  wrapper.className = "table-wrap";
  wrapper.tabIndex = 0;
  wrapper.setAttribute("role", "region");
  wrapper.setAttribute("aria-label", caption);
  const grid = document.createElement("table");
  grid.createCaption().textContent = caption;
  const headers = grid.createTHead().insertRow();
  for (const label of ["Strategy", "Ending USDT", "Net return", "Drawdown", "Fees (USDT)", "Fills"]) {
    const header = element("th", label);
    header.scope = "col";
    headers.append(header);
  }
  const body = grid.createTBody();
  for (const [id, label] of rules) {
    const result = results[id];
    const row = body.insertRow();
    const header = element("th", label);
    header.scope = "row";
    row.append(header);
    row.insertCell().textContent = amount.format(decimal(result.ending_equity));
    const net = decimal(result.return_pct);
    const returnCell = row.insertCell();
    returnCell.textContent = signedPercent.format(net) + "%";
    if (net !== 0) {
      returnCell.className = net > 0 ? "gain" : "loss";
    }
    row.insertCell().textContent = amount.format(decimal(result.max_drawdown_pct)) + "%";
    row.insertCell().textContent = amount.format(decimal(result.fees));
    if (!Number.isSafeInteger(result.fills) || result.fills < 0) {
      throw new Error("Invalid fill count");
    }
    row.insertCell().textContent = count.format(result.fills);
  }
  wrapper.append(grid);
  return wrapper;
}

function terms(entries) {
  const list = document.createDocumentFragment();
  for (const [name, value] of entries) {
    list.append(element("dt", name), element("dd", value));
  }
  return list;
}

function render(report) {
  if (report.schema_version !== 1 || report.input.kind !== "public-binance-spot") {
    throw new Error("Unsupported benchmark report");
  }
  const periods = document.createDocumentFragment();
  for (const [id, label] of horizons) {
    const period = report.results[id];
    const section = document.createElement("section");
    section.className = "period";
    section.id = "period-" + id;
    const start = utc.format(new Date(period.start_utc));
    const end = utc.format(new Date(period.end_utc));
    const interval = element("p", start + " to " + end + " UTC");
    const stress = document.createElement("details");
    stress.append(
      element("summary", "Show results with double costs"),
      table(label + " with double costs", period.scenarios.double_cost),
    );
    section.append(
      element("h3", label),
      interval,
      table(label + " at baseline costs", period.scenarios.baseline),
      stress,
    );
    periods.append(section);
  }
  const manifest = report.manifest;
  const ruleList = terms(rules.map(([id, label]) => [label + " (" + id + ")", manifest.strategies[id]]));
  const base = manifest.cost_scenarios.baseline;
  const provenance = terms([
    ["Market and bars", report.input.source + ". " + count.format(manifest.candle_count)
      + " hourly candles including " + manifest.warmup_hours + " preceding hours for warmup."],
    ["Baseline costs", decimal(base.fee_bps_per_fill) + " basis points fee per fill, "
      + decimal(base.full_spread_bps) + " basis points full spread and "
      + decimal(base.slippage_bps_per_fill) + " basis points slippage per fill."],
    ["Input SHA-256", report.input.sha256],
  ]);
  document.querySelector("#periods").replaceChildren(periods);
  document.querySelector("#rules").replaceChildren(ruleList);
  document.querySelector("#provenance").replaceChildren(provenance);
}

const status = document.querySelector("#results-status");
status.textContent = "Loading historical results…";
fetch("backtest-results.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Benchmark report unavailable");
    }
    return response.json();
  })
  .then(report => {
    render(report);
    status.textContent = "";
  })
  .catch(() => {
    status.textContent = "Results could not be loaded. Try the JSON download or reload this page.";
  });
