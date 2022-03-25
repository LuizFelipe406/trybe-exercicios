const b1 = document.getElementById('submit');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const textarea = document.getElementsByTagName('textarea')[0];
// function inutilize(event) {
//     event.preventDefault();
//     if(nome.value.length < 10 || nome.value.length > 40 || email.value.length < 10 || email.value.length > 50 || textarea.value.length > 500){
//         alert('Dados Inválidos')
//     }
//     else{
//         alert('Dados enviados com sucesso!')
//     }
// }

b1.addEventListener('click', inutilize);
