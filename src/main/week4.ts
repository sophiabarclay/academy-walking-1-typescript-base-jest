const characters = [
  {value: 1, numeral: "I", midPoint: "V"},
  {value: 10, numeral: "X", midPoint: "L"},
  {value: 100, numeral: "C", midPoint: "D"},
  {value: 1000, numeral: "M", midPoint: "V"}
];

export const romanNumeraliser = (number: number): string => {
  const numberSplit = number.toString().split("").reverse();
  let romanNumeral: string[] = [];
  numberSplit.forEach((value, idx) => {
    if (number / characters[idx].value < 1) return false;
    if ()
  });
  return romanNumeral.join("");
};

// if (character.value !== 1 && number >= character.value) {
//   const difference = number - character.value/2;

//   return romanNumeral.push(character.midPoint.padEnd(difference + 1, character.numeral))
// } else if (number === 4) {
//   return character.numeral + character.midPoint;
// } else {
//   return character.numeral.padEnd(number, character.numeral);
// }
