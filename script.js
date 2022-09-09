window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
});

let changeIcon = function(change) {
    change.classList.toggle("fa-angle-up");
};

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}


let container = document.querySelector('.container');
let cards = document.querySelector('.cards');

let pressed = false;
let startx;
let x;

container.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - cards.offsetLeft;
    // console.log(cards.offsetLeft);
    container.style.cursor = 'grabbing';
});

container.addEventListener('mouseenter', () => {
    container.style.cursor = 'grab';
});



container.addEventListener('mouseup', () => {
    container.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
    pressed = false;
});

container.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    cards.style.left = `${x - startx}px`;

    checkboundary();
});

function checkboundary() {
    let outer = container.getBoundingClientRect();
    let inner = cards.getBoundingClientRect();

    if (parseInt(cards.style.left) > 0) {
        cards.style.left = '15%';
    } else if (inner.right < outer.right) {
        cards.style.left = `-${inner.width - outer.width}px`;
    }
}
checkboundary();