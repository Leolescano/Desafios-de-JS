function fatorial (num) {
    numeroGrande = BigInt(num)
    if (numeroGrande === 0n) {
      return 1n
    } else {
      return numeroGrande * fatorial(numeroGrande - 1n)
    }
}
 
console.log(fatorial (3200))
  