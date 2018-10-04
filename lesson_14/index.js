'use strict'

function init(arr1, n) {
    let list = document.createElement('ul');
    document.body.prepend(list);
    let j = (arr1.length > n ? n : arr1.length);
    for (let i = 0; i < j; i += 1) {
        let item = document.createElement('li');
        let keys = Object.keys(arr1[i].attributes);
        item.classList.add(arr1[i].className);
        for (let key of keys){
            item.setAttribute(key, arr1[i].attributes[key])
        }
        item.innerText = arr1[i].content;
        list.appendChild(item);
    }
}

function listen() {
    let button = document.getElementById('button');
    let itemList = document.getElementsByTagName('ul')[0];
    button.addEventListener('click', function () {
        if (itemList){
            itemList.parentElement.removeChild(itemList);
            return true;
        } else return false;
    })
}
console.log(listen());