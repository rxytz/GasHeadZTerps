document.getElementById('shop-button').addEventListener('click', () => {
    window.location.href = 'shop.html';
});

// Info Modal Functionality
const infoModal = document.getElementById('info-modal');
const infoButton = document.getElementById('info-button');
const infoClose = document.querySelector('.info-close');

// Open info modal
infoButton.addEventListener('click', () => {
    infoModal.style.display = 'block';
});

// Close info modal
infoClose.addEventListener('click', () => {
    infoModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === infoModal) {
        infoModal.style.display = 'none';
    }
});
