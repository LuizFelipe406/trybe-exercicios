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
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
maiorCarac(nomes);

//5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function repete(array) {
    let maiorRep = 0;
    let maiorQuantRep = 0;
    for (index in array) {
        let quantRep = 0;
        let quantRepIndex = 0;
        for (index2 in array) {
            if (array[index2] === array[index]) {
                quantRep += 1;
                quantRepIndex = index2
            }
        }
        if (quantRep > maiorQuantRep) {
            maiorQuantRep = quantRep;
            maiorRep = array[quantRepIndex];
        }
    }
    console.log(maiorRep);
}
let number = [2, 3, 2, 5, 8, 2, 3];
repete(number);

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i += 1) {
        soma += i;
    }
    console.log(soma);
}
somatorio(5);

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(string1, string2) {
    let newstring1 = string1.split("").slice(-string2.length).join("")
    if(newstring1 === string2){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

verificaFimPalavra("joaofernando","fernando");