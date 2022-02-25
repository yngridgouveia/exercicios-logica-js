//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
//Calcule e mostre o total do seu salário no referido mês.
function total(dinheiro=0,horas=0){
    let ganho
    ganho=dinheiro*horas
    console.log("quantos você ganha por hora?")
    console.log("quantas horas você trabalha em um mês?")
    console.log("você receberá :",ganho)
}

total(30,250)