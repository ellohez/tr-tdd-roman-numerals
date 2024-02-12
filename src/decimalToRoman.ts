import { validateDecimalWithinRomanLimits } from "./helperFunctions";

export const convertDecimalToRoman = (decimal: number): string => {
  if (!validateDecimalWithinRomanLimits(decimal)) {
    throw new Error(
      `convertDecimalToRoman - The Romans had no version of ${decimal}`
    );
  }

  const numeralMap = new Map<number, string>([
    [1, "I"],
    [5, "V"],
    [10, "X"],
    [50, "L"],
    [100, "C"],
    [500, "D"],
    [1000, "M"],
  ]);

  const simpleNumeral = numeralMap.get(decimal);
  if (simpleNumeral !== undefined) {
    return simpleNumeral;
  }

  let romanNumerals = "";
  // Simple code to deal with converting values < 10
  // ignoring 5/V and 10/X as we have already dealt with them.
  const numeral = numeralMap.get(1);
  if (decimal < 4) {
    for (let i = 1; i <= decimal; i++) {
      romanNumerals += numeral;
    }
  } else if (decimal === 4) {
    romanNumerals = "IV";
  } else if (decimal < 9) {
    romanNumerals = "V";
    for (let i = 6; i <= decimal; i++) {
      romanNumerals += numeral;
    }
  } else {
    romanNumerals = "IX";
  }

  // TODO: Convert and return - this is just for testing.
  return romanNumerals !== "" ? romanNumerals : decimal.toString();
};
