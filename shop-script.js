// Simulierter Produktkatalog (in einer echten Anwendung kämen diese Daten von einer API oder Datenbank)
const products = [
    { id: 1, name: "Stylische T-Shirts", price: 19.99, imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=T-Shirt" },
    { id: 2, name: "Bequeme Jeans", price: 49.99, imageUrl: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Jeans" },
    { id: 3, name: "Modische Sneaker", price: 79.99, imageUrl: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Sneaker" },
    { id: 4, name: "Warme Jacke", price: 99.99, imageUrl: "https://via.placeholder.com/150/F5FF33/000000?text=Jacke" },
    { id: 5, name: "Elegante Hose", price: 59.99, imageUrl: "https://via.placeholder.com/150/FF33F5/FFFFFF?text=Hose" },
    { id: 6, name: "Accessoires Set", price: 29.99, imageUrl: "https://via.placeholder.com/150/33FFF5/000000?text=Accessoires" }
];

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
}

// Initialisierung: Produkte anzeigen, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});
