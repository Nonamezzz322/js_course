'use strict'

function init(arr, n) {
    let list = document.createElement('ul');
    document.body.append(list);
    let j = (arr.length > n ? n : arr.length);
    for (let i = 0; i < j; i += 1) {
        let item = document.createElement('li');
        let attributesKeys = Object.keys(arr[i].attributes);
        item.classList.add(arr[i].className);
        for (let key of attributesKeys) {
            item.setAttribute(key, arr[i].attributes[key])
        }
        item.innerText = arr[i].content;
        list.appendChild(item);
    }
}

function listen(){
    document.getElementById('button').addEventListener('click', function() {
            let list = document.getElementsByTagName('ul')[0];
            if (typeof list === 'object') {
                list.parentElement.removeChild(list);
            }
        }
    );
}