function encriptado(mensagem) {
    const arrayDeLetras = mensagem.split("")
    let verificador = 0; tamanho = 0
    arrayDeLetras.map((espaço) => espaço !== " " ? tamanho += 1 : false) /* calcula o tamanho da palavra sem
                                                                          espaços*/
    if (tamanho % 2 === 0) { // para saber se a quantidade de letras é par
      for (let i = 0; i < arrayDeLetras.length; i++) {
        for (let x = 0; x < arrayDeLetras.length; x++) {
          if (arrayDeLetras[i] === mensagem[x] && arrayDeLetras[i] !== " " && i !== x) {
             verificador += 1 /* verificador acrescenta cada vez que acha uma letra repetida 
                               dentro do array */
             x = arrayDeLetras.length // x toma o valor do array para sair do FOR
           }
        }
      }
      if (tamanho === verificador) { // se o verificador tem o mesmo valor que tamanho
        return console.log(true)     // significa que a funçao vai devoltar TRUE
      } else{
        return console.log(false)
      } 
    } else { // no caso que o tamanho seja impar sempre a função vai devoltar FALSE
        return console.log(false)
    }
}
encriptado("This is thee")
encriptado("ssd")
encriptado("Loremipsum")
encriptado("OOw weerrttyy")

  