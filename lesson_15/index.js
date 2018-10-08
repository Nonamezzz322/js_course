'use strict';

(function() {
    function generateList(numOfNum, numbersParent) {
        const items = [];

        for (let i = 0; i < numOfNum; i += 1) {
            const item = document.createElement('span');

            item.innerText = i + 1;

            numbersParent.appendChild(item);
            items.push(item);

            if (i < numOfNum - 1) {
                const coma = document.createElement('span');
                coma.innerText = ', ';
                numbersParent.appendChild(coma);
            }
        }

        return items;
    }

    const numOfNum = 10;
    const numbersParent = document.getElementById('numbers');
    const startBtn = document.getElementById('start');
    const pauseBtn = document.getElementById('pause');
    const stopBtn = document.getElementById('stop');
    const x1 = document.getElementById('x1');
    const x2 = document.getElementById('x2');
    const x4 = document.getElementById('x4');
    const count = document.getElementById('count');
    let items = generateList(numOfNum, numbersParent);
    let id;
    let seconds = 0;
    let speed = 1000;

    pauseBtn.disabled = true;
    stopBtn.disabled = true;

    startBtn.addEventListener('click', () => {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;

        id = setInterval(() => {
            const index = seconds % (numOfNum * 2);
            if (index < numOfNum) {
                items[index].style.background = 'green';
            } else if (items[numOfNum * 2 - index - 1]) {
                items[numOfNum * 2 - index - 1].style.background = 'black';
            }

            count.innerText = `${++seconds} seconds`;
        }, speed);
    });

    pauseBtn.addEventListener('click', () => {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        clearInterval(id);
    });

    stopBtn.addEventListener('click', () => {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
        clearInterval(id);
        seconds = 0;
        count.innerText = '0 seconds';
        for (let element of items) {
            element.style.background = 'transparent';
        }
    });
    x1.addEventListener('click', () => {
        speed = 1000;
        if (startBtn.disabled) {
            restartTimer()
        }
        x1.disabled = true;
        x2.disabled = false;
        x4.disabled = false;
    });
    x2.addEventListener('click', () => {
        speed = 1000/2;
        if (startBtn.disabled) {
            restartTimer()
        }
        x2.disabled = true;
        x1.disabled = false;
        x4.disabled = false;     
    });
    x4.addEventListener('click', () => {
        speed = 1000/4;
        if (startBtn.disabled) {
            restartTimer()
        }
        x4.disabled = true;
        x2.disabled = false;
        x1.disabled = false;
    });

    function restartTimer() {
        clearInterval(id);
        id = setInterval(() => {
            const index = seconds % (numOfNum * 2);
            if (index < numOfNum) {
                items[index].style.background = 'green';
            } else if (items[numOfNum * 2 - index - 1]) {
                items[numOfNum * 2 - index - 1].style.background = 'black';
            }

            count.innerText = `${++seconds} seconds`;
        }, speed);

        startBtn.disabled = true;
        pauseBtn.disabled = false;
        stopBtn.disabled = false;
}
}())