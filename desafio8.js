function ordenarNomes(nome){
    const arrayDosNomes = nome.split(" ")
    let nomeAbreviado = arrayDosNomes[arrayDosNomes.length-1].toUpperCase() + ", "
    for (let i=0; i < (arrayDosNomes.length - 1); i++) {
        nomeAbreviado += arrayDosNomes[i][0] + ". "
    }
    return console.log(nomeAbreviado)
}
ordenarNomes("Leonardo Fabian Lescano")