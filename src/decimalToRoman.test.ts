import { convertDecimalToRoman } from "./decimalToRoman";

describe("convertDecimalToRoman function", () => {
  test("should throw an error for numbers out of range for Roman numerals", () => {
    // Arrange
    const errorMsg = "convertDecimalToRoman - The Romans had no version of ";
    // Store all values which cannot be converted
    const invalidInputs = [-30, 0, 4000, 7.5];
    // Act & Assert
    expect(() => {
      convertDecimalToRoman(invalidInputs[0]);
    }).toThrow(Error(errorMsg + invalidInputs[0]));

    expect(() => {
      convertDecimalToRoman(invalidInputs[1]);
    }).toThrow(Error(errorMsg + invalidInputs[1]));

    expect(() => {
      convertDecimalToRoman(invalidInputs[2]);
    }).toThrow(Error(errorMsg + invalidInputs[2]));

    expect(() => {
      convertDecimalToRoman(invalidInputs[3]);
    }).toThrow(Error(errorMsg + invalidInputs[3]));
  });
  test("should return a single numeral for an exact numeral value input", () => {
    // Arrange
    const numeralValues = [1, 5, 10, 50, 100, 500, 1000];
    const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];

    // Act && Assert
    expect(convertDecimalToRoman(numeralValues[0])).toBe(romanNumerals[0]);
    expect(convertDecimalToRoman(numeralValues[1])).toBe(romanNumerals[1]);
    expect(convertDecimalToRoman(numeralValues[2])).toBe(romanNumerals[2]);
    expect(convertDecimalToRoman(numeralValues[3])).toBe(romanNumerals[3]);
    expect(convertDecimalToRoman(numeralValues[4])).toBe(romanNumerals[4]);
    expect(convertDecimalToRoman(numeralValues[5])).toBe(romanNumerals[5]);
    expect(convertDecimalToRoman(numeralValues[6])).toBe(romanNumerals[6]);
  });
  test("should convert simple numbers up to 10", () => {
    // Arrange
    const input = 2;
    // Act & Assert
    expect(convertDecimalToRoman(input)).toBe("II");
  });
  test("should return the correct pair of numerals that subtract for any values including a 4 or a 9", () => {
    // Arrange, Act and Assert
    expect(convertDecimalToRoman(4)).toBe("IV");
    expect(convertDecimalToRoman(9)).toBe("IX");
    expect(convertDecimalToRoman(40)).toBe("XL");
    expect(convertDecimalToRoman(90)).toBe("XC");
  });

  test("should", () => {
    // Arrange
    // Act
    // Assert
  });
});