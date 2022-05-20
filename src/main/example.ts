export const add = (numbers: string) => {
  if (numbers === "") return 0;

  if (numbers.length === 1) return parseInt(numbers, 10);

  const delimiter = numbers.includes(',') ? ',' : '\n';
  const split = numbers.split(delimiter);
  const split2 = numbers.split('\n');
  return split2.map(num => parseInt(num, 10))
    .reduce((a, b) => a + b, 0);
};
