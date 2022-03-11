
//Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
function exibir(num=0){
    let resultado
    
    resultado=document.querySelector("#numero").value
    num= resultado
    document.querySelector("#resultado").innerHTML = "o numero informado foi:" + num
}
