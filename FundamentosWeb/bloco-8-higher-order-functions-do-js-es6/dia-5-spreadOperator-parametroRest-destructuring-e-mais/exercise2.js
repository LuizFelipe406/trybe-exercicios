// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...parameters) =>
	parameters.reduce((acc, current) => acc + current);

console.log(sum(1, 2, 3, 4, 5));
