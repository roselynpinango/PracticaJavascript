// Sumar dos numeros
let numero1, numero2, resultado;

let nombre = "Javascript"; // const nombre = "Javascript";
nombre = "xx";

numero1 = 45;
numero2 = 1;
resultado = numero1 + numero2; // +: suma, -: resta, *: multiplicacion, /: division

// Imprimir en la terminal el resultado de la suma
console.log("El resultado de la suma es " + resultado);

// Si el resultado es mayor que 50 entonces se lo indique en un mensaje
if (resultado > 50) {
    console.log("El resultado es mayor que 50"); 
} else {
    console.log("El resultado es menor que 50");
}

// Acciones que repitan hasta que cierta condición se cumpla
for (let i = 0; i < 10; i++) {
    console.log("* Repeticion # :" +i);   
}