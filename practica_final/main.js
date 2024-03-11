const { read, 
        agregarTarea, 
        consultarTareas, 
        eliminarTarea } = require('./funciones_tareas');

function mostrarMenuPrincipal() {
    // Menu de opciones
    console.log("Bienvenido, ¿Qué acción desea realizar?");
    console.log("1. Agregar Tarea");
    console.log("2. Consultar Tareas");
    console.log("3. Eliminar Tarea");
    console.log("4. Salir");

    // Pedir el ingreso de la opcion deseada
    read.question("Ingresa el número de la opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                read.question("Ingresa la nueva tarea: ", (nuevaTarea) => {
                    agregarTarea(nuevaTarea);
                    mostrarMenuPrincipal();
                });
            case "2":
                consultarTareas();
                mostrarMenuPrincipal();
            case "3":
                read.question("Ingresa el indice de la tarea a eliminar: ", (indiceAEliminar) => {
                    eliminarTarea(indiceAEliminar);
                    mostrarMenuPrincipal();
                });
            case "4":
                read.close();
                break;
        }
    });
}

mostrarMenuPrincipal();

