/* 
Helper functions for the decimal to roman numeral conversion
*/

export const validateDecimalWithinRomanLimits = (decimal: number): boolean => {
  if (decimal <= 0 || decimal >= 4000 || decimal % 1 !== 0) {
    return false;
  }

  return true;
};
