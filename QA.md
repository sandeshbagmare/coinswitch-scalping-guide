# QA evidence: reader guide

Verified November 15, 2026 by an independent QA subagent before publication.

Result: PASS, no blocking findings.

- Node checks verified 38 HTML/Markdown links, local files/fragments, secret patterns and normalized rule parity: zero errors.
- Real Edge rendering inspected at 1440x900 and 375x812: no horizontal overflow.
- Assessment navigation reached #assessment. Keyboard Tab focus was visible.
- Guide and private-repository assessment reports matched. Public files contained no full research, credentials or account data.
- Whitespace checks passed. Browser/server stopped; artifacts stored outside repositories.

Commands included playwright-cli goto, resize, eval, click, press Tab, snapshot, screenshot and console; Node checks ran through stdin.

Combined SHA256 for ordered guide files AGENTS.md, README.md, REPORT.md, index.html, style.css, .nojekyll, followed by lab files AGENTS.md, README.md, context/10-repository-rules.md, context/12-progress.md, docs/PROJECT-REPORT.md:

caf72ed55401890ffbff92ffbd5e2cf046f702586b6a7bd7aff30aa4e808e876

Algorithm: SHA256 over relative Windows path + NUL + UTF-8 file text for each file, joined with NUL. This records the pre-publication QA snapshot; later status-only documentation edits do not imply that the snapshot included them.

Limitations: no full automated accessibility audit; private GitHub destinations require account access. Local browser reported a harmless missing favicon. Remote Pages status is verified separately during publication. No trading application or trading tests are claimed.

## November 16 continuation

The trading guide was refocused on a one-minute overview, reading path, architecture/data flow, component boundaries and current readiness. The actual portfolio is [portfolio-engineering](https://sandeshbagmare.github.io/portfolio-engineering/); the separate [Astrology Evidence guide](https://sandeshbagmare.github.io/astrology-evidence/) is linked. The public assessment binds application evidence to source revision `54e2326fdce33943fac788a7b156fdd11d9184f8`; Pages hosts documentation only.

Independent QA verdict: Ship, no defects. All local files/fragments and private blob targets resolve; public portfolio/guide/repository URLs returned HTTP 200. Edge rendering at 1440x1000 and 375x812 had no clipping or horizontal overflow. Navigation, skip link, native disclosure keyboard operation and visible focus passed; console had zero errors/warnings. Credential-pattern and whitespace checks passed. Playwright artifacts are ignored and were not staged. Private GitHub navigation without authentication was not verified.

Reviewed SHA-256: `index.html` `CCB0CF52DD8B7AB48D2BCC3E267E675531461628A8CA676D67B41CC6C162F26B`; `style.css` `7E573173158CFE0014F59F1249B1A28CD90B5E464A777B377783199B11752988`; `REPORT.md` `C4C3C696A6BB2E9C55583DEB8265841C295FD0FCBCF553FD247F24CF9B17B574`. Browser/server stopped; screenshots stayed outside the repository. This is site QA; application verification is described in the assessment.
