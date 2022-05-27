const characters = [
  {numeral: "I", midPoint: "V"},
  {numeral: "X", midPoint: "L"},
  {numeral: "C", midPoint: "D"},
  {numeral: "M", midPoint: "V"}
];

export const romanNumeraliser = (number: number): string => {
  const numberSplit = number.toString().split("").reverse();
  let romanNumeral: string[] = [];

  numberSplit.forEach((value, idx) => {
    const currentSet = characters[idx];

    if (number >= 5) {
      const difference = number - 5;

      return currentSet.midPoint.padEnd(difference + 1, currentSet.numeral)
    } else if (number === 4) {
      return currentSet.numeral + currentSet.midPoint;
    } else {
      return currentSet.numeral.padEnd(number, currentSet.numeral);
    }
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
