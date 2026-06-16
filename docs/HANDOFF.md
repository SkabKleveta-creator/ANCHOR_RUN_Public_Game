# Anchor Run — Developer Handoff

## Current state

This repository is prepared around **Anchor Run Experimental 005E — Portrait Stability Cleanup**.

## Do not change casually

- Canvas coordinate model: 720×960 portrait.
- Mobile measured-layout approach.
- VIEW/WORLD split.
- Fixed-step simulation loop.
- No-jump rule.
- No-combat rule.
- Three-button right-side mobile cluster: GRAP / BOOST / ACT.

## Safe patch categories

- Text cleanup.
- README/docs cleanup.
- Minor HUD legibility adjustments.
- Mobile spacing fixes that preserve measured layout.
- Bug fixes proven by device test.

## Unsafe patch categories

- Rebuilding levels without reachability checks.
- Adding mechanics.
- Adding combat language.
- Replacing the mobile control profile.
- Returning to landscape-first layout.

## Next useful patch

Run a real mobile device playthrough and document the result in `docs/ACCEPTANCE_CHECKLIST.md` before labeling 005E as accepted.
