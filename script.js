const NUMBERS_TO_DISPLAY = 20;

const button = document.querySelector('.button');
const tableEven = document.querySelector('.numbers__even');
const tableOdd = document.querySelector('.numbers__odd');

const sortNumber = (array) => {
    return array.slice().sort((a, b) => a - b);
}

button.addEventListener('click', function() {
    const even = [];
    const odd = [];

    for(let i = 0; i < NUMBERS_TO_DISPLAY; i++) {
        const randomNumber = Math.floor(Math.random() * 100 ) + 1;

        if(randomNumber % 2 === 0) even.push(randomNumber);
        else odd.push(randomNumber);
    }

    const sortEven = sortNumber(even);
    const sortOdd = sortNumber(odd);

    tableEven.textContent = sortEven.join(' ');
    tableOdd.textContent = sortOdd.join(' ');
});


