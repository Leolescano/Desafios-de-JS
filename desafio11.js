function cordenadas (cor){
  const ordenados = []
  for (let i = 0; i <= cor[0]; i++) {
    //ordenados[i] = []
    for (let x = 0; x <= cor[1]; x++){
   // ordenados[i][x] = [i , 0 + x] 
      ordenados.push([i,x])
  
    }
  }
  return ordenados
}
console.log(cordenadas([250,2]))