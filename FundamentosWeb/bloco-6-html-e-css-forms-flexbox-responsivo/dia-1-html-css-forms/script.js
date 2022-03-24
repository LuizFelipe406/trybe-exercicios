const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function impedir(event){
    event.preventDefault();
}

function impedirText(event){
    if(event.key !== 'a'){
        event.preventDefault();
    }
}

HREF_LINK.addEventListener('click',impedir);
INPUT_CHECKBOX.addEventListener('click',impedir);
INPUT_TEXT.addEventListener('keypress',impedirText)