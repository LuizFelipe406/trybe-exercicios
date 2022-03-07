//Exercicio 1
// const a = 2;
// const b = 4;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

//Exercicio 2
// const a = -12;
// const b = 10;
// if (a>b) {
//     console.log(a);
// }
// else {
//     console.log(b);
// }

//Exercicio 3
// const a = 2;
// const b = 10;
// const c = 15;
// if(a>b && a>c){
//     console.log(a);
// }
// else if(b>a && b>c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }

//Exercicio 4 
// const a = 0;
// if(a > 0){
//     console.log("positive");
// }
// else if(a < 0){
//     console.log("negative");
// }
// else{
//     console.log("zero");
// }

//Exercicio 5 
// const a = 90;
// const b = 30;
// const c = 60;
// if (a>0 && b>0 && c>0){
//     if(a+b+c==180){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }
// else{
//     console.log("angulo invalido");
// }

//Exercicio 6
// let peca = "Peao";
// let pecalower = peca.toLowerCase();
// switch(pecalower){
//     case "rei":
//         console.log("só pode se mover (ou capturar) uma casa em qualquer direção.");
//         break;
//     case "dama":
//         console.log("uma dama pode se mover como uma torre e um bispo juntos!");
//             break;
//     case "torre":
//         console.log("Ela pode mover quantas casas quiser para esquerda ou direita (na horizontal), ou quantas casas quiser para cima ou para baixo (na vertical), desde que não seja bloqueada por outras peças.");
//         break;
//     case "cavalo":
//         console.log("O cavalo é a única peça de xadrez que pode saltar sobre outra peça! Ele move uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical, OU ele move duas casas para a esquerda ou para a direita na horizontal e depois uma casa para cima ou para baixo na vertical - em outras palavras, o cavalo se move em 'L'. O cavalo pode capturar apenas a peça que estiver na casa onde ele parar, e não a peça que ele pular!");
//         break;
//     case "bispo":
//         console.log("Um bispo pode mover na diagonal quantas casas quiser, desde que não seja bloqueado por suas próprias peças ou por uma peça inimiga. Uma maneira fácil de lembrar como um bispo pode se mover é imaginar que ele se move como um 'X'. Ele pode capturar uma peça do oponente movendo-se para a casa que ela ocupa, retirando-a do tabuleiro.");
//         break;
//     case "peao":
//         console.log("Se for o primeiro lance de um peão, ele pode avançar uma ou duas casas. Se um peão já se moveu na partida, ele pode avançar apenas uma casa por vez. Ele ataca (ou captura) uma casa na diagonal, para a esquerda ou direita.");
//         break;
//     default:
//         console.log("peça inexistente");
// }

//Exercicio 7 
// let nota=0;
// if(nota >= 90 && nota <= 100){
//     console.log("A");
// }
// else if(nota >= 80 && nota < 90){
//     console.log("B");
// }
// else if (nota >= 70 && nota < 80){
//     console.log("C");
// }
// else if (nota >= 60 && nota < 70){
//     console.log("D");
// }
// else if (nota >= 50 && nota < 60){
//     console.log("E");
// }
// else if (nota >= 0 && nota < 50){
//     console.log("F");
// }
// else{
//     console.log("Numero Invalido");
// }

//Exercicio 8
// const a = 7;
// const b = 9;
// const c = 4;
// if (a%2==0 || b%2==0 || c%2==0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//Exercicio 9
// const a = 7;
// const b = 3;
// const c = 5;
// if (a%2!==0 || b%2!==0 || c%2!==0){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//Exercicio 10
// const custo = 300;
// const custoTotal= custo + (0.2*custo);
// const preco = 500;
// let lucro = preco - custoTotal;
// if(custo == 0 || preco == 0){
//     console.log("ERRO:valor invalido");
//     return
// }
// else{
//     console.log(1000*lucro);
// }

//Exercicio 11
let salarioBruto = 3000;
let salarioBase=0;
let salarioLiquido=0;
let ir=0;
if (salarioBruto > 0 && salarioBruto <= 1556.94){
salarioBase = salarioBruto - (salarioBruto*0.08);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto*0.09);
    }
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto*0.11);
    }
else if (salarioBruto >= 5189.92){
    salarioBase = salarioBruto - 570.88;
    }
    else{
        console.log("Valor Invalido");
    };    
if (salarioBase <= 1903.98){
    console.log(salarioBase);
}
else if ( salarioBase >= 1903.99 && salarioBase <= 2826.65){
    ir = (0.075*salarioBase) - 142.80;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
}
else if ( salarioBase >= 2826.66 && salarioBase <= 3751.05){
    ir = (0.15*salarioBase) - 354.8;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
}
else if ( salarioBase >= 3751.06 && salarioBase <= 4664.68){
    ir = (0.225*salarioBase) - 636.13;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
}
else if ( salarioBase >= 4664.69){
    ir = (0.275*salarioBase) - 869.36;
    salarioLiquido = salarioBase - ir;
    console.log(salarioLiquido);
}