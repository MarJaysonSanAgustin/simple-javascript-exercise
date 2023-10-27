function run(inputMin, inputMax) {
  // basic error handling
  if (typeof inputMin !== "number" || typeof inputMax !== "number") {
    console.error(
      "Invalid input value: `inputMin` or `inputMax` should be a number"
    );

    return;
  }
  if (inputMin > inputMax) {
    console.error(
      "Invalid input value: minimum input value should be less than maximum input value"
    );
    return;
  }

  // container for the consecutive numbers
  const consecutiveNumbers = [];

  // loop for filling the consecutive numbers array
  for (let i = inputMin; i <= inputMax; i++) consecutiveNumbers.push(i);
  console.log("consecutive numbers: ", consecutiveNumbers);

  const finalOuput = consecutiveNumbers.reduce(
    (totalNumberOfSquaredDivisibleByFour, currentValue) => {
      // determine the square of each individual number
      const squared = Math.pow(currentValue, 2);

      // determine how many of these squared values are evenly divisible by 4.
      const isDivisibleByFour = squared % 4 === 0;

      // increment if divisible by four
      if (isDivisibleByFour) return totalNumberOfSquaredDivisibleByFour + 1;

      return totalNumberOfSquaredDivisibleByFour;
    },
    0
  );
  console.log("Final Output", finalOuput);
}

run(1, 10);
