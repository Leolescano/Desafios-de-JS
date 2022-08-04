function chunk(number) {
    if (number === 0) {
        return ""
    }
    if (number === 1) {
       return "chunk" 
    } else{
       return "chunk-" + chunk(number-1) 
    }   
}
console.log(chunk(4))