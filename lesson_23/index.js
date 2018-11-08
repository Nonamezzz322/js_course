const word = document.getElementById('word');
const width = document.getElementById('width');
const height = document.getElementById('height');
const request = document.getElementById('request');
const clear = document.getElementById('clear');

function requestDisable(){ 
    if((width.style.border === "2px solid green") && (height.style.border === "2px solid green") && (word.style.border === "2px solid green")) {
        request.disabled = false;
    } else {
        request.disabled = true;
    }
}
requestDisable()

function showPreloader(){
	request.value = 'Loading';
}

function hidePreloader(){
	request.value = 'Получить';
}

function wordValid(){
    if (word.value.length >= 2){
        word.style.border = "2px solid green";
    } else {
        word.style.border = "2px solid red";
    }
    requestDisable()
}
function disableAll() {
    width.disabled = true;
    height.disabled = true;
    word.disabled = true;
}

function enableAll() {
    width.disabled = false;
    height.disabled = false;
    word.disabled = false;
}


function sizeValid(){
    if (Number(height.value) >= 50 && Number(height.value) <= 500){
        height.style.border = "2px solid green";
    } else {
        height.style.border = "2px solid red";
    }

    if (Number(width.value) >= 50 && Number(width.value) <= 500){
        width.style.border = "2px solid green";
    } else {
        width.style.border = "2px solid red";
    }
    requestDisable()
}

function createimage(){
	fetch(`https://api.datamuse.com/words?ml=${word.value}`)
    .then(res => res.json())
    .then(res => {
        disableAll()
	    for (let i = 0; i < 10; i += 1) {
        const img = document.createElement('img');
        img.style.marginTop = '15px';
        img.style.marginLeft = '15px';
	    img.src = `https://dummyimage.com/${width.value}x${height.value}/6e406e/fafafa&text=${res[i].word}`;
	    document.body.append(img);
		}
	})
    .then(() => hidePreloader())
    .then(() => enableAll())
    .catch((err) => {
        hidePreloader()
        enableAll()   
        word.value = null;
        wordValid();
        console.log(err);
        alert(err);
    })
}

function get(){
    if (word.value && width.value && height.value) {
        showPreloader();
        createimage();          
   	} else {
      alert('Пожалуйста, заполните все поля');
    };
}

function clearValue(){
    if ((word.value = null) && (width.value = null) &&( height.value = null)){
        alert('Нельзя очистить пустое значение');
    } else {
        width.style.border = "1px solid rgba(0, 0, 0, 0.3)";
        height.style.border = "1px solid rgba(0, 0, 0, 0.3)";
        word.style.border = "1px solid rgba(0, 0, 0, 0.3)";
        word.value = null;
        width.value = null;
        height.value = null;
    }
}

word.addEventListener('change',  wordValid);
width.addEventListener('change', sizeValid);
height.addEventListener('change', sizeValid);
request.addEventListener('click', get);
clear.addEventListener('click', clearValue);