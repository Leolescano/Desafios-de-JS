function modificadorDeRelatorio (frase, palavra, array) {
   const arrayDaFrase = frase.split("")
   let contador = 0
   for (let i = 0; i <= frase.length; i++) {
     if (array.includes(i)){
        arrayDaFrase.splice(i + contador, 0, palavra)
        contador++ 
     }
   }
  
   return arrayDaFrase.join("") 
}  
console.log(modificadorDeRelatorio('capaz usar as capsulas emergencia', "de " , [6 , 23, 38]))