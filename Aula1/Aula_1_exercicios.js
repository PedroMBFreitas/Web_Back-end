function notaFinal(notaP1, notaP2, notaT){
    return (notaP1*0.3 + notaP2*0.3 + notaT*0.4);
}
function main(){
    var notaT=16;
    var notaP1=12;
    var notaP2=13;
    var notaF=notaFinal(notaP1, notaP2, notaT);
    console.log("Nota Final: " + notaFinal);
    
    if (notaFinal>=9.5){
        console.log("Aprovado");
    }
    else{
        console.log("Reprovado");
    }

}


function main(){
    var mes;
    switch (new mes().get){
        case  1:
        mes = "Janeiro";
        break;

        case 2:
        mes = "Fevereiro";
        break;

        case 3:
        mes = "Março";
        break;

        case 4:
        mes = "Abril";
        break;

        case 5:
        mes = "Maio";
        break;

        case 6:
        mes = "Junho";
        break;

        case 7:
        mes = "Julho";
        break;

        case 8:
        mes = "Agosto";
        break;

        case 9:
        mes = "Setembro";
        break;

        case 10:
        mes = "Outubro";
        break;

        case 11:
        mes = "Novembro";
        break;

        case 12:
        mes = "Dezembro";
        break;
    }
    
}