# Project assessment and reading guide

Updated November 16, 2026.

## Decision

The local replay/PAPER application is built and tested offline on feat/local-trading-platform, which has not merged into main. It is not ready for live funds. This is an engineering assessment, not evidence of profitable strategies.

## What exists

The initial private package contains 45 Markdown documents, about 53,000 words and more than 200 source URLs. Twenty-one specialist/reviewer agents worked in sequential waves. These counts describe the initial research snapshot, not every later site update. Topics include exchange contracts, strategies, books, sizing, realistic costs, tax cash flow, data/replay, AI evaluation, security and recovery. Source-access limitations are recorded in the reports. Full books were not claimed read and strategy experiments were not reproduced.

## How to read it

Start with product scope, architecture and risk policy. Then read the local-first roadmap. Use the research atlas for specific questions. The full documents remain in the private coinswitch-scalping-lab repository and require GitHub access. Public visitors can read this guide without access to that repository.

## First milestone

The implemented local replay/PAPER workflow provides exact decimal accounting, durable order records, cost-aware sizing, restart recovery, a light dashboard and explicitly configured read-only depth polling. Core replay/paper operations work without an AI provider. Python/uv/FastAPI/Uvicorn, React/TypeScript and SQLite are implemented. AI explanations are optional; a vector database is not required initially.

## Before live trading

Verify actual account eligibility, fees, order types, client-ID lookup, partial fills, cancellation races and uncertain-write reconciliation. Test loss limits, storage failure, duplicate writers, restart and restore. Obtain explicit capital limits and a monitored, separately authorized pilot. A small account is still real money.

## Review findings

Illustrative installed-skill code contains unsafe assumptions about limit fills, trade counting, equity continuity and risk-metric conventions. The design prohibits copying those examples into execution without correction and testing. No strategy profitability or 400x/500x return claim has been established.

## Development workflow

Small, coherent commits. Independent QA subagents verify code before commit/push; findings must be fixed and affected tests rerun. No Codex/AI attribution or generated-by annotations. Useful technical comments, types and truthful product descriptions remain. No secrets or live trades in tests.

## Hosting boundary

This Pages site hosts documentation only. A continuous trading worker needs separate persistent hosting. Current estimates and exclusions are in the private hosting report; no cloud worker has been provisioned.

## Current verification checkpoint

November 16, 2026: application/release revision `034ad6d46f655665ae1812080b1d7ce815c48517` passed **318 backend tests on Ubuntu/Python 3.12**, no skips, with 91% displayed statement coverage. Windows passed 316 tests with two POSIX-only skips. Seventeen frontend tests, the production build, Ruff, strict typing and dependency audits passed. Ten specialist assignments examined use cases, implemented fixes, and independently reviewed browser/delivery behavior; the private source includes a 32-use-case evidence matrix.

An additional full verification pass permanently added eight seeded PAPER sequence tests: 1,280 regular quotes, 56 duplicates and 24 restarts checked against an independent accounting calculation. Injected extra cash, wrong fees and limit-price violations were all detected. Fresh replay/browser functional checks and 42 mocked PAPER interaction assertions passed; screenshot capture was unavailable in this run. The runtime application code did not change during this test expansion.

The preceding use-case review corrected wrong-mode and malformed-state restarts, live re-entry with stale account evidence, terminal-state history after UNKNOWN, configured PAPER exit precision/minima, emergency controls during pending polls, stale/delayed advisory attribution, backup overwrites and archive restart compatibility. Regression tests cover failure/recovery sequences, not just successful calls.

[CI run 43859316072](https://github.com/sandeshbagmare/coinswitch-scalping-lab/actions/runs/43859316072) and [source release 43859316349](https://github.com/sandeshbagmare/coinswitch-scalping-lab/actions/runs/43859316349) passed. The release installed its extracted archive and passed process/UI/auth/replay/restart/restore checks. It also installed and started the packaged systemd service on a disposable Linux runner, exercised paused restart and the health/backup jobs, activated timers, and verified private backup files. The source archive/checksum are workflow artifacts; private source links require account access.

The app remains on `feat/local-trading-platform`. No tagged release, owner cloud server, real orders or paid-provider calls were made. Actual account/fee reconciliation, a trusted operational verifier, owner-host monitoring and encrypted off-host recovery remain prerequisites. CI service checks do not establish ongoing host operation or strategy profitability. Public Pages sites host documentation only.
