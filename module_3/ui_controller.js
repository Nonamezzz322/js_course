export default class UIController  {
    cardNumberValid(){
        this.place = document.getElementById('place');
        this.name = document.getElementById('name');
        this.place.addEventListener('keyup', () => {
            if (this.place.value.match(/^(\d{4}-){3}\d{4}/)) {
                this.place.style.border = '2px solid green';
                this.place.valid = true;
            } else {
                this.place.style.border = '2px solid red';
                this.place.valid = false;
            }
            this.getButtonValid(this.place, this.name);
        })
    }
    nameValid() {
        this.name.addEventListener('keyup', () => {
            if (this.name.value.match(/^([A-z])+$/) && this.name.value.length >= 2) {
                this.name.style.border = '2px solid green';
                this.name.valid = true;
            } else {
                this.name.style.border = '2px solid red';
                this. name.valid = false;
            }
            this.getButtonValid(this.place, this.name);
        })
    }

    getButtonValid(place, name){
        this.request = document.getElementById('request');
        if (this.place.valid && this.name.valid){
            this.request.disabled = false;
            this.request.style.background = 'green';
        } else {
            this.request.disabled = true;
            this.request.style.background = 'red';
        }
    }
    createPreloader(){
        this.preloader = document.createElement('span');
        this.preloader.id = 'preload';
        this.preloader.innerText = 'Loading';
        document.body.appendChild(this.preloader);
        this.hide = document.getElementById('preload');
        this.hide.style.display = 'none';
    }

    showPreloader(){
        this.hide.style.display = 'inline-block';
        this.name.disabled = true;
        this.place.disabled = true;
        this.request.disabled = true;
    }
    
    hidePreloader(){
        const place = document.getElementById('place');
        const name = document.getElementById('name');
        const request = document.getElementById('request');
        const hidden = document.getElementById('preload');
        hidden.style.display = 'none';
        name.disabled = false;
        place.disabled = false;
        request.disabled = false;
    }

    createTable(data){
        const keys = Object.keys(data);
        const values = Object.values(data);
        const table = document.createElement('table');
        table.classList.add('tab');
        document.body.appendChild(table);
        for (let i = 0; i < keys.length; i += 1) {
            const tr = document.createElement('tr');
            const keysTd = document.createElement('td');
            keysTd.innerText = `${keys[i]}`;
            tr.append(keysTd);
            const valueTd = document.createElement('td');
            if (values[i] === ''){
                valueTd.innerText = `Undefined`;
            } else{
                valueTd.innerText = `${values[i]}`;
            }
            tr.append(valueTd);
            table.append(tr);
        }
    }
    removeTable(){
        let elem = document.getElementsByClassName('tab')[0];
        let elem2 = document.getElementsByClassName('tab')[1];
        if(elem2){
            elem2.remove();
        } if(elem){
        elem.remove();
        }
    }
    reloadTable(){
        this.request.addEventListener('click', this.removeTable)
    }
    hideClearButton(){
        const button = document.getElementById('clear'); 
        button.style.display = 'none';
    }

}
