import test from "node:test";
import assert from "node:assert/strict";

import { useInstrument } from "./instrument-store.ts";

test("instrument defaults to symbolic reading", () => {
  const state = useInstrument.getState();
  assert.equal(state.readingPlain, false);
});
