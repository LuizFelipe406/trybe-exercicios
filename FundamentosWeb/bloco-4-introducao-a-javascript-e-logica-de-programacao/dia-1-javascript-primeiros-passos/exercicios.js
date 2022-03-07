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
let peca = "Peao";
let pecalower = peca.toLowerCase();
switch(pecalower){
    case "rei":
        console.log("só pode se mover (ou capturar) uma casa em qualquer direção.");
        break;
    case "dama":
        console.log("uma dama pode se mover como uma torre e um bispo juntos!");
            break;
    case "torre":
        console.log("Ela pode mover quantas casas quiser para esquerda ou direita (na horizontal), ou quantas casas quiser para cima ou para baixo (na vertical), desde que não seja bloqueada por outras peças.");
        break;
    case "cavalo":
        console.log("O cavalo é a única peça de xadrez que pode saltar sobre outra peça! Ele move uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical, OU ele move duas casas para a esquerda ou para a direita na horizontal e depois uma casa para cima ou para baixo na vertical - em outras palavras, o cavalo se move em 'L'. O cavalo pode capturar apenas a peça que estiver na casa onde ele parar, e não a peça que ele pular!");
        break;
    case "bispo":
        console.log("Um bispo pode mover na diagonal quantas casas quiser, desde que não seja bloqueado por suas próprias peças ou por uma peça inimiga. Uma maneira fácil de lembrar como um bispo pode se mover é imaginar que ele se move como um 'X'. Ele pode capturar uma peça do oponente movendo-se para a casa que ela ocupa, retirando-a do tabuleiro.");
        break;
    case "peao":
        console.log("Se for o primeiro lance de um peão, ele pode avançar uma ou duas casas. Se um peão já se moveu na partida, ele pode avançar apenas uma casa por vez. Ele ataca (ou captura) uma casa na diagonal, para a esquerda ou direita.");
        break;
    default:
        console.log("peça inexistente");
}