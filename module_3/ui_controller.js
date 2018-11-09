export default class UIController  {
    cardNumberValid(){
        let place = document.getElementById('place');
        place.addEventListener('keyup', () => {
            if (place.value.match(/^(\d{4}-){3}\d{4}/)) {
                place.style.border = '2px solid green';
            } else {
                place.style.border = '2px solid red';
            }
        })
    }
    nameValid() {
        let name = document.getElementById('name');
        name.addEventListener('keyup', () => {
            if (name.value.match(/([A-z])\w+/) && name.value.length >= 2) {
                name.style.border = '2px solid green';
            } else {
                name.style.border = '2px solid red';
            }
        })
    }
    showPreloader(){
        let request = document.getElementById('request');
        request.value = 'Loading';
    }
    hidePreloader(){
        let request = document.getElementById('request');
        request.value = 'Get Info';
    }
    createTable(data){
        const keys = Object.keys(data);
        const values = Object.values(data);
        const table = document.getElementById('tb');
        for (let i = 0; i < keys.length; i += 1) {
            const tr = document.createElement('tr');
            const td_key = document.createElement('td');
            td_key.innerText = `${keys[i]}`;
            tr.append(td_key);
            const td_value = document.createElement('td');
            td_value.innerText = `${values[i]}`;
            tr.append(td_value);
            table.append(tr);
        }
    }
}
