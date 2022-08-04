/*function maiorLetra(palavra){
   const valoresDeLetras = palavra.toLowerCase().split("")
   let letraMaior = 0; 
   for (let i = 0; i < valoresDeLetras.length ; i++) {
      valoresDeLetras[i] = valoresDeLetras[i].charCodeAt()
       if (valoresDeLetras[i]>valoresDeLetras[i-1]) {
         letraMaior=valoresDeLetras[i]
       }
    }
    return String.fromCharCode(letraMaior)
}*/
/*function maiorLetra(string) {
    const palavra=string.toLowerCase().split("")
    let maior = ''
    for (let letra of palavra) {
        if (letra > maior) {
            maior = letra
        }
    }
    return maior
}*/
function maiorLetra(string) {
    const palavra = string.toLowerCase().split("").sort()
    return palavra[palavra.length - 1]
}
console.log(maiorLetra("abZma"))
