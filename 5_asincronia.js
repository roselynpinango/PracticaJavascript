// Funcion que simula que realiza una operacion asincronica
function operacionAsincronica() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("¡Operacion asincrona completa!");
        }, 5000);
    });
}

// Funcion principal que utiliza la funcion asincronica
async function ejecutarOperacionAsincronica() {
    console.log("Iniciando la invocacion");

    try {
        const mensaje = await operacionAsincronica();
        console.log(mensaje);
    } catch (error) {
        console.log("Hubo un error durante la operacion asincrona: ", error);
    }

    console.log("Invocacion completa!");
}

ejecutarOperacionAsincronica();

