import { validateDecimalWithinRomanLimits } from "./helperFunctions";

export const convertDecimalToRoman = (decimal: number): string => {
  if (!validateDecimalWithinRomanLimits(decimal)) {
    throw new Error(
      `convertDecimalToRoman - The Romans had no version of ${decimal}`
    );
  }

  // TODO: Convert and return - this is just for testing.
  return decimal.toString();
};
