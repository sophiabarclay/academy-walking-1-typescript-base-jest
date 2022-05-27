const characters = [
  {numeral: "I", midPoint: "V"},
  {numeral: "X", midPoint: "L"},
  {numeral: "C", midPoint: "D"},
  {numeral: "M", midPoint: "V"}
];

export const romanNumeraliser = (number: number): string => {
  const numberSplit = Array.from(String(number), Number).reverse();
  let romanNumeral: string[] = [];

  numberSplit.forEach((value, idx) => {
    if (value === 0) return;

    const currentSet = characters[idx];
    let currentNumeral;

    if (value === 9) {
      currentNumeral = currentSet.numeral + characters[idx+1]?.numeral;
    } else if (value >= 5) {
      const difference = value - 5;

      currentNumeral = currentSet.midPoint.padEnd(difference + 1, currentSet.numeral)
    } else if (value === 4) {
      currentNumeral = currentSet.numeral + currentSet.midPoint;
    } else {
      currentNumeral = currentSet.numeral.padEnd(value, currentSet.numeral);
    }

    romanNumeral.unshift(currentNumeral);
  });

  return romanNumeral.join("");
};
