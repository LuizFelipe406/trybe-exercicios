// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
// let n = 5;

// for (let index = 0; index < n; index +=1){
//     let asteriscos = "";
//     for(let index2 = 0; index2 <n; index2+=1){
//         asteriscos+="*";
//     }
//     console.log(asteriscos);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
// let n = 5;
// for (let index = 0; index < n; index +=1){
//     let asteriscos = "";
//     for(let index2 = 0; index2 <=index; index2+=1){
//         asteriscos+="*";
//     }
//     console.log(asteriscos);
// }

// 3- Agora inverta o lado do triângulo. 
let n = 5;
for (let index = 0; index < n; index += 1) {
    let asteriscos = "";
    let espacos = "";
    for (let index3 = n - 1; index3 > index; index3 -= 1) {
        espacos += " ";
    }
    for (let index2 = 0; index2 <= index; index2 += 1) {
        asteriscos += "*";
    }
    console.log(espacos,asteriscos);
}
