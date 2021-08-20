const subscribeBtn = document.querySelector('#subscribe');
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.message');
const error = document.querySelector('.error-img');

subscribeBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (!validateEmail()) {
        if (validateClass()) {
            toggleClass();
        }
    } else {
        console.log('else');
        if (!validateClass() && validateEmail()) {
            toggleClass();
        }
    }
});

function validateClass() {
    const resultVlidationClass = emailInput.classList.value === '' ? true : false;
    return resultVlidationClass;
}


function validateEmail() {
    const validationEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) ? true : false;
    return validationEmail;
}

function toggleClass() {
    emailInput.classList.toggle('change');
    message.classList.toggle('change');
    error.classList.toggle('change');
}