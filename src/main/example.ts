export const add = (numbers: string) => {
  if (numbers === "") return 0;

  if (numbers.length === 1) return parseInt(numbers, 10);
  
  if (numbers.length === 3) {
      return numbers.split(',')
        .map(num => parseInt(num, 10))
        .reduce((a, b) => a + b, 0);
  }
};
