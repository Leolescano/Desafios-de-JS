function creditos(num) {
    const valoresDasMoedas = [500,100,25,10,5,1]
    const moedas =[]
    let resto = 0
    for (let i = 0; i < 6; i++){
      moedas[i]= Math.floor(num / valoresDasMoedas[i])  
      if (moedas[i] > 0) {
        resto = num % valoresDasMoedas[i]
        num = resto
      }
    }
    return `1: ${moedas[5]} 5: ${moedas[4]} 10: ${moedas[3]} 25: ${moedas[2]} 100: ${moedas[1]} 500: ${moedas[0]}`
}    

console.log(creditos(75))
