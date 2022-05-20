const DELIMITER = {
  COMMA: ',',
  NEW_LINE: '\n'
}

export const add = (numbers: string) => {
  const splitDelimitersRegex = new RegExp(`(?:${DELIMITER.COMMA}|${DELIMITER.NEW_LINE})+`);

  if (numbers === "") return 0;

  return numbers.split(splitDelimitersRegex)
  .flat()
  .map(num => parseInt(num, 10))
  .reduce((a, b) => a + b, 0);
};
