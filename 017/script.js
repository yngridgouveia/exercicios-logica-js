//faça um programa que peça dois números e imprima o maior deles.
function maiorNumero(n1=0,n2=0,n3=0){
    if(n1 > n2 && n1> n3){
        console.log("o maior número é:",n1)
    }else if(n2 > n1 && n2 > n3){
        console.log("o maior número é:",n2)
    }else if(n3 > n1 && n3>n2){
        console.log("o maior número é:",n3)
    }
}

maiorNumero(254,790,1987)


function soma(n1=0,n2=0){
    let total
    total=n1+n2
    console.log(total)
}
soma(2,5)