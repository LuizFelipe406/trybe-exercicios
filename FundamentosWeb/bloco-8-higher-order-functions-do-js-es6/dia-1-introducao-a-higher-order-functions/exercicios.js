//1 -
const createEmployee = (nome) => ({
    nomeCompleto: nome,
    email: `${nome}@trybe.com`
})

const newEmployees = (func) => {
    const employees = {
        id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees(createEmployee));

//2-

const checkSorteio = (number, resultado) => (number === resultado) ? 'Parabéns você ganhou' : 'Tente novamente';

const sorteio = (number, func) => {
    const resultado = Math.floor(Math.random() * 6);
    return func(number, resultado);

}

console.log(sorteio(4, checkSorteio));

//3 - 

const checkNotas = (gabarito, respostas) => {
    let pontuacao = 0;
    for(let i in gabarito){
        if(gabarito[i] === respostas[i]) {
            pontuacao += 1;
        }
        else if (respostas[i] === 'N.A') {
            pontuacao = pontuacao;
        }
        else {
            pontuacao -= 0.5;
        }
    } return pontuacao;
}

const notas = (gabarito, respostas, func) => func(gabarito, respostas);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(notas(RIGHT_ANSWERS, STUDENT_ANSWERS, checkNotas));