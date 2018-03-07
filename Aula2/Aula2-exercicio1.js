function Imc(peso, altura){
    var imc = peso/ (altura*altura);
     if (imc < 18.5){
         console.log("Abaixo do peso normal, com imc de: " + imc);
     }
     else if(imc >=18.5 && imc <= 25){
         console.log("Está com o peso normal, com um imc de: " + imc);
    }
    else if(imc >25 && imc <=30){
        console.log("Está acima do peso normal, com um imc de: " + imc);
    }
    else{
        console.log("Obeso, com um imc de: " + imc);
    }

}

function fraseInversa(fraseInv){
    var frase="";
    var i = fraseInv.length-1;
    while(i>=0){
        frase+=fraseInv[i];
        i--;        
    }
    return frase;
}

function numDeVogais(vogal){
    var vogais=["a","e","i","o","u"];
    var i;
    var j;
    var n=0;
    for (i=0, vogal.length; i++){
        for (j=0, vogais.length;j++)
            if(vogal[i]==vogais[j]){
                n++;
            }
        if (n>1){
            return "palavra tem " + n + "vogais"

        };
        
    }
}

function rectangulo(rect){

    

    }
}


Imc(60,1.73);
var inversa=fraseInversa("ola besta");
console.log(inversa);