export default class CardData  {
    fetchApi(){
        let place = document.getElementById('place');
        fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${place.value.replace(/-/g, '')}`)
        .then(res => res.json())
    }   
}