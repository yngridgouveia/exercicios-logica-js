//Faça um Programa que peça dois números e imprima a soma.
function soma(n1=0,n2=0){
    let total
    n1=parseFloat(n1)
    n2=parseFloat(n2)
    total= n1 + n2
    document.querySelector("#resultado").innerHTML = "a soma dos dois numeros é:" + total
}


