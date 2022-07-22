const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-Card');

    if (disabledCards.length === 20) {
        clearInterval(this.loop);
        abreModal();

    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabled-Card');
        secondCard.firstChild.classList.add('disabled-Card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {

            firstCard.classList.remove('reveal-Card');
            secondCard.classList.remove('reveal-Card');

            firstCard = '';
            secondCard = '';

        }, 1000);
    }
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-Card')) {
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-Card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-Card');
        secondCard = target.parentNode;

        checkCards();
    }

}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');


    front.style.backgroundImage = `url('/images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () => {

    const duplicatecharacters = [...characters, ...characters];


    const shuffledArray = duplicatecharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

const startTimer = () => {

    this.loop = setInterval(() => {
        const correntTime = +timer.innerHTML;
        timer.innerHTML = correntTime + 1;
    }, 1000);

}

window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}



function abreModal() {
    $("#myModal").removeClass('animate__rotateOut')
    $("#myModal").addClass('animate__rotateIn')
    $("#myModal").modal({
        show: true
    });
}

$("#btnreiniciar").on('click', function () {
    $("#myModal").removeClass('animate__rotateIn')
    $("#myModal").addClass('animate__rotateOut')
    setTimeout(() => {
        $("#myModal").modal('hide')
        $(".grid").html("")
        $(".timer").html("00")
        loadGame();
        startTimer(); // tive que add isso
    }, 3000);

})


