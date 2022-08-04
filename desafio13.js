function verificarCodigo(cod) {
  const arrayDeNumeros = String(cod).split("").map((num) => Number(num))
  let somaPar = arrayDeNumeros[0] 
  let somaImpar = arrayDeNumeros[1]
  let verificador = 0
  for (let i = 2; i < arrayDeNumeros.length - 1; i++) {
    i % 2 === 0 ?  somaPar += arrayDeNumeros[i] : somaImpar += arrayDeNumeros[i]
  }
  verificador = ((somaPar * 3) + somaImpar) % 10
  verificador === 0 ? true : verificador = 10 - verificador  
  return verificador === arrayDeNumeros[11] ? true : false
}
 
console.log(verificarCodigo(547020743789))
console.log(verificarCodigo(301354030348))
console.log(verificarCodigo(301354030349))
console.log(verificarCodigo(123456789872))
