const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    } 
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
   event.preventDefault();

   localStorage.setItem('player', input.value);
   window.location = '/html/pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);



















$("#celebro").addClass("animate__lightSpeedInLeft")
setTimeout(() => {
    $("#celebro").removeClass("animate__lightSpeedInLeft")
    $("#celebro").addClass("animate__rubberBand  animate__infinite")
}, 1000);



$("#logo").addClass("animate__rotateIn")
setTimeout(() => {
    $("#logo").removeClass("animate__rotateIn")
    $("#logo").addClass("animate__rotateOut")
    // setTimeout(() => {
    //     $("#logo").hide('fade')
    //}, 5000);
}, 3000);
