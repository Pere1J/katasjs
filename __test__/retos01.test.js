const {
  maxNumber,
  sumaPares,
  toOnlyString,
  namesStartWithA,
  animalMostNamed,
  productosMasCarosDeDiez,
  listaTareasPendientes,
  listaProductosOrdenados,
  listaUsuariosAdmin,
  listaNoOrdenada,
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
  expect(sut).toEqual(
    expect.arrayContaining([{ nombre: "cochecito", precio: 25 }])
  );
});

test("Desarrolla una función que al darle un array de objetos ’tarea’ (con atributos de: title <string> / isDone<bool>) devuelva otra lista con solamente las tareas no terminadas.", () => {
  //GIVEN
  let listaTareas = [
    {
      title: "comprar pan",
      isDone: true,
    },
    {
      title: "vender moñeca",
      isDone: true,
    },
    {
      title: "conducir coche",
      isDone: false,
    },
  ];

  //WHEN
  let sut = listaTareasPendientes(listaTareas);

  //THEN
  expect(sut).toEqual([{ title: "conducir coche", isDone: false }]);
});

test("Desarrolla una función que al pasarle una lista de objetos producto (con nombre<string> y precio<number>) devuelva otra lista de los productos ordenados de baratos a caros.", () => {
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
  let sut = listaProductosOrdenados(listaProductos);

  //THEN
  expect(sut).toEqual([
    {
      nombre: "muñeca",
      precio: 5,
    },
    {
      nombre: "pelota",
      precio: 10,
    },
    {
      nombre: "cochecito",
      precio: 25,
    },
  ]);
});
test("Desarrolla una función que al darle una lista de objetos usuario (con nombre<string> y rol<string>) devuelva otra lista de los usuarios que contenga solamente los usuarios administradores (admin) ordenados alfabéticamente por el nombre.", () => {
  //GIVEN
  let listaUsuarios = [
    {
      nombre: "vanessa",
      rol: "user",
    },
    {
      nombre: "pere",
      rol: "user",
    },
    {
      nombre: "abdel",
      rol: "admin",
    },
    {
      nombre: "fadoua",
      rol: "admin",
    },
  ];

  //WHEN
  let sut = listaUsuariosAdmin(listaUsuarios);

  //THEN
  expect(sut).toEqual([
    {
      nombre: "abdel",
      rol: "admin",
    },
    {
      nombre: "fadoua",
      rol: "admin",
    },
  ]);
});

test("Desarrolla una función que al pasar un array: [{},{},{}] de objetos : {id, titulo}, devuelva una cadena en forma de lista no ordenada de html. estilo <li id=valor del id>valor del título</li>", () => {
  //GIVEN
  let objetosList = [
    { id: 1, titulo: "Uno" },
    { id: 2, titulo: "Dos" },
    { id: 3, titulo: "Tres" },
  ];

  //WHEN
  let sut = listaNoOrdenada(objetosList);

  //THEN
  expect(sut).toEqual(
    "<ul><li id=1>Uno</li><li id=2>Dos</li><li id=3>Tres</li></ul>"
  );
});
