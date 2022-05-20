const DELIMITER = {
  COMMA: ',',
  NEW_LINE: '\n',
  SEMI_COLON: ';'
}

export const add = (numbers: string) => {
  const splitDelimitersRegex = new RegExp(
    `(?:${DELIMITER.COMMA}|${DELIMITER.NEW_LINE}|${DELIMITER.SEMI_COLON})+`
  );

  if (numbers === "") return 0;

  return numbers.split(splitDelimitersRegex)
    .flat()
    .map(num => parseInt(num, 10))
    .reduce((a, b) => a + b, 0);
};
