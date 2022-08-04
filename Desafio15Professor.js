function converterRomano(srt){
  const numeroRomanoArray=srt.split("")
  const naturalArray=numeroRomanoArray.map(numeral=>{
     switch(numeral){
        case "I":
          return 1
        case "V":
          return 5
        case "X":
          return 10
        case "L":
          return 50
        case "C":
          return 100
        case "D":
          return 500
        case "M":
          return 1000
        default:
          return 0                       
     }
   })
  return naturalArray.reduceRight((acum, atual, indice, array) =>{
    if (atual < array[indice+ 1]){
        return acum - atual
    } else{
        return acum + atual
    } 
       
  })
}
console.log(converterRomano("MCML"))
//console.log(converterRomano("CDXXXVIII"))
//console.log(converterRomano("CMIX"))
//console.log(converterRomano("MMMCMXCIX"))