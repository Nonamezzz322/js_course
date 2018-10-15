const input = document.getElementById('input');
const result = document.getElementById('result');
let days;


document.getElementById('input').addEventListener('input', () => {
    let one = new Date(input.value);
    let two = Date.now();
    if (Math.ceil(one/1000/60/60/24) === Math.floor(two/1000/60/60/24)) {
    result.innerText = `С Днем рождения!` 
    } else if (one <= two){
        days =  Math.floor((two - one)/1000/60/60/24);
        result.innerText = `Ваш день рождения был ${days} ${getDay(days)} назад.`;
        console.log(one);
    } else {
        days =  Math.ceil((one - two)/1000/60/60/24);
    
        result.innerText = `До вашего дня рождения осталось прожить ${days} ${getDay(days)}.`;
        console.log(one);
}
function getDay (number) {
    if (number >= 5 && number <= 20){
        return 'дней';
    }
    number %= 10;
    if (number == 1){
        return 'день';
    } else if (number >= 2 && number <= 4){
        return 'дня';
    } else {
        return 'дней';
    }
}
});

