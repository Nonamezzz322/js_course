import MaskInput from 'mask-input';
import UIController from './ui_controller.js';
import CardData from './card_data.js';

const maskInput = new MaskInput(document.querySelector('.js-input-selector'), {
    mask: '0000-0000-0000-0000',
    alwaysShowMask: true,
    maskChar: '_',
  });

const ui = new UIController();
const data = new CardData();
ui.cardNumberValid();
ui.nameValid();
ui.createPreloader();

let promise2 = new Promise(function(res,rej){
    res(localStorage.getItem('table', res))
}) 
    .then(res => JSON.parse(res))
    .then(res=> ui.createTable(res))
    .then(res => ui.hidePreloader())


const request = document.getElementById('request');
const button = document.getElementById('clear');
request.disabled = true;
request.style.background = 'red';

request.addEventListener('click', () => {
    button.style.display = 'inline-block';
    ui.showPreloader();
    ui.removeTable();
    let promise1 = new Promise(function(res,rej){
        res(data.takeApiData())
    }) 
        .then(res => JSON.stringify(res))
        .then(res => localStorage.setItem('table', res))
        .then(res => localStorage.getItem('table', res))
        .then(res => JSON.parse(res))
        .then(res=> ui.createTable(res))
        .then(res => ui.hidePreloader())
    ui.reloadTable();
})

button.addEventListener('click', () => {
    ui.hideClearButton() 
    ui.removeTable();
});