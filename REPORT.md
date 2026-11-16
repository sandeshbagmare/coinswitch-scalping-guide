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

November 16, 2026: tested application revision `54e2326fdce33943fac788a7b156fdd11d9184f8`. Windows Python 3.14.8 backend checks passed 180 tests with UserWarning and ResourceWarning treated as errors, skipped one optional native LangChain constructor check because Windows Application Control blocks a dependency, and reported 89% statement coverage. Eleven frontend tests, production build, npm audit (zero vulnerabilities), Ruff and strict mypy passed. [GitHub Actions Ubuntu/Python 3.12 CI run 43789957640](https://github.com/sandeshbagmare/coinswitch-scalping-lab/actions/runs/43789957640) passed for the same revision. A real loopback API/React smoke test passed at desktop and mobile sizes; a source archive with the built frontend and a SHA-256 checksum was assembled locally.

The app remains on `feat/local-trading-platform`; `main` retains the research baseline. The source-release workflow exists on that feature branch, but manual GitHub dispatch returned 404 because it is not registered on the default branch; no tagged release or hosted server was published. Credential-backed exchange/AI checks, a trusted live verifier, target-host permissions/services/monitoring and off-host restore drills remain prerequisites. These checks establish local replay/PAPER engineering behavior, not strategy profitability or live readiness.

Start with current progress and local setup on the feature branch, then scope, architecture, risk policy and roadmap. Research remains available on main.
