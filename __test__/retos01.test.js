const { maxNumber, sumaPares } = require("../src/retos01");
test("debe devolver el numero mayor de un array de numeros", () => {
  //GIVEN
  let numberList = [1, 2, -5, 0];

  //WHEN
  let sut = maxNumber(numberList);

  //THEN
  expect(sut).toBe(2);
});

test("debe devolver la suma de todos los números que sean pares", () => {
  //GIVEN
  let numberList = [1, 2, 4, 0];

  //WHEN
  let sut = sumaPares(numberList);

  //THEN
  expect(sut).toBe(6);
});
