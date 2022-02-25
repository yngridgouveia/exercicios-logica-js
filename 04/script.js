//Faça um Programa que peça as 4 notas bimestrais e mostre a média.
function media(n1,n2,n3,n4){
    let total
    total=(n1+n2+n3+n4)/4
    if(total<5){
        console.log("você foi reprovado:",total)
    }else if(total>=5){
        console.log("parabens!! \nvocê foi aprovado:",total)
    }

}
let n1,n2,n3,n4
console.log("digite a nota do 1ºbimestre:")
n1=7
console.log("digite a nota do 2ºbimestre:")
n2=3
console.log("digite a nota do 3ºbimestre:")
n3=8
console.log("digite a nota do 4ºbimestre:")
n4=9

media(n1,n2,n3,n4)