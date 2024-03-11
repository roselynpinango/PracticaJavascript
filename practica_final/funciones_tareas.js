const readline = require('readline');

// Lista de Tareas
let listaTareas = [];

/* Para manejar listas en JS:
    - push para incluir un valor en una lista
    - splice para eliminar un valor de una lista
*/

// Instruccion para leer y escribir en la terminal (process.stdin, process.stdout)
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para agregar una tarea a la lista
function agregarTarea(tarea) {
    // Chequear que la tarea tenga una valor
    if (tarea.trim() != "") {
        listaTareas.push(tarea); // Agrega la tarea en la lista (al final)
        console.log("Tarea " + tarea + " agregada exitosamente");
    } else {
        console.log("Error: La tarea no puede ser vacía");
    }
}

// Función para listar todas las tareas almacenadas en la lista
function consultarTareas() {
    /*
        [
            {0, "Tarea1"},
            {1, "Tarea2"},
            ...
        ]
    */

    console.log("Lista de Tareas:");
    listaTareas.forEach((tarea, indice) => {
        console.log(indice + " - " + tarea);
    });
 }

// Función para eliminar una tarea de la lista
function eliminarTarea(indice) {
    if (indice >= 0 && indice < listaTareas.length) {
        const tareaEliminada = listaTareas.splice(indice, 1); // Elimina el elemento en la posición (1 significa que elimina un sólo valor)
        console.log("Tarea " + tareaEliminada + " eliminada exitosamente");
    } else {
        console.log("Error: Indice no valido");
    }
} 

module.exports = {
    agregarTarea,
    consultarTareas, 
    eliminarTarea,
    read
}

