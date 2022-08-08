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
    localStorage.setItem('nameUser', nameUser.value);
    localStorage.setItem('emailUser', emailUser.value);
    localStorage.setItem('localUser', localUser.value);
    localStorage.setItem('textUser', textUser.value);
    localStorage.setItem('dateUser', dateUser.value);
    localStorage.setItem('autorizeUser', autorizeUser).value;
}
submit.addEventListener('click', getUserValue);
