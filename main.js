let paragraph = document.getElementsByTagName('h1')
let menu = document.getElementsByClassName('menu');
let imgBox = document.getElementsByClassName('img-box');
let home = document.getElementsByClassName('home');
let icons = document.getElementsByTagName('i');
let mood = document.getElementById('mood');

let body = document.body;

function mood(){
    body.style.backgroundColor = '#f0f0f0';
    icons.style.backgroundColor = '#007bff';
    mood.innerHTML = 'dark mood'

}