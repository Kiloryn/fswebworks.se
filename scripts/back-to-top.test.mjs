import assert from "node:assert/strict";
import test from "node:test";
import { uppButtonBottomPx } from "../src/lib/back-to-top.ts";

test("Upp stays at the base offset while the footer is below the fold", () => {
  assert.equal(uppButtonBottomPx(800, 900, 32), 32);
  assert.equal(uppButtonBottomPx(800, undefined, 32), 32);
});

test("Upp lifts above a footer that has entered the viewport", () => {
  // Footer top 100px above the bottom edge → 100px + 12px gap.
  assert.equal(uppButtonBottomPx(800, 700, 32), 112);
  assert.equal(uppButtonBottomPx(800, 788, 32), 32);
});
