function promedio(...notas){
    let somaDeNotas=0 ; media=0
    notas.forEach(nota => {
       somaDeNotas+=nota
    });
    media=somaDeNotas/notas.length
    return media
}
console.log(promedio(10,9,6,8,9,1,5,7))
