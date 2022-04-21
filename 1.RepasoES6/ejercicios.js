const arr = [
  { name: "luna", sex: "f", age: 10, species: "dog" },
  { name: "jimmy", sex: "m", age: 40, species: "human" },
  { name: "snoop", sex: "m", age: 60, species: "human" },
  { name: "jennifer", sex: "f", age: 100, species: "human" },
  { name: "yeller", sex: "f", age: 5, species: "dog" },
];

/**
 *  1 name de todos los dog
 *  2 name del sex = f
 *  3 total de edades
 *  4 promedio edades de los humanos
 *  5 nombre humanos mayores de 50
 */

//1
const names = arr.filter((a) => a.species === "dog").map((a) => a.name);
console.log(names);
//2
const eje2 = arr
  .filter((person) => person.sex === "f")
  .map((filterPerson) => filterPerson.name);
console.log(eje2);
//3
const totaledad = arr.reduce((contador, e) => (contador += +e.age), 0);
console.log(totaledad);
//4
const lengthHuman = arr.filter((x) => x.species === "human");
const promHuman =
  lengthHuman.reduce((suma, x) => (suma += x.age), 0) / lengthHuman.length;
console.log(promHuman);
//5
const mayorNombre = arr
  .filter((u) => u.age > 50)
  .filter((u) => u.species === "human")
  .map((u) => u.name);
console.log(mayorNombre);

const mayorNombreV2 = arr
  .filter((u) => u.species === "human" && u.age > 50)
  .map((u) => u.name);
console.log(mayorNombreV2);
