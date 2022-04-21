let citys = ["Medellin", "Envigado"];

for (let i = 0; i < citys.length; i++) {
  console.log(citys[i]);
}

citys.forEach((city) => {
  console.log(city);
});

/** push-shift-pop son mutables */
console.log(citys);
citys.push("Bello");
console.log(citys);
const primerItem = citys.shift();
console.log(primerItem);
console.log(citys);
const ultimoItem = citys.pop();
console.log(ultimoItem);
console.log(citys);

/**inmutables */
const nombres = ["Juan", "Pedro", "Luis"];

//Map = extraer informacion
var resultado = nombres.map((name) => `${name}_`);
console.log(resultado);
console.log(nombres);

const products = [
  { name: "Malta", cost: 10 },
  { name: "Gaseosa", cost: 20 },
  { name: "Agua", cost: 5 },
];

let reglaNames = products.map((product) => product.name);
console.log(reglaNames);
console.log(products);

let taxProducts = products.map((products) => {
  return { ...products, tax: 19 };
});
console.log(taxProducts);
console.log(products);

const universidades = [
  {
    nombre: "POLI JIC",
    ciudad: "Medellin",
    nacionales: 10,
    internacionales: 1,
  },
  { nombre: "ITM", ciudad: "Medellin", nacionales: 5, internacionales: 0 },
  { nombre: "UNAL", ciudad: "Bogota", nacionales: 15, internacionales: 1 },
  { nombre: "Andes", ciudad: "Bogota", nacionales: 5, internacionales: 0 },
  { nombre: "Sena", ciudad: "Cali", nacionales: 5, internacionales: 0 },
  { nombre: "UNAL", ciudad: "Cali", nacionales: 4, internacionales: 0 },
];

//Map extraer informacion
const nombresU = universidades.map((u) => u.nombre);
console.log(nombresU);

//Find devuleve la primera coincidencia
const UniCali = universidades.find((u) => u.ciudad === "Cali");
console.log(UniCali);

//Every valida que todos cumplan condicion
const isInternacionalAll = universidades.every((u) => u.internacionales > 0);
console.log(isInternacionalAll);

//Some valida que al menos alguno cumplan condicion
const isSomeInternational = universidades.some((u) => u.internacionales > 0);
console.log(isSomeInternational);

//Filter filtros
const namesUniBogota = universidades
  .filter((u) => u.ciudad === "Bogota")
  .map((u) => u.nombre);

console.log(namesUniBogota);

//Reduce acumulador,contador,...
const totalInternational = universidades.reduce(
  (contador, u) => (contador += u.internacionales),
  0
);
console.log(totalInternational);

const totalNacionalCityMedellin = universidades
  .filter((u) => u.ciudad === "Medellin")
  .reduce((acumulador, u) => (acumulador += u.nacionales), 0);
console.log(totalNacionalCityMedellin);

//{nacionales: X, internacionales: Y}
const totales = universidades.reduce(
  (acumulador, u) => ({
    nacionales: acumulador.nacionales + u.nacionales,
    internacionales: acumulador.internacionales + u.internacionales,
  }),
  { nacionales: 0, internacionales: 0 }
);
console.log(totales);
