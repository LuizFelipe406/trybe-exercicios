// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function verificaPalindrome(palavra) {
    let palavraInvertida = palavra.split("").reverse().join("")
    if (palavraInvertida == palavra) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
verificaPalindrome("computador");

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maior(array) {
    let maior = array[0];
    let maiorIndex = 0;
    for (index in array) {
        if (array[index] > maior) {
            maiorIndex = index;
        }
    }
    console.log("o index do maior valor é: " + maiorIndex);
}
let numeros = [2, 3, 6, 7, 10, 1];
maior(numeros);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menor(array) {
    let menor = array[0];
    let menorIndex = 0;
    for (index in array) {
        if (array[index] < menor) {
            menorIndex = index;
        }
    }
    console.log("o index do menor valor é: " + menorIndex);
}
let numbers = [2, 4, 6, 7, 10, 0, -3];
menor(numbers);

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorCarac(array) {
    let maiorCaracs = array[0].length;
    let maiorCaracIndex = 0;
    for (index in array) {
        let quantCarac = array[index].length;
        if (quantCarac > maiorCaracs) {
            maiorCaracIndex = index;
            maiorCaracs = array[index].length;
        }
    }
    console.log(array[maiorCaracIndex]);
}
let nomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
maiorCarac(nomes);
