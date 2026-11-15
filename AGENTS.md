# Guide repository rules

This repository hosts a public static reader guide only. Keep the full research repository private; do not copy private research, credentials or account data into this site. The owner authorized this documentation site publication.

## Mandatory development and commit rules

These user-requested rules apply to all future changes.

1. Make small, focused commits: one coherent behavior, fix, test improvement or documentation change per commit. Keep the project usable at each commit; do not accumulate an entire milestone into one commit or split tightly coupled changes into broken intermediate states. Stage explicit paths and review the diff.
2. Before committing or pushing code, delegate verification to a QA subagent independent of the implementer. Supply acceptance criteria, changed paths and relevant connected behavior. The QA agent must run appropriate tests, inspect results and report defects, not merely approve the diff. For UI changes check rendering, navigation and accessibility at desktop/mobile sizes where browser tooling is available.
3. Fix QA findings and rerun affected checks before committing. Record tested revision or diff fingerprint, commands, results and limitations in the change evidence. Any code edits after QA require relevant re-verification. If QA tools are unavailable or a required check fails, the change is not ready to commit/push; report the actual gap without claiming success. Documentation-only changes require links, consistency, secrets and diff checks; this does not require a trading test suite.
4. No Codex/AI author attribution or generated-by annotations in source headers/comments, UI, documentation signatures, commit messages, PR descriptions or commit trailers. Do not add AI Co-authored-by or Signed-off-by trailers. Use the owner's configured Git identity. This rule concerns attribution: preserve useful technical comments, Python/TypeScript type annotations, truthful AI feature descriptions and research/audit facts. Do not rewrite existing history.
5. Never commit keys, private account data or runtime databases. Tests and QA cannot place real trades or spend provider credits without separately authorized operations.
6. Commit and push only after the relevant checks pass. Verify the remote commit and retain a clean, reviewable working tree.
