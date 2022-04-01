const b1 = document.getElementById('btn');
const counter = document.getElementById('btn-count');

b1.addEventListener('click', () => {
    const atual = parseInt(counter.innerText);
    counter.innerText = atual + 1;
})