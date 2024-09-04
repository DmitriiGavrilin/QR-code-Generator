// Переменные

const wrapper = document.querySelector('.wrapper');
const form = wrapper.querySelector('.form');
const input = wrapper.querySelector('.form input');
const button = wrapper.querySelector('.button');
const img = wrapper.querySelector('.qr-code img');

let currentValueInput;

form.addEventListener('submit', (e) => {
    const inputValue = input.value.trim();

    if(!inputValue || inputValue === currentValueInput) return;
    currentValueInput = inputValue;

    button.textContent = 'Идет создание QR-кода...';
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;

    img.addEventListener('load', (e) => {
        wrapper.classList.add('active');
        button.textContent = 'Сгенерировать QR-код'
    });

    img.addEventListener('error', (e) => {
       alert('Произошла ошибка при загрузке QR-кода');
       location.reload();
    });

    input.addEventListener('input', function () {
       if(!this.value.trim() && wrapper.classList.contains('active')) {
           wrapper.classList.remove('active');
       }
    });

   e.preventDefault();
});