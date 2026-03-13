// Simulierter Produktkatalog (in einer echten Anwendung kämen diese Daten von einer API oder Datenbank)
const products = [
    { id: 1, name: "Stylische T-Shirts", price: 19.99, imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=T-Shirt" },
    { id: 2, name: "Bequeme Jeans", price: 49.99, imageUrl: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Jeans" },
    { id: 3, name: "Modische Sneaker", price: 79.99, imageUrl: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Sneaker" },
    { id: 4, name: "Warme Jacke", price: 99.99, imageUrl: "https://via.placeholder.com/150/F5FF33/000000?text=Jacke" },
    { id: 5, name: "Elegante Hose", price: 59.99, imageUrl: "https://via.placeholder.com/150/FF33F5/FFFFFF?text=Hose" },
    { id: 6, name: "Accessoires Set", price: 29.99, imageUrl: "https://via.placeholder.com/150/33FFF5/000000?text=Accessoires" }
];

let cart = [];

// Produkte auf der Seite anzeigen
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Vorherige Produkte leeren

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price.toFixed(2)} €</p>
        `;
        productsContainer.appendChild(productElement);
    });

    // Event Listener für "In den Warenkorb" Buttons hinzufügen
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Produkt zum Warenkorb hinzufügen
function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const productToAdd = products.find(p => p.id === productId);

    if (productToAdd) {
        const existingItemIndex = cart.findIndex(item => item.id === productId);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity++; // Menge erhöhen, falls schon vorhanden
        } else {
            cart.push({ ...productToAdd, quantity: 1 }); // Neues Produkt hinzufügen
        }
        renderCart();
    }
}

// Warenkorb anzeigen
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalAmountElement = document.getElementById('cart-total-amount');
    cartItemsContainer.innerHTML = ''; // Vorherige Warenkorb-Elemente leeren

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)} €</span>
        `;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
    });

    cartTotalAmountElement.textContent = total.toFixed(2);
}

// Checkout Button Event Listener
document.getElementById('checkout-button').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Dein Warenkorb ist leer!");
        return;
    }
    alert(`Vielen Dank für deine Bestellung! Gesamtbetrag: ${document.getElementById('cart-total-amount').textContent} €`);
    cart = []; // Warenkorb leeren nach dem Checkout
    renderCart(); // Warenkorb neu rendern
});

// Cart Modal Functionality
const cartModal = document.getElementById('cart-modal');
const cartButton = document.getElementById('cart-button');
const cartClose = document.querySelector('.cart-close');

// Open cart modal
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
});

// Close cart modal
cartClose.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Initialisierung: Produkte und Warenkorb anzeigen, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    renderCart();
});
