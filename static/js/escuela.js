let name = prompt("Ingrese su nombre");
alert(`Hola ${name}, acaba de ingresar al curso de ESCUELA`);
let matematica = document.querySelector(".escuela__conteiner__item__enlace");
let matematica1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =
    "Números y sistemas de numeración.<br>Problemas aditivos.<br> Problemas multiplicativos.<br> Figuras y cuerpos.<br> Ubicación espacial, Medida, Proporcionalidad y funciones.<br>Análisis y Representación de datos.";
  matematica1.appendChild(item);
}
matematica.appendChild(matematica1);
console.log(matematica);

let lenguaLiteratura = document.querySelector(".escuela__conteiner__item__enlace1");
let lenguaLiteratura1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =
    "Teorías lingüísticas actuales.<br>Comprensión de textos.<br>Elaboración de texto con información resumida proveniente de diferentes fuentes.<br>Intercambio oral de experiencias y nuevos conocimientos.<br>Intercambio escrito de nuevos conocimientos.";
  lenguaLiteratura1.appendChild(item);
}
lenguaLiteratura.appendChild(lenguaLiteratura1);
console.log(lenguaLiteratura);

let cienciasNaturales = document.querySelector(".escuela__conteiner__item__enlace2");
let cienciasNaturales1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =
    "El medio ambiente y los estados de la materia.<br> Catador de sustancias.<br> Conociendo las partes del cuerpo humano.<br>Diversidad en el Zoo.<br> Un Recorrido por las etapas o ciclos de la vida.<br> Clasificación de los seres vivos.<br> EVOVIDA.";
  cienciasNaturales1.appendChild(item);
}
cienciasNaturales.appendChild(cienciasNaturales1);
console.log(cienciasNaturales);

let cienciasSociales= document.querySelector(".escuela__conteiner__item__enlace3");
let cienciasSociales1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML ="Sociología de la Muerte.<br>Familia.<br>Feminismo.<br>Filosofía Social.<br>Estructura Social.<br>Igualdad.<br>Desigualdad Social.<br>Sociología.<br>Económia.";
  cienciasSociales1.appendChild(item);
}
cienciasSociales.appendChild(cienciasSociales1);
console.log(cienciasSociales);

let religionCatolica = document.querySelector(".escuela__conteiner__item__enlace4");
let religionCatolica1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =
    "Los milagros de Jesús<br>El monte de los Olivos<br>Dios quiere mucho a las personas, las cuida y protege.<br>Teología y experiencia humana.<br>Fe, cultura y sociedad.<br>Pensamiento social cristiano.<br>Revelación de Dios en la historia.";
  religionCatolica1.appendChild(item);
}
religionCatolica.appendChild(religionCatolica1);
console.log(religionCatolica);

let educacionArtistica = document.querySelector(
    ".escuela__conteiner__item__enlace5"
  );
  let educacionArtistica1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML =
      "Aprendan a mezclar colores.<br>Copien una obra maestra.<br>Arte con cinta adhesiva.<br>Añadir elementos sensoriales.<br>Intenten tensar y acomodar cuerdas para crear arte.<br>Pinten con esponjas arcoiris.<br>Agreguen toques especiales a objetos caseros.";
    educacionArtistica1.appendChild(item);
  }
  educacionArtistica.appendChild(educacionArtistica1);
  console.log(educacionArtistica);

  let ingles= document.querySelector(
    ".escuela__conteiner__item__enlace6"
  );
  let ingles1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML =
      "Colores, Números y Frutas.<br>Presentación Animales y Partes de la casa.<br>Alfabeto Preposiciones y Verbos.<br> Presentación describiendo partes del cuerpo.<br>La hora y Deporte.<br> Profesiones.<br>El clima y Direcciones.";
    ingles1.appendChild(item);
  }
  ingles.appendChild(ingles1);
  console.log(ingles);

  let educacionFisica= document.querySelector(
    ".escuela__conteiner__item__enlace7"
  );
  let educacionFisica1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML =
      "Historia de la Educación Física.<br>Curriculum de la Edcuación Física.<br>Habilidades y destrezas básicas.<br>Juegos y deportes.<br> Expresión Corporal.<br> El cuerpo y la salud.<br>Necesidades educativas.";
    educacionFisica1.appendChild(item);
  }
  educacionFisica.appendChild(educacionFisica1);
  console.log(educacionFisica);