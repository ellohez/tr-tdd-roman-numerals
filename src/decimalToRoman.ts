import {
  validateDecimalWithinRomanLimits,
  splitDecimalIntoDigits,
} from "./helperFunctions";

const numeralMap = new Map<number, string>([
  [1, "I"],
  [2, "II"],
  [3, "III"],
  [4, "IV"],
  [5, "V"],
  [6, "VI"],
  [7, "VII"],
  [8, "VIII"],
  [9, "IX"],
  [10, "X"],
  [20, "XX"],
  [30, "XXX"],
  [40, "XL"],
  [50, "L"],
  [60, "LX"],
  [70, "LXX"],
  [80, "LXXX"],
  [90, "XC"],
  [100, "C"],
  [200, "CC"],
  [300, "CCC"],
  [400, "CD"],
  [500, "D"],
  [600, "DC"],
  [700, "DCC"],
  [800, "DCCC"],
  [900, "CM"],
  [1000, "M"],
  [2000, "MM"],
  [3000, "MMM"],
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
  // Reverse the array, so that we deal with the
  // ones, tens, hundreds and thousands in that order.
  arrayOfNumbers.reverse();
  const onesInNumerals = numeralMap.get(arrayOfNumbers[0]);
  // tensInNumerals = arrayOfNumbers.length > 1 && arrayOfNumbers[1] * 10 !== 0 ? convert array number : "";
  // hundredsInNumerals = arrayOfNumbers.length > 2 && arrayOfNumbers[2] * 100 !== 0 ? convert array number : "";
  // thousandsInNumerals = arrayOfNumbers.length > 3 && arrayOfNumbers[3] * 1000 !== 0 ? convert array number : "";

  romanNumerals += onesInNumerals;

  // TODO: Convert and return - this is just for testing.
  return romanNumerals !== "" ? romanNumerals : decimal.toString();
};

