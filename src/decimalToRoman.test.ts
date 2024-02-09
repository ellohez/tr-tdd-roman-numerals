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
    // Act
    // Assert
    expect(() => {
      convertDecimalToRoman(0);
    }).toThrow(Error);
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
