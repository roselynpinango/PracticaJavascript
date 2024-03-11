async function ejemploAsincrono() {
    return "¡Operación Asíncrona Completa!";
}

ejemploAsincrono().then(mensaje => {
    console.log(mensaje);
});

module.exports = {
    ejemploAsincrono
}