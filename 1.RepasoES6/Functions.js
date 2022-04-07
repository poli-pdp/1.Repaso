/**
 * Function Declaration
 */
function operacionIVA(valor) {
  return valor * 19;
}
const resp = operacionIVA(200);
console.log(resp);

/**
 * Function Expression (Anonimas)
 */

const calculoIVA = function (valor = 200) {
  return valor * 19;
};
const resp2 = calculoIVA(200);
console.log(resp2);

const person = {
  nombre: "Messi",
  saludar: function (nombre) {
    return `Hola ${nombre}`;
  },
};

console.log(person.saludar("Ana"));
