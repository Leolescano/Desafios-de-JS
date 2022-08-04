function cifraDeCesar(str, num) {

    let cifraDeCesar = []
    let cod = ""
    let veri = 0
    veri = num % 26
    for (let i = 0; i < str.length; i++) {
        cifraDeCesar[i] = str.charCodeAt(i)
        if (cifraDeCesar[i] >= 97) {
            if (cifraDeCesar[i] - veri >= 97) {
                cod += String.fromCharCode(cifraDeCesar[i] - veri)
            } else {
                cod += String.fromCharCode(123 - veri)
            }
        } else if (cifraDeCesar[i] - veri <= 90 && cifraDeCesar[i] - veri >= 65) {
            cod += String.fromCharCode(cifraDeCesar[i] - veri)
        } else {
            cod += String.fromCharCode(91 - veri)
        }
    }
    return cod
}

console.log(cifraDeCesar("A", 27))
console.log(cifraDeCesar("Qaiik", 60))
console.log(cifraDeCesar("BCDYZAabcdyza", 27))

//Se o valor ASCII estiver na faixa de [65, 90] , é uma letra maiúscula.
//Se o valor ASCII estiver na faixa de [97, 122] , é uma letra minúscula.