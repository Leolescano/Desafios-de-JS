function cuadratica (number){
  if (number>=-9 && number<=9) {
    return number*number
    
  }else{
    const numberString = String(number)
    const resultado = []
    let resultadoConcatenado = ""
    for(i=0; i<numberString.length; i++){
        resultado[i]=numberString[i]**2
        resultadoConcatenado += String(resultado[i])   
    }
    return Number(resultadoConcatenado)
    }
}
console.log(cuadratica(123))