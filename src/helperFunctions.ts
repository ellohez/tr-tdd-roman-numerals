/* 
Helper functions for the decimal to roman numeral conversion
*/

export const validateDecimalWithinRomanLimits = (decimal: number): boolean => {
  if (decimal <= 0 || decimal >= 4000 || decimal % 1 !== 0) {
    return false;
  }

  return true;
};

// Convert a number to into its individual digits to
// represent the number of thousands, hundreds etc. 
export const splitByPowerOfTen = (decimal: number): Array<number> => {
  if (decimal <= 0 || decimal === undefined) {
    return [];
  }

  const stringArray = decimal.toString().split("");
  return stringArray.map((stringNumber) => parseInt(stringNumber));
};