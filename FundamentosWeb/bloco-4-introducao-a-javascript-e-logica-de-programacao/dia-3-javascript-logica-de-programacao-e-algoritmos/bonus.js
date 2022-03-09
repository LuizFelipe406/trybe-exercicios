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
// let n = 5;
// for (let index = 0; index < n; index += 1) {
//     let asteriscos = "";
//     let espacos = "";
//     for (let index3 = n - 1; index3 > index; index3 -= 1) {
//         espacos += " ";
//     }
//     for (let index2 = 0; index2 <= index; index2 += 1) {
//         asteriscos += "*";
//     }
//     console.log(espacos,asteriscos);
// }

// 4- Depois, faça uma pirâmide com n asteriscos de base:
// let n = 5;
// for (let index = 0; index < n; index += 2) {
//     let asteriscos = "";
//     let espacos = "";
//     for (let index3 = n - 1; index3 > index; index3 -= 2) {
//         espacos += " ";
//     }
//     for (let index2 = 0; index2 <= index; index2 += 1) {
//         asteriscos += "*";
//     }
//     console.log(espacos,asteriscos);
// }

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// let n = 7;
// for (let index = 0; index < n; index += 2) {
//     let asteriscos = "";
//     let espacos = "";
//     for (let index3 = n - 1; index3 > index; index3 -= 2) {
//         espacos += " ";
//     }
//     if (index == n - 1) {
//         for (let index2 = 0; index2 <= index; index2 += 1) {
//             asteriscos += "*";
//         }
//     }
//     else {
//         for (let index2 = 0; index2 <= index; index2 += 1) {
//             if (index2 == 0 || index2 == index) {
//                 asteriscos += "*";
//             }
//             else {
//                 asteriscos += " ";
//             }
//         }
//     }
//     console.log(espacos, asteriscos);
// }

//6- Faça um programa que diz se um número definido numa variável é primo ou não.
let numero = 0;
let contadorDeDivisores = 0;
for (let index = 1; index <= numero; index += 1) {
    if (numero % index == 0) {
        contadorDeDivisores += 1
    }
}
if (contadorDeDivisores <= 2 && contadorDeDivisores !== 0) {
    console.log("O numero", numero, "é primo!");
}
else {
    console.log("O numero", numero, "não é primo!");
}