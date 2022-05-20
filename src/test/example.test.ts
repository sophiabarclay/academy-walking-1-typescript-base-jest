import {add} from "../main/example";

describe('string calculator', () => {
  it("should return 0 if given an empty string", () => {
    const result = add("");
    expect(result).toBe(0);
  });

  it("should return the number if string includes one number", () => {
    const result = add("1");
    expect(result).toBe(1);
  });

  it("should return the number if string includes two numbers", () => {
    const result = add("1,2");
    expect(result).toBe(3);
  });

  it.each([["1,2,3", 6], ["1,2,3,4", 10], ["1,2,3,4,5,6,7,8,9,10", 55]])("should handle more than two numbers", (numbers, sum) => {
    const result = add(numbers);
    expect(result).toBe(sum);
  });

  it.each([["1\n2", 3], ["1\n2,3", 6]])("should handle new line between numbers", (numbers, sum) => {
    const result = add(numbers);
    expect(result).toBe(sum);
  });

  it.each([["//;\n1;2", 3]])("should handle any delimiter", (numbers, sum) => {
    const result = add(numbers);
    expect(result).toBe(sum);
  });
})
