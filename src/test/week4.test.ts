import { romanNumeraliser } from "../main/week4"

describe('roman numerals', () => {
  it("returns the correct roman numberal", () => {
    expect(romanNumeraliser(1)).toBe("I");
  });
});
