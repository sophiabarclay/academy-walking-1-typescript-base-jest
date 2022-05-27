import { romanNumeraliser } from "../main/week4"

describe('roman numerals', () => {
  it.each`
    a    | expected
    ${4} | ${"IV"}
    ${5} | ${"V"}
    ${8} | ${"VIII"}
    ${9} | ${"IX"}
    ${18} | ${"XVIII"}
    ${19} | ${"XIX"}
    ${40} | ${"XL"}
    ${80} | ${"LXXX"}
    ${90} | ${"XC"}
    ${80} | ${"LXXX"}
    ${400} | ${"CD"}
    ${800} | ${"DCCC"}
    ${4000} | ${"MV"}
    ${8000} | ${"VMMM"}
    ${1999} | ${"MCMXCIX"}
    ${846} | ${"DCCCXLVI"}
  `('returns $expected when given $a as a position', ({a, expected}) => {
    expect(romanNumeraliser(a)).toBe(expected);
  });
});
