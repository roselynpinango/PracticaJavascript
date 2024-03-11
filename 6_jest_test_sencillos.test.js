var { sumar, restar } = require('./funciones/funciones_definidas');

describe('Test de Operaciones Aritmeticas', () => {
    it('TEST01: Suma de dos números válidos', () => {
        const resultadoEsperado = 111;
        
        let resultado = sumar(35, 76);
        console.log("Resultado de la Suma: " + resultado);

        // Mocha => assert.equal(resultado, resultadoEsperado);
        expect(resultado).toBe(resultadoEsperado);
    });

    it('TEST02: Resta de dos números válidos', () => {
        expect(restar(95, 45)).toBe(50);
    });
});