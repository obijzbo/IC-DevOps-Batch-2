// mathUtils.test.js

import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "./mathUtils.js"


describe("mathUtils", () => {
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-2, 3)).toBe(1);
    expect(add(-2, 3)).toBe(1);
  });

  it("should subtract two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(3, 6)).toBe(-3);
  });

  it("should multiply two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });

  it("should divide two numbers correctly", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(-6, 3)).toBe(-2);
  });

  it("should throw an error when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
  });
});

