const { sumar, imprimir } = require('./funciones/funciones_definidas');

// Va a invocar el método imprimir después de 5 segundos
//setTimeout(imprimir, 5000);

//setTimeout(sumar(45,54), 5000); // DA ERROR
//setTimeout(sumar, 5000, 58, 95); // SE EJECUTA BIEN

//imprimir();
let resultado = sumar(945, 658);
console.log("Resultado de la suma: " + resultado);
