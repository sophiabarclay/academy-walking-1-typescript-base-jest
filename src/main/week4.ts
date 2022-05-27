const characters = {
  singles: ["I", "V"],
  tens: ["X", "L"],
  hundreds: ["C", "D"],
  thousands: ["M", "V"],
}

export const romanNumeraliser = (number: number): string => {
  if (number >= 5) {
    const difference = number - 5;

    return characters.singles[1].padEnd(difference + 1, characters.singles[0])
  } else if (number === 4) {
    return characters.singles[0] + characters.singles[1];
  } else {
    return characters.singles[0].padEnd(number, characters.singles[0]);
  }
};
