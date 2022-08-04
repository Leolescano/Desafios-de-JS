
function licensaDePiloto(piloto) {
    const arrayDaData = String(piloto.dataDeNascimento).split("-")
    const arrayAnoDeNascimento = arrayDaData[0].split("")
    const primeiraLetraNome = piloto.nome[0].toLowerCase()
    const arraySobrenome = piloto.sobrenome.split("")
    let licensaEmFormação = ""
    
    for (let i = 0; i < 5; i++) {
     licensaEmFormação += arraySobrenome[i] && arraySobrenome[i]!== " " ? arraySobrenome[i].toUpperCase() : "9"   
        
    }
   
    piloto.licensa = licensaEmFormação
    piloto.licensa += "-"
    piloto.licensa += arrayAnoDeNascimento[2]
    piloto.licensa += arrayDaData[1]
    piloto.licensa += arrayAnoDeNascimento[3]
    piloto.licensa += "."
    piloto.licensa += primeiraLetraNome   
   
    return piloto.licensa
    //return console.log(piloto.licensa.join().replace(/,/g, ""))
}

const dadosDoPiloto = {
    nome: "Leo",
    sobrenome: "Lescano",
    dataDeNascimento: "1982-05-19",
    licensa : false
}

console.log(licensaDePiloto(dadosDoPiloto))

