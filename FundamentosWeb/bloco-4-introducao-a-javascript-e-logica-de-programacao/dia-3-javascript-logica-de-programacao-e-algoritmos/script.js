// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

//1 - Criar a variavel com o resultado
//2 - Criar uma estrutura de repetiçao para percorrer todos os numeros da variavel até o 1.
//3 - multiplicar todos os numeros na variavel
//4 -  imprimir o resultado
let fatorial = 1;
for (let i = 10; i >= 1; i -= 1) {
    fatorial = fatorial * i;
}
console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
//1 - definir a variavel com a palavra
//2 - criar uma variavel para a palavra invertida
//3 - criar uma estrutra de repeticao para passar por cada letra da palavra de tras para frente
//4 - armazenar cada letra na string nova.
let word = 'tryber';
let wordInvertida = '';
for (let index = word.length - 1; index >= 0; index -= 1) {
    wordInvertida += word[index];
}
console.log(wordInvertida);

// Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
//1 - criar uma variavel para armazenar a maior palavra(começar com a primeira)
//2 - criar um for para percorrer cada elemento do array
//3 - criar uma variavel para armazenar a quantidade de caracteres de cada elementos
//4 - comparar o tamanho da primeira variavel com a segunda
//5 - se for maior, substituir
//5/2 - se for menor, substituir

let maiorPalavra = array[0];
for (let a = 0; a < array.length; a += 1) {
    let caracter = array[a].length
    if (maiorPalavra.length < caracter) {
        maiorPalavra = array[a];
    }
}
console.log(maiorPalavra);

let menorPalavra = array[0];
for (let a = 0; a < array.length; a += 1) {
    let caracter = array[a].length
    if (menorPalavra.length > caracter) {
        menorPalavra = array[a];
    }
}
console.log(menorPalavra);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

//1 - criar uma array para armazenar os numeros primos
//2 - criar um for para passar por todos os numeros de 1 a 50
//3 - criar uma variavel com o numero de divisores
//4 - criar outro for para dividir os numeros;
//5 - armazenar os numeros primos dentro da variavel
//6 - exibir o ultimo numero da array


let primos = [];
for (let index1 = 0; index1 <= 50; index1 += 1) {
    let numeroDeDivisores = 0;
    for (let index2 = 1; index2 <= index1; index2 += 1) {
        if (index1 % index2 == 0) {
            numeroDeDivisores += 1
        }
    }
    if (numeroDeDivisores <= 2) {
        primos.push(index1);
    }
}
console.log(primos[primos.length - 1]);