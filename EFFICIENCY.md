# Token-efficiency routing

## Default

- Infer layout from code/CSS. No screenshots.
- One skill per turn max. Load only the step you are on.
- Prefer DESIGN.md / locked brand notes over reloading full Hallmark cookbook for small CSS tweaks.
- Touch only files needed for the ask.

## Skill routing

- New page / looks AI → Hallmark (prefer `audit` before full redesign when the room already exists).
- Shaping room / type / hierarchy → frontend-design.
- Focus, labels, tap targets, a11y → web-design-guidelines.
- Layout sense → read CSS (flex/grid children, overflow, sticky, dvh, breakpoints). Do not screenshot.

## Screenshots (opt-in only)

- Default: never open Chrome / never capture screenshots.
- Only when the user explicitly says **visual audit** (or clearly synonymous: visual pass / screenshot QA / check mobile visually).
- When unlocked: capture desktop + ~375px for the touched routes, report defects (overflow, empty columns, overlap, broken images, obvious responsive breaks), stop.
- Do not redesign, restyle, or run Hallmark from a visual audit unless the user also asks.

## Never

- Stack Hallmark + frontend-design + guidelines in one prompt.
- Auto visual-qa / screenshot loops.
- Open Chrome "to verify" without the visual-audit phrase.
