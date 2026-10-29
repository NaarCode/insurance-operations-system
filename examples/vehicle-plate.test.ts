import assert from "node:assert/strict";
import test from "node:test";
import { isValidVehiclePlate, normalizeVehiclePlate } from "./vehicle-plate.ts";
test("accepts a human-readable plate with Persian digits", () => {
  assert.equal(isValidVehiclePlate("۱۲ الف ۳۴۵"), true);
});
test("collapses repeated whitespace", () => {
  assert.equal(normalizeVehiclePlate(" ۱۲  الف   ۳۴۵ "), "۱۲ الف ۳۴۵");
});
test("rejects invalid symbols and plates without digits", () => {
  assert.equal(isValidVehiclePlate("bad@plate"), false);
  assert.equal(isValidVehiclePlate("abcdef"), false);
});
