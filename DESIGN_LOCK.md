# Anchor Run — Design Lock

## Concept

The ladders are broken. The route is not.

Eli must traverse damaged access corridors by using fixed grapple anchors, limited boost, recharge stations, and route terminals. The player is not fighting enemies. The player is restoring access.

## Format

- 720×960 portrait canvas.
- Fixed visible window: `VIEW`.
- Per-level world height: `WORLD`.
- Tall finale scrolls vertically.
- Mobile controls sit below the measured canvas.

## Level model

Each level is data-driven and may contain:

- `spawn`
- `platforms`
- `strainPits`
- `brokenLadders`
- `anchors`
- `rechargeStations`
- `routeTerminals`
- `completionZone`
- `theme`

## Route model

- 10 curated sectors in fixed order.
- Sectors 1–3: Mechanical Access.
- Sectors 4–6: Warehouse Route.
- Sectors 7–9: Industrial Rooftop.
- Sector 10: Final Access Core.

## Completion rule

A sector is complete only when required terminal/switch interactions are complete and Eli reaches the restored access zone.

## Failure model

Anchor Run uses **system strain**, not death. Falling through a Strain Pit resets Eli to the spawn point and restores boost.

## Language lock

Approved words:

- access
- route
- stabilize
- restore
- recharge
- strain
- signal
- terminal
- switch
- release

Avoid combat framing.
