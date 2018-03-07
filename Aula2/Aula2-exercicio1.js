function Imc(peso, altura){
    var imc = peso/ (altura^2);
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

function ordemInversa(frase){
    
}


Imc(60,1.73);
