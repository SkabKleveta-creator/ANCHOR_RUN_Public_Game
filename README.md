# Anchor Run

**Anchor Run** is a browser-based arcade mini-game for the Skab Digital Reality Arcade / Reintegration Core project.

The current repository build is **Experimental 005E — Portrait Stability Cleanup**. It is a single-file HTML game intended for GitHub Pages deployment.

## Play

After GitHub Pages is enabled for this repository, the expected public URL format is:

```text
https://skabkleveta-creator.github.io/ANCHOR_RUN_Public_Game/
```

If the repository is named differently, replace `ANCHOR_RUN_Public_Game` with the actual repository name.

## Current build status

```text
Build: Experimental 005E — Portrait Stability Cleanup
Mode: Browser / mobile portrait candidate
Deployment target: GitHub Pages
Primary file: index.html
Accepted status: Candidate only until device playthrough confirms acceptance
```

## Core identity

Anchor Run is an access-route recovery game. Eli moves through broken access corridors where ladders have failed, using fixed anchors, boost, recharge stations, and route terminals to restore the path.

The guiding line is:

```text
The ladders are broken. The route is not.
```

## Controls

### Keyboard

```text
A / Left Arrow     Move left
D / Right Arrow    Move right
Space              Grapple
Shift              Boost
J / Enter          Interact / stabilize / recharge
Esc                Pause / resume
```

### Mobile

```text
L                  Move left
R                  Move right
GRAP               Grapple
BOOST              Boost
ACT                Interact / stabilize / recharge
```

## Locked design constraints

Anchor Run deliberately does **not** include:

- Combat
- Inventory
- Skill trees
- Dialogue systems
- Bosses
- Jumping
- Functional ladders
- New-mechanic pile-on

## Repository contents

```text
index.html                         Game file
.nojekyll                          GitHub Pages compatibility marker
README.md                          Public project overview
VERSION.md                         Current build status
CHANGELOG.md                       Build history
docs/PROJECT_LOCK.md               Project guardrails
docs/DESIGN_LOCK.md                Gameplay design lock
docs/CONTROLS.md                   Control profile
docs/ACCEPTANCE_CHECKLIST.md       Device acceptance checklist
docs/DEPLOYMENT.md                 GitHub Pages deployment steps
docs/TEST_PLAN.md                  Manual test plan
.github/ISSUE_TEMPLATE/            Bug/playtest report templates
.github/pull_request_template.md   PR review checklist
404.html                           GitHub Pages fallback page
```

## Local validation

The game has no external runtime dependencies. To syntax-check the inline JavaScript, run:

```bash
node tools/check-inline-js.mjs
```

That script extracts the inline `<script>` block from `index.html` and checks it with Node.
