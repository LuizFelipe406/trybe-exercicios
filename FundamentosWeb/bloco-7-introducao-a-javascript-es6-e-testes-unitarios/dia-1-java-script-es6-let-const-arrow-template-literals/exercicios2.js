const fatorial = (number) => {
    let resultado = number;
    for (let i = number - 1; i > 0; i = i-1){
        resultado = resultado * i;
    }
    return resultado
} 

console.log(fatorial(5));

const longestWord = ('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const biggerWord = (string) => {
    const array = string.split(' ');
    let word = array[0];
    for(let i = 0; i < array.length; i += 1){
        (array[i].length > word.length) ? word = array[i] : word = word ;
    }
    return word;
}

console.log(biggerWord(longestWord));


const tryber = (nome) => {
    const string = 'Tryber x aqui!';
    const array = string.split('');
    let newArray = [];
    for (let indices in string){
        (string[indices] === 'x') ? newArray.push(nome) : newArray.push(string[indices]);
    } const frase = concat(newArray.join(''));
    return frase;
}

const skills = ['html','css','javascript','flexbox','forms'];

const concat = (nomeTryber) => {
    const ordenatedSkills = skills.sort();
    return `${nomeTryber} Minhas cinco principais habilidades são: ${ordenatedSkills}, #goTrybe`;
}

console.log(tryber('Bebeto'));
