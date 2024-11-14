import User from "../model/login-model.js";

window.addEventListener('load',eventBinding);
function takeUserInput(){
const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
// console.log(name,email,password);
const user = new User(name,email,password);

// console.log(user);

}

function eventBinding(){
    document.querySelector('#btn').addEventListener('click', takeUserInput);

}
