const { maxNumber, sumaPares, onlyString} = require("../src/retos01");
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
test("Desarrolla una función que al darle un array de números y strings devuelva un array de solamente los strings.", () =>{
   //GIVEN
   let listaMix = [1, 2, -5, 0,"lapiz","regla"];

   //WHEN
   let sut = onlyString(listaMix);
 
   //THEN
   expect(sut).toBe("lapiz","regla");
});