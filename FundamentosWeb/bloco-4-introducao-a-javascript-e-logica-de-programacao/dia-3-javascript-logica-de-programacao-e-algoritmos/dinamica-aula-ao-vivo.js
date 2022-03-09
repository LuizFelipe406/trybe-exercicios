// exercicio1 
let soma = 0;
for (let index = 50; index <= 100; index += 1) {
    soma += index;
}
console.log(soma);

//exercicio2 
let numerosDivisiveis = [];
for (let index = 1; index <= 125; index += 1) {
    if (index % 3 == 0) {
        numerosDivisiveis.push(index);
    }
}
if (numerosDivisiveis.length == 50) {
    console.log("Mensagem Secreta");
}
console.log(numerosDivisiveis.length);

//exercicio3
let jogador1 = "papel";
let jogador2 = "tesoura";

if (jogador1 == "tesoura") {
    switch (jogador2) {
        case "tesoura": console.log("empate"); break;
        case "papel": console.log("Vitoria do jogador 1"); break;
        case "pedra": console.log("Vitoria do jogador 2"); break;
    }
}
if (jogador1 == "papel") {
    switch (jogador2) {
        case "tesoura": console.log("Vitoria do jogador 2"); break;
        case "papel": console.log("empate"); break;
        case "pedra": console.log("Vitoria do jogador 1"); break;
    }
}
if (jogador1 == "pedra") {
    switch (jogador2) {
        case "tesoura": console.log("Vitoria do jogador 1"); break;
        case "papel": console.log("Vitoria do jogador 2"); break;
        case "pedra": console.log("empate"); break;
    }
}
//exercicio4
// let idade = 7;
// if( idade >= 18){
//     console.log("A pessoa é maior de idade");
// }
// else{
//     console.log("A pessoa é menor de idade");
// }

//exercicio5
let nome = ["Marcella", "Carlos", "Camila"]
let idade = [18, 7, 6];
let menorIdade = idade[0];
let menorIdadeIndex = 0;
for (let index = 0; index < idade.length; index += 1) {
    if (menorIdade >= idade[index]) {
        menorIdade = idade[index];
        menorIdadeIndex = index;
    }
}
console.log(nome[menorIdadeIndex], "é o mais novo");