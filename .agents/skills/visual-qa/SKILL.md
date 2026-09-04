---
name: visual-qa
description: Last look before a UI change is done. Screenshot the rendered page, then catch layout defects — Pic as a direct grid child, empty columns, overflow, overlap, broken images. Use after building or changing UI, when the user asks if a page looks right, or when they attach a screenshot.
---

# Visual QA

Last look. Not a redesign. Not a second Hallmark pass.

Read this file. Do not invent the rest from `AGENTS.project.md`.

## When

- After building or changing UI, before calling the work done
- The user asks if a page looks right
- The user attached or pasted a screenshot

## Order

1. If the user sent a screenshot, **Read it**. That is the evidence.
2. If they did not, capture the changed routes in the browser (desktop and ~375px). Code-only review is not visual QA.
3. Grep the touched files for the layout defects below.
4. Report defects with route + what you saw. Fix them. Re-check the same screenshot/viewport.
5. Stop. Do not restyle a room because “consistency” or “restraint”.

## Layout defects (this project)

These two are the usual agent bugs here. Check them every time.

### Pic as a direct grid child

`Pic` / `<img>` / `<video>` must not be a **direct** child of `display: grid`.

A replaced element as a grid item stretches to the cell. Aspect ratio dies, the next column can collapse, and you get a blank track that looks like an empty column.

```tsx
// fail
<div className="grid md:grid-cols-2">
  <Pic src="…" />
</div>

// pass — the grid item is a box; the image fills the box
<div className="grid md:grid-cols-2">
  <div className="relative min-h-[42vh]">
    <Pic src="…" className="absolute inset-0 size-full object-cover" />
  </div>
</div>
```

Grep touched files for `<Pic` / `<img` inside a `grid` parent with no wrapping element.

### Empty column

A grid with more tracks than children leaves a vacant column. That is a hole, not negative space.

- `md:grid-cols-3` with one or two items
- `repeat(3, 1fr)` when the map can yield fewer
- `auto-fill` when you meant `auto-fit` (empty tracks keep width)
- a grid cell that only exists as a spacer `<div />`

Fix the track count to match the content, or fill the cell with a designed empty state. Do not leave a blank column.

## Also look (screenshot)

Be specific. “Spacing looks off” is not a finding.

- Horizontal scroll at 320 / 375
- Overlap (sticky header covering the focused field, text on photo with no contrast)
- Broken / missing images
- Text overflow, clipped glyphs, tap targets under 44px
- Uneven leftover gap that is actually an empty grid track

## Out of scope

- Do not swap type, palette, or macrostructure
- Do not flatten a colour-field hero or a salon split
- Do not re-run frontend-design or Hallmark from here
- Title Case / English voice from other skills do not apply to Swedish copy

## Output

```
### Visual QA

**Evidence:** [screenshot path or “browser: /vvs 1440 + 375”]

#### Fail
- `/vvs` hero: Pic is a direct grid child (`src/routes/vvs.tsx:64`)
- `/salong` stylists: `sm:grid-cols-3` with 2 people on one row → empty third cell

#### Pass
- `/malare` colour field: four swatches fill the 2×2
```

No preamble. If everything passes, say pass and list the routes you looked at.

## Sources

Researched from common visual-QA skill shape (screenshot first, then critique)
and this repo’s known CSS-grid failure modes. Not a Grok skill dump.
