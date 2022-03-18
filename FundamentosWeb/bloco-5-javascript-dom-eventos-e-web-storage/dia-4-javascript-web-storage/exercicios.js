let corDeFundo = document.getElementById('corDeFundo');
let corDoTexto = document.getElementById('corDoTexto');
let tamanhoFonte = document.getElementById('tamanhoFonte');
let espacamento = document.getElementById('espacamento');
let familiaDaFont = document.getElementById('tipoDaFonte');
let text = document.getElementById('text');

corDeFundo.addEventListener('keyup', mudarFundo);
corDoTexto.addEventListener('keyup', mudarCorTexto);
tamanhoFonte.addEventListener('keyup', mudarFontSize);
espacamento.addEventListener('keyup', mudarEspacamento);
familiaDaFont.addEventListener('keyup', mudarFontFamily);

let personalizacao = {
    corFundo: '',
    corTexto: '',
    fontSize: '',
    espacamento: '',
    fontFamily: '',
};

function mudarFundo() {
    personalizacao.corFundo = corDeFundo.value;
    localStorage.setItem('corFundo', personalizacao.corFundo);
    text.style.backgroundColor = localStorage.getItem('corFundo');
}

function mudarCorTexto() {
    personalizacao.corTexto = corDoTexto.value;
    localStorage.setItem('corTexto', personalizacao.corTexto);
    text.style.color = localStorage.getItem('corTexto');
}

function mudarFontSize() {
    personalizacao.fontSize = tamanhoFonte.value;
    localStorage.setItem('fontSize', personalizacao.fontSize);
    text.style.fontSize = localStorage.getItem('fontSize') + 'px';
}

function mudarEspacamento() {
    personalizacao.espacamento = espacamento.value;
    localStorage.setItem('espacamento', personalizacao.espacamento);
    text.style.lineHeight = localStorage.getItem('espacamento') + 'px';
}

function mudarFontFamily() {
    personalizacao.fontFamily = familiaDaFont.value;
    localStorage.setItem('fontFamily', personalizacao.fontFamily);
    text.style.fontFamily = localStorage.getItem('fontFamily');
}

window.onload = function () {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            switch (key) {
                case 'corFundo': text.style.backgroundColor = localStorage.getItem('corFundo');
                case 'corTexto': text.style.color = localStorage.getItem('corTexto');
                case 'fontSize': text.style.fontSize = localStorage.getItem('fontSize') + 'px';
                case 'espacamento': text.style.lineHeight = localStorage.getItem('espacamento') + 'px';
                case 'fontFamily': text.style.fontFamily = localStorage.getItem('fontFamily');
            }
        }
    }
}
