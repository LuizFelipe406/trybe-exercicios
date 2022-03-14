// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function romano(string) {
    let conversao = [];
    let resultado = [];
    let soma = 0;
    let tabela = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    for (index in string) {
        for (i in tabela) {
            if (string[index] == i) {
                conversao.push(tabela[i])
            }
        }
    }
    for (let i = 0; i < conversao.length; i += 1) {
        if (i == 0 || conversao[i] == conversao[i-1]) {
            resultado.push(conversao[i]);
        } else if (conversao[i] < conversao[i + 1]) {
            resultado.push(conversao[i + 1] - conversao[i])
            i+=1
        }else if (conversao[i] >= conversao[i+1]){
            resultado.push(conversao[i]+conversao[i+1])
            i+=1
        }else if (i==conversao.length-1){
            resultado.push(conversao[i]);
        }
    }
    for(i in resultado){
soma += resultado[i];
    }
    console.log(soma);
}

romano("XXXIX");

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

// function arrayOfNumbers(vector){
//     for(index in vector){

//     }
// }