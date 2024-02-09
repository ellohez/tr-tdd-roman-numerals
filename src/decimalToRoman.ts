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

    // TODO: Convert and return - this is just for testing.
    return decimal.toString();
};
