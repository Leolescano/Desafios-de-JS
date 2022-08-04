
function persistenciaMultiplicativa(num) {
    if (num < 10) {
        return 0
    }    
        
    const arrayDeNumero = String(num).split("")//.map((letra) => Number(letra))
    const multiplicação = arrayDeNumero.reduce((previous, current) => previous * current, 1);

    return 1 + persistenciaMultiplicativa(multiplicação)
}

console.log(persistenciaMultiplicativa(12))