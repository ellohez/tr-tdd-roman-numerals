import {
  validateDecimalWithinRomanLimits,
  splitDecimalIntoDigits,
} from "./helperFunctions";

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

describe("splitDecimalIntoDigits", () => {
  test("should return an array of number of thousands, hundreds, tens, ones", () => {
    // Arrange
    // Act & assert
    expect(splitDecimalIntoDigits(1234)).toEqual([1, 2, 3, 4]);
    expect(splitDecimalIntoDigits(234)).toEqual([2, 3, 4]);
    expect(splitDecimalIntoDigits(34)).toEqual([3, 4]);
    expect(splitDecimalIntoDigits(4)).toEqual([4]);
    expect(splitDecimalIntoDigits(3099)).toEqual([3, 0, 9, 9]);
  });
});
