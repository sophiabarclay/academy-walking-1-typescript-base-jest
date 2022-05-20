import {add} from "../main/example";

describe('string calculator', () => {
  it("should return 0 if given an empty string", () => {
    const result = add("");
    expect(result).toBe(0);
  });

  it("should return the number if string includes one number", () => {
    const result = add("1");
    expect(result).toBe(1);
  })

  it("should return the number if string includes two numbers", () => {
    const result = add("1,2");
    expect(result).toBe(3);
  })
})
