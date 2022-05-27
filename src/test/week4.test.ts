import { romanNumeraliser } from "../main/week4"

describe('roman numerals', () => {
  it.each`
    a    | expected
    ${1} | ${"I"}
    ${2} | ${"II"}
    ${3} | ${"III"}
    ${4} | ${"IV"}
    ${5} | ${"V"}
    ${6} | ${"VI"}
    ${7} | ${"VII"}
    ${8} | ${"VIII"}
    ${9} | ${"IX"}
  `('returns $expected when given $a as a position', ({a, expected}) => {
    expect(romanNumeraliser(a)).toBe(expected);
  });
});
