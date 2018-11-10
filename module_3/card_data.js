import UIController from './ui_controller.js';

const ui = new UIController();

export default class CardData  {
    takeApiData(){
        let place = document.getElementById('place');
        return fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${place.value.replace(/-/g, '')}`)
        .then(res => res.json())
        
    } 
}