let name = prompt("ingrese su nombre");
alert(`Hola ${name}, acaba de ingresar al curso de COLEGIO`);
let matematicas = document.querySelector(".colegio__conteiner__item__enlace");
let matematicas1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML ="Geometría.<br>Ecuaciones.<br>Números y operaciones.<br>Progresiones o sucesiones.<br> Sistemas de numeración.<br>Logaritmos.<br>Sacar factor común.<br>Proporcionalidad simple.";
  matematicas1.appendChild(item);
}
matematicas.appendChild(matematicas1);
console.log(matematicas);

let comunicacion = document.querySelector(".colegio__conteiner__item__enlace1");
let comunicacion1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML ="La Semiótica y Fonología.<br> El Signo Lingüístico.<br>El Español en la Actualidad.<br>Acentuación Optativa.<br>Tildación Diacrítica en Monosílabos y Polisílabos.<br>Las Palabras Homófonas.<br>Clases y Estructura del Sujeto.<br>El Punto y la Coma";
  comunicacion1.appendChild(item);
}
comunicacion.appendChild(comunicacion1);
console.log(comunicacion);

let educacionParaElTrabajo = document.querySelector(".colegio__conteiner__item__enlace2");
let educacionParaElTrabajo1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML ="Educación para la convivencia.<br>Educación Derechos Humanos.<br>Educación en valores o formación ética.<br>Educación para la gestión de riesgos y conciencia ambiental.<br>Educación para la equidad de género ";
  educacionParaElTrabajo1.appendChild(item);
}
educacionParaElTrabajo.appendChild(educacionParaElTrabajo1);
console.log(educacionParaElTrabajo);

let arteCultura = document.querySelector(".colegio__conteiner__item__enlace3");
let arteCultura1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML ="El rasgado. <br>La pintura dactilar.<br> Secuencia de trazados.<br> Pintar soplando.<br> Imprimir sobre vidrio.<br>Imprimir con papel crepé.<br>Trabajos de género.<br>Retrato,Paisaje y Bodegón.";
  arteCultura1.appendChild(item);
}
arteCultura.appendChild(arteCultura1);
console.log(arteCultura);
let historia = document.querySelector(
  ".colegio__conteiner__item__enlace4"
);
let historia1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML ="Civilización en el Egeo.<br>El feudalismo.<br>La conquista musulmana de la Península Ibérica.<br>Los Mayas.<br>Feminismo y Sufragismo:La lucha de los derechos de la mujer 1789-1945.<br>La Unión Europea.";
  historia1.appendChild(item);
}
historia.appendChild(historia1);
console.log(historia);

let desarrolloPersonalCiudadaniaCivica = document.querySelector(
    ".colegio__conteiner__item__enlace5"
  );
  let desarrolloPersonalCiudadaniaCivica1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML ="Los bienes públicos y bien común.<br> Los derechos sociales y la salud pública.<br>Los adolescentes participamos en el bien común.<br>Las emociones y convivencia familiar.";
    desarrolloPersonalCiudadaniaCivica1.appendChild(item);
  }
  desarrolloPersonalCiudadaniaCivica.appendChild(desarrolloPersonalCiudadaniaCivica1);
  console.log(desarrolloPersonalCiudadaniaCivica);

  let ingles = document.querySelector(
    ".colegio__conteiner__item__enlace6"
  );
  let ingles1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML ="Presente Simple and Continuo.<br> Partículas interrogativas.<br> Subject and object questions.<br> Pasado Simple / Pasado Continuo.<br>Presente perfecto simple.<br> Pronombres de relativo.<br>Pasado Perfecto Simple.<br>Used to.";
    ingles1.appendChild(item);
  }
  ingles.appendChild(ingles1);
  console.log(ingles);

  let cienciaTecnologia= document.querySelector(
    ".colegio__conteiner__item__enlace7"
  );
  let cienciaTecnologia1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML ="Investigación biotecnológica y organismos genéticamente modificados.<br> Fuga de cerebros.<br>Régimen fiscal para Ciencia, Tecnología y Estímulos Fiscales.<br>Descentralización de las actividades Científicas y Tecnológicas.";
    cienciaTecnologia1.appendChild(item);
  }
  cienciaTecnologia.appendChild(cienciaTecnologia1);
  console.log(cienciaTecnologia);