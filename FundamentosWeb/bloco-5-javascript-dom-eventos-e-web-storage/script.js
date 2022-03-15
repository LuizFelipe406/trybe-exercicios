// Acesse o elemento elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta'));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let paiColor = document.getElementById('elementoOndeVoceEsta').parentElement;
paiColor.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
primeiroFilho.innerText = "Olá";

// Acesse o primeiroFilho a partir de pai .
console.log(document.getElementById('pai').firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);

// Crie um irmão para elementoOndeVoceEsta .
let newSection = document.createElement('section');

document.getElementById('pai').appendChild(newSection);

// Crie um filho para elementoOndeVoceEsta .
let newSon = document.createElement('div');

document.getElementById('elementoOndeVoceEsta').appendChild(newSon);

// Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilhoDoFilho = document.createElement('section');
document.getElementById('primeiroFilhoDoFilho').appendChild(primeiroFilhoDoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .
console.log(document.querySelector('#primeiroFilhoDoFilho section').parentElement.parentElement.nextElementSibling);

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let paiFilhos = document.getElementById('pai').children;
for (let i = 0; i < pai.length; i += 1) {
    if (paiFilhos[i].id !== 'elementoOndeVoceEsta') {
        document.getElementById('pai').remove(paiFilhos[i]);
    }
}

// let elemento = document.getElementById('elementoOndeVoceEsta').children;
// for (let i = 0; i < elemento.length; i += 1) {
//     if (elemento[i].id === 'primeiroFilhoDoFilho') {
//         continue
//     } document.getElementById('elementoOndeVoceEsta').removeChild(elemento[i]);
// }
