function ordenados(...arr){
    const orden = []
     arr.forEach(lis => {
        orden.push(...lis)
     });
     return orden.sort((a, b) => b - a )
}
console.log(ordenados([6,3,5], [4,5,6,55], [7,8,9,42]))   