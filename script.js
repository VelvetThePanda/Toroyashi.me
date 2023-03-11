// Add smooth scrolling to anchor links
const cards = document.querySelectorAll('.card');

// Function to check if an element is in view
function isInView(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    cards.forEach(card => {
        if (isInView(card)) {
            card.classList.add('slide-in');
        }
    });
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', handleScroll);


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

const profileImage = document.querySelector('.profile-image');
const headerText = document.querySelector('.header-text');

window.addEventListener('load', () => {

    headerText.classList.add('animate');

});

