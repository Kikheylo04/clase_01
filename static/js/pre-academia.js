// let name = prompt("ingrese su nombre");
// alert(`Hola ${name}, acaba de ingresar al curso de PRE-ACADEMIA`);
let matematica = document.querySelector(".pre-academia__conteiner__item__enlace");
let matematica1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =
    "Numeros reales, Potencia Radicales y Logaritmos. <br> Expreciones algebraicas.<br>Tipos de Polinomios. <br> Funciones Matemáticas. <br> Razonamiento Matematico.<br> Estadística y probabilidad.";
 matematica1.appendChild(item);
}
matematica.appendChild(matematica1);
console.log(matematica);

let lenguaje = document.querySelector(".pre-academia__conteiner__item__enlace1");
let lenguaje1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =
    "Comunicación Humana. <br>   Lenguaje Española.<br> Acentuación. <br> Discurso Escrito. <br> Semántica. <br> Sintaxis Española. <br> Morfología.";
  lenguaje1.appendChild(item);
}
lenguaje.appendChild(lenguaje1);
console.log(lenguaje);

let algebra = document.querySelector(".pre-academia__conteiner__item__enlace2");
let algebra1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =
    "Teoría de exponentes. <br> Ecuaciones exponenciales. <br> Polinomios. <br> Productos notables. <br> División algebraica. <br> Cocientes notables. <br>Factorización. <br> Fracciones algebraicas.";
  algebra1.appendChild(item);
}
algebra.appendChild(algebra1);
console.log(algebra);

let geometria = document.querySelector(".pre-academia__conteiner__item__enlace3");
let geometria1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =" Sistemas de referencias. <br> Cálculos de perímetros.<br> Punto medio.<br> Análisis de ecuaciones. <br> La Circunferencia. <br> El Elipse. <br> La parábola e Hipérbola.";
  geometria1.appendChild(item);
}
geometria.appendChild(geometria1);
console.log(geometria);

let trigonometria = document.querySelector(".pre-academia__conteiner__item__enlace4");
let trigonometria1 = document.createDocumentFragment();
for (i = 0; i < 1; i++) {
  let item = document.createElement("p");
  item.innerHTML =
    " Medida de angulos. <br> Resolucion de triangulos rectangulos. <br> Seno, coseno y tangente.<br> Ecuaciones trigonometricas. <br> Números cardinales. <br> Funcion trigonometrica. ";
  trigonometria1.appendChild(item);
}
trigonometria.appendChild(trigonometria1);
console.log(trigonometria);

let fisica = document.querySelector(
    ".pre-academia__conteiner__item__enlace5"
  );
  let fisica1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML =
      " Fuerzas y movimiento. <br> Tipos de interacciones. <br> Introducción a la energía. <br> Representar la energía. <br> Propiedades de las ondas. <br> Radiación electromagnética. <br> Tecnologías de la información. ";
    fisica1.appendChild(item);
  }
  fisica.appendChild(fisica1);
  console.log(fisica);

  let quimica = document.querySelector(
    ".pre-academia__conteiner__item__enlace6"
  );
  let quimica1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML =
      " Teoría atómica y molecular. <br> Estados de la materia. <br>  Disoluciones. <br>Átomos y nomenclatura.<br> Entalpia y Entropía. <br> Enlace químico.<br> Estequiometría. <br> Química Orgánica. ";
    quimica1.appendChild(item);
  }
  quimica.appendChild(quimica1);
  console.log(quimica);

  let historia= document.querySelector(
    ".pre-academia__conteiner__item__enlace7"
  );
  let historia1 = document.createDocumentFragment();
  for (i = 0; i < 1; i++) {
    let item = document.createElement("p");
    item.innerHTML =
      " La Historiografía. <br>La Arqueología. <br>  La Antropología. <br> La Genética. <br> La Lingüística. <br> La Primera Guerra Mundial. <br>La Segunda Guerra Mundial. <br> América Precolombina. ";
    historia1.appendChild(item);
  }
  historia.appendChild(historia1);
  console.log(historia);