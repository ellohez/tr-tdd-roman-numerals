import { convertDecimalToRoman } from "./decimalToRoman";

describe("convertDecimalToRoman function", () => {
  test("should throw an error for numbers out of range for Roman numerals", () => {
    // Arrange
    const errorMsg =
      "convertDecimalToRoman - Unfortunately, the Romans had no version of ";
    // Store all values which cannot be converted
    const invalidInputs = [-30, 0, 4000, 7.5];
    // Act & Assert
    expect(() => {
      convertDecimalToRoman(invalidInputs[0]);
    }).toThrow(Error(errorMsg + invalidInputs[0] + "!"));

    expect(() => {
      convertDecimalToRoman(invalidInputs[1]);
    }).toThrow(Error(errorMsg + invalidInputs[1] + "!"));

    expect(() => {
      convertDecimalToRoman(invalidInputs[2]);
    }).toThrow(Error(errorMsg + invalidInputs[2] + "!"));

    expect(() => {
      convertDecimalToRoman(invalidInputs[3]);
    }).toThrow(Error(errorMsg + invalidInputs[3] + "!"));
  });
  test("should return a single numeral for an exact numeral value input", () => {
    // Arrange
    const decimalNumerals = [1, 5, 10, 50, 100, 500, 1000];
    const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];

    // Act & Assert
    expect(convertDecimalToRoman(decimalNumerals[0])).toBe(romanNumerals[0]);
    expect(convertDecimalToRoman(decimalNumerals[1])).toBe(romanNumerals[1]);
    expect(convertDecimalToRoman(decimalNumerals[2])).toBe(romanNumerals[2]);
    expect(convertDecimalToRoman(decimalNumerals[3])).toBe(romanNumerals[3]);
    expect(convertDecimalToRoman(decimalNumerals[4])).toBe(romanNumerals[4]);
    expect(convertDecimalToRoman(decimalNumerals[5])).toBe(romanNumerals[5]);
    expect(convertDecimalToRoman(decimalNumerals[6])).toBe(romanNumerals[6]);
  });
  test("should convert simple non-single numeral numbers up to 10", () => {
    // Arrange
    const decimalValues = [2, 3, 4, 6, 7, 8, 9];
    const romanNumerals = ["II", "III", "IV", "VI", "VII", "VIII", "IX"];
    // Act & Assert
    expect(convertDecimalToRoman(decimalValues[0])).toBe(romanNumerals[0]);
    expect(convertDecimalToRoman(decimalValues[1])).toBe(romanNumerals[1]);
    expect(convertDecimalToRoman(decimalValues[2])).toBe(romanNumerals[2]);
    expect(convertDecimalToRoman(decimalValues[3])).toBe(romanNumerals[3]);
    expect(convertDecimalToRoman(decimalValues[4])).toBe(romanNumerals[4]);
    expect(convertDecimalToRoman(decimalValues[5])).toBe(romanNumerals[5]);
    expect(convertDecimalToRoman(decimalValues[6])).toBe(romanNumerals[6]);
  });
  // Test that 40 !== XXXX, 90 is not LXXXX etc
  xtest("should only use addition method for a max of 3 smaller numerals", () => {
    // Arrange
    const decimalValues = [4, 40, 90, 900];
    const incorrectNumerals = ["IIII", "XXXX", "LXXXX", "DCCCC"];

    // Act & Assert
    expect(convertDecimalToRoman(decimalValues[0])).not.toBe(
      incorrectNumerals[0]
    );
    expect(convertDecimalToRoman(decimalValues[1])).not.toBe(
      incorrectNumerals[1]
    );
    expect(convertDecimalToRoman(decimalValues[2])).not.toBe(
      incorrectNumerals[2]
    );
    expect(convertDecimalToRoman(decimalValues[3])).not.toBe(
      incorrectNumerals[3]
    );
  });
  // Test that 8 !== IIX, 70 !== XXXC etc.
  xtest("should only use subtraction method to give one smaller numeral before a larger one", () => {
    // Arrange
    const decimalValues = [8, 60, 70, 880];
    const incorrectNumerals = ["IIX", "XXXXC", "XXXC", "CCMXXC"];

    // Act & Assert
    expect(convertDecimalToRoman(decimalValues[0])).not.toBe(
      incorrectNumerals[0]
    );
    expect(convertDecimalToRoman(decimalValues[1])).not.toBe(
      incorrectNumerals[1]
    );
    expect(convertDecimalToRoman(decimalValues[2])).not.toBe(
      incorrectNumerals[2]
    );
    expect(convertDecimalToRoman(decimalValues[3])).not.toBe(
      incorrectNumerals[3]
    );
  });
  xtest("should return the correct pair of numerals that subtract for any values including a 4 or a 9", () => {
    // Arrange, Act and Assert
    expect(convertDecimalToRoman(4)).toBe("IV");
    expect(convertDecimalToRoman(9)).toBe("IX");
    expect(convertDecimalToRoman(40)).toBe("XL");
    expect(convertDecimalToRoman(90)).toBe("XC");
    expect(convertDecimalToRoman(900)).toBe("CM");
  });
});