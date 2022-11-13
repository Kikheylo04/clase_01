// let edad = prompt("ingrese su edad");
// if (edad>=18){
// alert("ya tienes edad para conducir")
// }
// else {
//  alert("no puedes conducir")
// }
// let nota = prompt("Ingrese su calificacion");
// if (nota<=3 || nota==0){
//     alert("muy deficiente")
// }
// else if (nota<=5 || nota==3){
//     alert("insuficiente")
// }
// else if (nota==6 || nota==5){
//     alert("suficiente")
// }
// else if (nota<=7 || nota==6){
//     alert("bien")
// }
// else if (nota<=9 || nota==7){
//     alert("notable")
// }
// else if (nota<=10 || nota==9){
//     alert("sobresaliente")
// }

// let cadena = prompt("ingrese texto");
// let resultado = "";
// if (resultado == "") {
//   resultado = `- ${cadena}`;
// } else {
//   resultado =  `- ${cadena}`;
// }
// while (confirm("Desea seguir?"));
// document.write(resultado);

// const sumar = (numero1, numero2) => {
//   return parseInt(numero1) + parseInt(numero2);
// };
// let numero1 = prompt("number first");
// let numero2 = prompt("number second");
// resultado = sumar(numero1, numero2);
// if (numero1 > 0 && numero2 > 0) {
//   alert("si es numero");
// } else {
//   alert("no es numero");
// }

// while (confirm("deseas seguir"));
// document.write(`El resultado es : ${resultado}`);
const resto = (numero) => {
  return parseInt(numero) % 23;
};

let numero = prompt("ingrese numero entre 0 y 99999999");
resultado = resto(numero, 23);

if (numero >= 0) {
  alert("si es numero");
} else {
  alert("no es numero");
  while (confirm("vuelva a introducir"));
  let numero = prompt("ingrese numero entre 0 y 99999999");
  resultado = resto(numero, 23);
}

if (resultado == 0) {
  document.write("T");
} else if (resultado == 1) {
  document.write("R");
} else if (resultado == 2) {
  document.write("W");
} else if (resultado == 3) {
  document.write("A");
} else if (resultado == 4) {
  document.write("G");
} else if (resultado == 5) {
  document.write("M");
} else if (resultado == 6) {
  document.write("Y");
} else if (resultado == 7) {
  document.write("F");
} else if (resultado == 8) {
  document.write("P");
} else if (resultado == 9) {
  document.write("D");
} else if (resultado == 10) {
  document.write("X");
} else if (resultado == 11) {
  document.write("B");
} else if (resultado == 12) {
  document.write("N");
} else if (resultado == 13) {
  document.write("J");
} else if (resultado == 14) {
  document.write("Z");
} else if (resultado == 15) {
  document.write("S");
} else if (resultado == 16) {
  document.write("Q");
} else if (resultado == 17) {
  document.write("V");
} else if (resultado == 18) {
  document.write("H");
} else if (resultado == 19) {
  document.write("L");
} else if (resultado == 20) {
  document.write("C");
} else if (resultado == 21) {
  document.write("K");
} else if (resultado == 22) {
  document.write("E");
}
