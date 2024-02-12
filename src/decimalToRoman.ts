import {
  validateDecimalWithinRomanLimits,
  splitDecimalIntoDigits,
} from "./helperFunctions";

const numeralMap = new Map<number, string>([
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [10, "X"],
  [40, "XL"],
  [50, "L"],
  [90, "XC"],
  [100, "C"],
  [400, "CD"],
  [500, "D"],
  [900, "CM"],
  [1000, "M"],
]);

export const convertDecimalToRoman = (decimal: number): string => {
  if (!validateDecimalWithinRomanLimits(decimal)) {
    throw new Error(
      `convertDecimalToRoman - Unfortunately, the Romans had no version of ${decimal}!`
    );
  }

  const simpleNumeral = numeralMap.get(decimal);
  if (simpleNumeral !== undefined) {
    return simpleNumeral;
  }

  let romanNumerals = "";
  const arrayOfNumbers = splitDecimalIntoDigits(decimal);
  romanNumerals = convertNumberOfOnes(arrayOfNumbers[3]);

  // TODO: Convert and return - this is just for testing.
  return romanNumerals !== "" ? romanNumerals : decimal.toString();
};

const convertNumberOfOnes = (decimalOnes: number): string => {
  let romanNumerals = "";
  // Convert number of 1s to Roman Numerals
  const simpleNumeral = numeralMap.get(decimalOnes);
  if (simpleNumeral !== undefined) {
    romanNumerals += simpleNumeral;
  }
  // Simple code to deal with converting values < 10
  // ignoring 5/V and 10/X as we have already dealt with them.
  else if (decimalOnes < 4) {
    for (let i = 1; i <= 3; i++) {
      romanNumerals += numeralMap.get(1);
    }
  } else if (decimalOnes > 5 && decimalOnes < 9) {
    romanNumerals += numeralMap.get(5);
    for (let i = 6; i < 9; i++) {
      romanNumerals += numeralMap.get(1);
    }
  }

  return romanNumerals;
};
