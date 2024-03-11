const { ejemploAsincrono } = require('./funciones/funciones_asincronas');

ejemploAsincrono().then(resultado => {
    console.log(resultado);
});