/*function palavrasNaInversa(str){
    const palavra = str.toLowerCase().split(" ")
    const objetoDePalavras = {sole:[]}  
    let palavrasInvertidas = ""    
        for (let i=0; i < palavra.length; i++){        
         objetoDePalavras.sole[i] = palavra[i].split("")    
         }
         for (let i=0; i < objetoDePalavras.sole.length; i++){   
            for (let x = 0; x < objetoDePalavras.sole[i].length; x++) {
            palavrasInvertidas += objetoDePalavras.sole[i][objetoDePalavras.sole[i].length - 1 - x]
            } 
            palavrasInvertidas +=" " 
        }
    return palavrasInvertidas
} */       

function palavrasNaInversa(str){
  const invertida = str.toLowerCase().split(" ").map((palavra) => palavra.split("").reverse().join("")) 
  return invertida.join(" ") 
}
console.log(palavrasNaInversa("leo boca casa mapa"))