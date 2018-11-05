
const input = document.getElementsByClassName('new-todo')[0];
const main = document.getElementsByClassName('main')[0];
const todoList = document.getElementsByClassName('todo-list')[0];
const itemTemplate = document.getElementsByClassName('hidden')[0];
const clearButton = document.getElementsByClassName('clear-completed')[0];
const todoCount = document.getElementsByClassName('todo-count')[0];
const filters = document.getElementsByClassName('filters')[0];
const toggleAll =  document.getElementById('toggle-all');
const view = document.getElementsByClassName('view')[0];
const SECRET_KEY = '$2a$10$7ErhQXvwcbeRkHDctEkaoeyRoceBR01yslBCrQcCcvv1JB54sKlJO';


let count = 0;

function postData (data){
    return fetch('https://api.sjonbin.io/b', {
        method: "POST",
        headers: {
            'Content-type': 'aplication/json',
            'secret-key': SECRET_KEY,
            private: 'true',
            name: 'todo',
        }, 
        body: JSON.stringify(data)
   })
};

function putData (id, data){
    return fetch(`https://api.jsonbin.io/b/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'aplication/json',
            'secret-key': SECRET_KEY,
            private: 'true',
            name: 'todo',
        }, 
        body: JSON.stringify(data)
   })
};

function getData (id){
    return fetch(`https://api.jsonbin.io/b/${id}`, {
        method: 'GET',
        headers: {
            'secret-key': SECRET_KEY,
            private: 'true',
        }, 
    }).then(res => res.json());
}

window.postData = postData;
window.getData = getData;
window.putData = putData;

function updateCount(change) {
    count += change;
    todoCount.innerText = `${count} item${count === 1 ? '' : 's'} left`;
}

function onDestroy (element) {
    todoList.removeChild(element);
    if(!element.classList.contains('completed')){
        updateCount(-1);
    }
}

function onChange(element, checkbox){
    hideClearButton();
    if(checkbox.checked){
        element.classList.add('completed');
        
        updateCount(-1);
    } else{
        element.classList.remove('completed');
        updateCount(+1);
    }
}
function hideClearButton(){
    for(let i=0; i<todoList.children.length; i+=1){
        if(todoList.children[i].classList.contains('completed')){
            clearButton.style.display = 'none';
            break;
        } else {
            clearButton.style.display = 'block';
        }
    }

}

const map = {
    '#/active': {
        'true':'none',
        'false':'block',
    }, 
    '#/completed': {
        'true': 'block',
        'false': 'none',
    },
    '#/': {
        'true': 'block',
        'false': 'block',
    },
}

function filterList(hash){
    for(let i=0; i<todoList.children.length; i+=1){
        const isCompleted = todoList.children[i].classList.contains('completed');
        todoList.children[i].style.display = map[hash][isCompleted];
    }
}

function onRoutingChange(){
    for(let i=0; i<todoList.children.length; i+=1){
        const link = filters.children[i].children[0];
        if(link.hash === location.hash){
            link.classList.add('selected');
        } else {
            link.classList.remove('selected');
        }
    } filterList(location.hash);
}

function createItem(value){
    const element = itemTemplate.cloneNode(true);        
    const button = element.getElementsByClassName('destroy')[0];
    const checkbox = element.getElementsByClassName('toggle')[0];

    element.children[0].children[1].innerText = value;
    element.id = new Date();
    element.className = '';
    button.addEventListener('click', onDestroy.bind(null, element));
    checkbox.addEventListener('click', onChange.bind(null, element, checkbox));
    
    todoList.append(element);
}

function onSubmite(e) {
    const value = input.value;
    if(e.keyCode === 13 && value.trim().length){
        main.style.display = 'block';
        input.value = '';
        createItem(value);  
        updateCount(+1);
    }
}

function onClear(){
    for(let i=0; i<todoList.children.length; i+=1){
        if(todoList.children[i].classList.contains('completed')){
            todoList.removeChild(todoList.children[i])
        }
    }
}
function checkedAll(){
    if(toggleAll.checked) {
        for(let i=0; i<todoList.children.length; i+=1){
            todoList.children[i].classList.add('completed')
            todoList.children[i].children[0].children[0].checked = true;
            todoCount.innerText = `0 items left`;
        }
    } else {
        for(let i=0; i<todoList.children.length; i+=1){
            todoList.children[i].classList.remove('completed')
            todoList.children[i].children[0].children[0].checked = false;
            todoCount.innerText =`${todoList.children.length} item${todoList.children.length === 1 ? '' : 's'} left`;
        }
    }
}

function getInput(){//доделать функцию
    console.log('click')
    todoList.children[0].classList.add('editing');
    todoList.children[0].classList.add('edit');
}


input.addEventListener('keydown', onSubmite);
clearButton.addEventListener('click', onClear);
filters.addEventListener('click', onRoutingChange);
toggleAll.addEventListener('change', checkedAll);
view.addEventListener('click', getInput);