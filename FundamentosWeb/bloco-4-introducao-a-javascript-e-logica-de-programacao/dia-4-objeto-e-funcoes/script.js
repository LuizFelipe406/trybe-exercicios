let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld: {
        years: [2006, 2007, 2008, 2009, 2010, 2018],
    }
}
console.log("A Jogadora " + player.name + " " + player["lastName"] + " tem " + player.age + " anos de idade.");

console.log("A Jogadora " + player["name"] + " " + player["lastName"] + " foi eleita a melhor do mundo por " + player.bestInTheWorld.years.length + " vezes");

console.log("A Jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " de Prata.");

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};
for (let key in names) {
    console.log("Olá", names[key]);
}

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car) {
    console.log(key, car[key]);
}

//Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo.

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

function resto(a, b) {
    return a % b
}

function maior(a, b) {
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}

function maior3(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

function positivo(a) {
    if (a > 0) {
        console.log("positive");
    }
    else if (a < 0) {
        console.log("negative");
    }
    else {
        console.log("zero");
    }
}

function angulosTriangulo(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b + c == 180) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    else {
        console.log("angulo invalido");
    }
}
