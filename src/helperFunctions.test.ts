import { validateDecimalWithinRomanLimits } from "./helperFunctions";

describe("validateDecimalWithinRomanLimits", () => {
  test("should return false if decimal cannot be converted using Roman numeral system", () => {
    // Assign
    // Store all values which cannot be converted
    const invalidInputs = [-30, 0, 4000, 7.5];

    // Act & Assert
    expect(validateDecimalWithinRomanLimits(invalidInputs[0])).toBe(false);
    expect(validateDecimalWithinRomanLimits(invalidInputs[1])).toBe(false);
    expect(validateDecimalWithinRomanLimits(invalidInputs[2])).toBe(false);
    expect(validateDecimalWithinRomanLimits(invalidInputs[3])).toBe(false);
  });
});
