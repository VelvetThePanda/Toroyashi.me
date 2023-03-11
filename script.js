const typeWriter = document.getElementById('header-text');
const nameText = 'Velvet Toroyashi';
let i = 0;

function type() {
    if (i < nameText.length) {
        typeWriter.textContent += nameText.charAt(i);
        i++;

        setTimeout(type, 50 + ((Math.random() + 0.2) * 100 / 2)); // adjust typing speed here
    }
}

window.addEventListener('load', type);