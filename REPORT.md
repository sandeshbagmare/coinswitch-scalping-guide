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

November 16, 2026: application/release revision `0052be1e3c732cb90f44c71d87ee4e9ad7c55d44` passed **213 backend tests on Ubuntu/Python 3.12**, no skips, with 90% coverage. Windows Python 3.14.8 passed 211 tests with two POSIX-only skips. The installed LangChain constructor check passed without network calls. Fourteen frontend tests, production build, Ruff, strict mypy and dependency audits passed; the Python audit covered 61 locked dependencies with no known vulnerabilities after a cryptography update.

Independent review reproduced and corrected failed-commit accounting, atomic PAPER quote recovery, partial buys after pause, outdated exit limits, shared loss limits, literal backup filenames, stale health display, decimal/API contracts and release packaging. Regression tests cover the failure paths. [CI run 43807656278](https://github.com/sandeshbagmare/coinswitch-scalping-lab/actions/runs/43807656278) passed. [Source release run 43807656389](https://github.com/sandeshbagmare/coinswitch-scalping-lab/actions/runs/43807656389) installed its extracted archive and passed real loopback health/auth/UI/replay/restart/restore checks. These private links require repository access.

The source archive and checksum are available as the workflow artifact; no tagged release or cloud server was published. The app remains on `feat/local-trading-platform`; main retains the research baseline. Linux CI verified database/WAL/SHM/backup modes, secret-file ownership and service/timer definitions. An installed host's service/timer behavior, alert delivery, encrypted off-host backups and restore drills still require operational checks. Actual account permissions/fees/order behavior and the trusted live evidence producer remain outstanding. No real orders or paid-provider requests were used, and profitability remains unproven.

Start with current progress and local setup on the implementation branch, then scope, architecture, risk policy and roadmap. The public portfolio and this guide are documentation sites.
