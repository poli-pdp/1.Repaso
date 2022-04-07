/**
 *    () => {}
 */

const saludar = function (nombre) {
  return `Hola ${nombre} como estas?`;
};

console.log(saludar("Ana"));

const saludar2 = (nombre) => {
  return `Hola ${nombre} como estas?`;
};

console.log(saludar2("Ana"));

const saludar3 = (nombre, apellido) => `Hola ${nombre} ${apellido} como estas?`;

console.log(saludar3("Ana", "Perez"));
