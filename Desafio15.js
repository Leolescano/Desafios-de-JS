function converterNumerosRomanos(numeroRomano) {
    let milhar=0; centena=0; decena=0; unidade=0; resto=0; autentificador=0
    let romano={mil:0, cen:0, dez:0, un:0}
    let numeroFormado=""
    let tamanhoDoNumero = numeroRomano.length
    let numeroEmMaiuscula=""
    numeroEmMaiuscula=numeroRomano.toUpperCase()
    for(indice=0; indice<tamanhoDoNumero; indice++){
       switch (numeroEmMaiuscula[indice]) {
         case "I":  
         autentificador++
         break       
         case "V":  
         autentificador++
         break     
         case "X":  
         autentificador++
         break     
         case "L":  
         autentificador++
         break     
         case "C":  
         autentificador++
         break     
         case "D":  
         autentificador++
         break     
         case "M":  
         autentificador++
         break     
        }
    }
    if (autentificador<tamanhoDoNumero){
        return window.alert("O numero romano possuei um carater que não corresponde")
    }
    for (numero=1; numero<=3999; numero++) {
        milhar=Math.floor(numero/1000)
        resto=numero%1000
        centena=Math.floor(resto/100)
        resto=numero%100
        decena=Math.floor(resto/10)
        resto=numero%10
        unidade=Math.floor(resto/1)
             switch (milhar){
             case 0: romano.mil=""  
             break
             case 1: romano.mil="M"  
             break
             case 2: romano.mil="MM"
             break
             case 3: romano.mil="MMM"
             break        
             } 
             switch(centena){
             case 0: romano.cen=""
             break
             case 1: romano.cen="C"
             break
             case 2: romano.cen="CC"
             break
             case 3: romano.cen="CCC"
             break
             case 4: romano.cen="CD"
             break
             case 5: romano.cen="D"
             break
             case 6: romano.cen="DC"
             break
             case 7: romano.cen="DCC"
             break
             case 8: romano.cen="DCCC"
             break
             case 9: romano.cen="CM"
             break
            }
            switch(decena){
            case 0:romano.dez=""
            break
            case 1:romano.dez="X"
            break
            case 2:romano.dez="XX"
            break
            case 3:romano.dez="XXX"
            break
            case 4:romano.dez="XL"
            break
            case 5:romano.dez="L"
            break
            case 6:romano.dez="LX"
            break
            case 7:romano.dez="LXX"
            break
            case 8:romano.dez="LXXX"
            break
            case 9:romano.dez="XC"
            break
            }
            switch(unidade){
            case 0: romano.un=""
            break
            case 1: romano.un="I"
            break
            case 2: romano.un="II"
            break
            case 3: romano.un="III"
            break
            case 4: romano.un="IV"
            break
            case 5: romano.un="V"
            break
            case 6: romano.un="VI"
            break
            case 7: romano.un="VII"
            break
            case 8: romano.un="VIII"
            break
            case 9: romano.un="IX"
            break
           }
       numeroFormado=romano.mil+romano.cen+romano.dez+romano.un
       if (numeroEmMaiuscula===numeroFormado){
          console.log("El numero Romano que ingresou equivale ao numero natural ",numero)
          numero=4000
        } else if(numero===3999){ 
            return console.log("O numero romano:", numeroEmMaiuscula, "não existe")
               }   
    } 
}    
converterNumerosRomanos("MCML")
