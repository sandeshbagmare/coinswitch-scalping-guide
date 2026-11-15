# Project assessment and reading guide

Updated November 15, 2026.

## Decision

The planning package is sufficient to start the local paper-trading implementation. It is not a working trading system and is not ready for live funds. This is an engineering assessment, not evidence of profitable strategies.

## What exists

The initial private package contains 45 Markdown documents, about 53,000 words and more than 200 source URLs. Twenty-one specialist/reviewer agents worked in sequential waves. These counts describe the initial research snapshot, not every later site update. Topics include exchange contracts, strategies, books, sizing, realistic costs, tax cash flow, data/replay, AI evaluation, security and recovery. Source-access limitations are recorded in the reports. Full books were not claimed read and strategy experiments were not reproduced.

## How to read it

Start with product scope, architecture and risk policy. Then read the local-first roadmap. Use the research atlas for specific questions. The full documents remain in the private coinswitch-scalping-lab repository and require GitHub access. Public visitors can read this guide without access to that repository.

## First milestone

Build a local replay/paper workflow with exact accounting, durable order records, cost-aware sizing, restart recovery and a light dashboard. Core paper operation must work without an AI provider. Python/uv/FastAPI/Uvicorn, React/TypeScript and SQLite are proposed. AI explanations are optional; a vector database is not required initially.

## Before live trading

Verify actual account eligibility, fees, order types, client-ID lookup, partial fills, cancellation races and uncertain-write reconciliation. Test loss limits, storage failure, duplicate writers, restart and restore. Obtain explicit capital limits and a monitored, separately authorized pilot. A small account is still real money.

## Review findings

Illustrative installed-skill code contains unsafe assumptions about limit fills, trade counting, equity continuity and risk-metric conventions. The design prohibits copying those examples into execution without correction and testing. No strategy profitability or 400x/500x return claim has been established.

## Development workflow

Small, coherent commits. Independent QA subagents verify code before commit/push; findings must be fixed and affected tests rerun. No Codex/AI attribution or generated-by annotations. Useful technical comments, types and truthful product descriptions remain. No secrets or live trades in tests.

## Hosting boundary

This Pages site hosts documentation only. A continuous trading worker needs separate persistent hosting. Current estimates and exclusions are in the private hosting report; no cloud worker has been provisioned.
