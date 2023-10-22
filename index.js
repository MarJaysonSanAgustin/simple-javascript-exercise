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

  // determine the square of each individual number
  const squaredConsecutiveNumbers = consecutiveNumbers.map((number) =>
    Math.pow(number, 2)
  );
  console.log(
    "determine the square of each individual number: ",
    squaredConsecutiveNumbers
  );

  // determine how many of these squared values are evenly divisible by 4.
  const squaredConsecutiveNumbersDivisibleByFour =
    squaredConsecutiveNumbers.map((number) =>
      number % 4 === 0 ? true : false
    );

  // for presentation purpose only
  // should generate the structure: [{ 1: false}, { 4: true }, ...etc.]
  const squaredConsecutiveNumbersDivisibleByFourPresentation =
    squaredConsecutiveNumbers.map((number, index) => ({
      [`${number}`]: squaredConsecutiveNumbersDivisibleByFour[index],
    }));
  console.log(
    "determine how many of these squared values are evenly divisible by 4: ",
    squaredConsecutiveNumbersDivisibleByFourPresentation
  );

  // determine how many of these squared values are evenly divisible by 4
  const numberOfNumbersDivisibleByFour =
    squaredConsecutiveNumbersDivisibleByFour.filter(Boolean).length;
  console.log(
    "determine how many of these squared values are evenly divisible by 4: ",
    numberOfNumbersDivisibleByFour
  );
}

run(1, 10);
