// você roda o teste, o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, dado o final do teste, gera um resultado positivo antes de um eventual problema numa função assíncrona acusar um erro.
// O exemplo abaixo gera um falso-positivo:

// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

// Para que o Jest espere a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done , que precisa ser chamada após os testes assíncronos.

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

//Apesar do código acima parecer correto, irá falhar com uma mensagem de timeout. O motivo é que quando uma asserção (verificação) falha, a exceção é lançada, ou seja, algo inesperado aconteceu. Dessa forma, o fluxo é interrompido antes que a instrução done() seja executada. Para resolver este problema podemos colocar um bloco try/catch em volta da nossa asserção. Enquanto o try tenta executar a função no seu escopo com sucesso, o catch "captura" o erro, chamando a callback done :
// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done();
//     }
//   }, 500);
// });

// Estamos quase lá... O código acima irá gerar um falso-positivo. O motivo é que não estamos passando nenhuma ação a ser realizada quando o erro acontece e "encerramos" nosso teste com o done() sem lançar nenhum erro, dessa forma o teste é interpretado como "correto". Para resolver, podemos passar o parâmetro de erro para o catch . Dessa forma, caso nosso try não consiga executar o código dentro dele, cairá no catch , que vai pegar esse erro e vai encerrar nosso teste lançando um erro.

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error); // Alteramos esta linha
//     }
//   }, 500);
// });

// Vamos a mais um exemplo para fixação, desta vez você irá implementar uma função que espera um tempo e retorna a soma de dois números: 
// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });


// Setup e Teardown
// Setup - é o primeiro ciclo. Ele ocorre antes dos testes serem executados. É uma fase inicial que você pode definir algumas configurações.
// Testes - é considerado o segundo ciclo, ou seja, o momento em que ocorrem os testes. O ciclo em que foi trabalhado nos blocos anteriores.
// Teardown - é o terceiro ciclo. Uma fase que ocorre após os testes serem executados.

const addCity = (city) => {
cities.push(city);
};

const removeCity = (city) => {
cities = cities.filter((eachCity) => eachCity !== city);
};

beforeEach(() => {
  cities = ['Pindamonhangaba'];
});

afterEach(() => {
  cities = [];
});

test('Testa a função addCity utilizando o beforeEach', () => {
  expect.assertions(3);
  addCity('Piraporinha');
  expect(cities).toHaveLength(2);
  expect(cities).toContain('Pindamonhangaba');
  expect(cities).toContain('Piraporinha');
});

test('Testa a função removeCity utilizando o beforeEach', () => {
  expect.assertions(2);
  removeCity('Pindamonhangaba');
  expect(cities).not.toContain('Pindamonhangaba');
  expect(cities).toHaveLength(0);
});

// No código acima, você declarou uma função beforeEach , que roda antes de cada um dos testes, ou seja, não importa quantos testes sejam criados, a função rodará antes de cada um deles, para definir as suas configurações. Como visto antes, este é o ciclo anterior aos testes chamado de setup .
// Nesta fase, é configurado o array para ter sempre o valor ['Pindamonhangaba'] , portanto, em todos os testes realizados, o valor do array será sempre o mesmo.
// Também declaramos uma função afterEach , que roda após cada um dos testes e faz a limpeza dos dados do nosso array depois de cada execução. Além disso, como o próprio nome indica, ela é executada após cada teste no terceiro ciclo dos testes, que é a fase de teardown .

//Agora, se você tem um bloco de describe agrupando os testes, e o beforeEach ou afterEach estiverem dentro desse describe , ele rodará apenas dentro dos testes que estão nesse describe .
// Ou seja, se criarmos um segundo describe , aquele beforeEach e afterEach que estão no primeiro describe não serão rodados antes e/ou depois dos testes do segundo.