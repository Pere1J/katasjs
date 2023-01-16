const fizzbuzz = require("../src/fizzbuzz");

test("deb devolver Fizz si el numero es multiple de 3", () => {
  //GIVEN
  const num = 9;
  //WHEN
  let sut = fizzbuzz(num);
  //THEN
  expect(sut).toBe("Fizz");
});

test("deb devolver Buzz si el numero es multiple de 5", () => {
  //GIVEN
  const num = 10;
  //WHEN
  let sut = fizzbuzz(num);
  //THEN
  expect(sut).toBe("Buzz");
});

test("deb devolver FizzBuzz si el numero es multiple de 3 y 5", () => {
  //GIVEN
  const num = 15;
  //WHEN
  let sut = fizzbuzz(num);
  //THEN
  expect(sut).toBe("FizzBuzz");
});

test("deb devolver mismo numero si el numero no es multiple de 3 y 5", () => {
  //GIVEN
  const num = 2;
  //WHEN
  let sut = fizzbuzz(num);
  //THEN
  expect(sut).toBe(num);
});
