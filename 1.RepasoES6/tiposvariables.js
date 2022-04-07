/**
 * Explicar Var
 */

function explicarVAR() {
  var edad = 10;
  edad = 20;
  var edad = 30;
  if (true) {
    var edad = 40;
    console.log(edad);
  }
  console.log(edad);
}
explicarVAR();

/**
 * Explicar Let
 */

function explicarLET() {
  let cantidad = 10;
  cantidad = 20;
  if (true) {
    let cantidad = 40;
    console.log(cantidad);
  }
  console.log(cantidad);
}
explicarLET();

/**
 * Explicar Const
 */

function explicarCONST() {
  const PI = 10;
  const teams = ["Barcelona", "PSG"];
  console.log(teams);
  if (true) {
    const PI = 40;
    console.log(PI);
  }
  console.log(PI);
  teams.push("Real Madrid");
  console.log(teams);
}
explicarCONST();
