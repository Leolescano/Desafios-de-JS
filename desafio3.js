function inversor (...arg){
    const inversa=[]
    let aux =-1; 
        for (let index = 0; index < arg.length; index++ ) {
        inversa[index] = arg[arg.length+aux]
        aux--
    }
    return inversa
}        
console.log(inversor("O", "Hi", "Mark"))