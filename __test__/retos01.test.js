const {
  maxNumber,
  sumaPares,
  toOnlyString,
  namesStartWithA,
  animalMostNamed,
  productosMasCarosDeDiez,
} = require("../src/retos01");

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
test("Desarrolla una función que al darle un array de números y strings devuelva un array de solamente los strings.", () => {
  //GIVEN
  const listaMix = [1, 2, -5, 0, "lapiz", "regla"];

  //WHEN
  let sut = toOnlyString(listaMix);

  //THEN
  expect(sut).toEqual(expect.arrayContaining(["lapiz", "regla"]));
});

test("debe devolver solo strings que empiezan por -a-", () => {
  //GIVEN
  let namesList = ["Peter", "Paul", "Mary", "Andy", "Aroa"];

  //WHEN
  let sut = namesStartWithA(namesList);

  //THEN
  expect(sut).toEqual(expect.arrayContaining(["Andy", "Aroa"]));
});

test("dada una lista con palabras repetidas debe devolver el número de repeticiones de la palabra que más veces aparezca", () => {
  //GIVEN
  let animalsList = [
    "perro",
    "gato",
    "perro",
    "gato",
    "pajaro",
    "mono",
    "serpiente",
    "perro",
  ];

  //WHEN
  let sut = animalMostNamed(animalsList);

  //THEN
  expect(sut).toBe(3);
});

test('Dado un array de objetos "producto" (con nombre y precio) debe devolver un array de los objetos que sean más caros de 10.', () => {
  //GIVEN
  let listaProductos = [
    {
      nombre: "pelota",
      precio: 10,
    },
    {
      nombre: "muñeca",
      precio: 5,
    },
    {
      nombre: "cochecito",
      precio: 25,
    },
  ];

  //WHEN
  let sut = productosMasCarosDeDiez(listaProductos);

  //THEN
  expect(sut).toEqual(expect.arrayContaining([{"nombre": "cochecito", "precio": 25}]));
});
