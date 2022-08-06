const nameUser = document.getElementById('name');
const emailUser = document.getElementById('email');
const localUser = document.getElementsByClassName('local');
const textUser = document.getElementById('text');
const dateUser = document.getElementById('date');
const autorizeUser = document.getElementsByClassName('confirmNewsandImage');
const submit = document.getElementById('enviar');
const clearDisplay = document.getElementById('clear')

function getUserValue(event){
    event.preventDefault();
    localStorage.setItem('nameUser', nameUser);
    localStorage.setItem('emailUser', emailUser);
    localStorage.setItem('localUser', localUser);
    localStorage.setItem('textUser', textUser);
    localStorage.setItem('dateUser', dateUser);
    localStorage.setItem('autorizeUser', autorizeUser);
}
submit.addEventListener('click', getUserValue);
