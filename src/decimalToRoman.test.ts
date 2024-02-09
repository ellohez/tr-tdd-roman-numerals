import { convertDecimalToRoman } from "./decimalToRoman";

describe("convertDecimalToRoman function", () => {
  test("should convert simple numbers up to 10", () => {
    // Arrange
    const input = 2;
    // Act & Assert
    expect(convertDecimalToRoman(input)).toBe("II");
  });

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

  test("should return 0 when all others are minus numbers", () => {
    // Arrange
    // Act
    // Assert
  });

  test("should return the only value for a one digit array", () => {
    // Arrange
    // Act
    // Assert
  });

  // Needed with TS??
  test("should throw an error for a none number array", () => {
    // Arrange
    // Act
    // Assert
  });
});