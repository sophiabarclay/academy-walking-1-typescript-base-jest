import { romanNumeraliser } from "../main/week4"

describe('roman numerals', () => {
  it.each`
    a    | expected
    ${1} | ${"I"}
    ${2} | ${"II"}
    ${3} | ${"III"}
  `('returns $expected when given $a as a position', ({a, expected}) => {
    expect(romanNumeraliser(a)).toBe(expected);
  });
});
