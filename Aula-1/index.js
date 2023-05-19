// Exercicio 1
const numeroInt = "97.50";
const numeroBr = numeroInt.replace(".",",");

// Exercicio 2
const valorMilhar = "1,350,000,0,0"
let valorMilharBr = valorMilhar

while(valorMilharBr.includes(",") === true){
    valorMilharBr = valorMilharBr.replace(",",".")
}

// Exercicio 3

function imprimirData(dia, mes, ano){
    let dia2 = dia.toString().padStart(2,"0");
    let mes2 = mes.toString().padStart(2,"0");
    let ano2 = ano.toString();
    console.log(`${dia2}/${mes2}/${ano2}`)
}

imprimirData(1,1,2021);