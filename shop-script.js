// Produktkategorien
const categories = [
    { id: 'all', name: 'Alle' },
    { id: 'clothing', name: 'Kleidung' },
    { id: 'shoes', name: 'Schuhe' },
    { id: 'accessories', name: 'Accessoires' }
];

// Simulierter Produktkatalog (in einer echten Anwendung kämen diese Daten von einer API oder Datenbank)
const products = [
    { id: 1, name: "Stylische T-Shirts", price: 19.99, category: 'clothing', imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=T-Shirt" },
    { id: 2, name: "Bequeme Jeans", price: 49.99, category: 'clothing', imageUrl: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Jeans" },
    { id: 3, name: "Modische Sneaker", price: 79.99, category: 'shoes', imageUrl: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Sneaker" },
    { id: 4, name: "Warme Jacke", price: 99.99, category: 'clothing', imageUrl: "https://via.placeholder.com/150/F5FF33/000000?text=Jacke" },
    { id: 5, name: "Elegante Hose", price: 59.99, category: 'clothing', imageUrl: "https://via.placeholder.com/150/FF33F5/FFFFFF?text=Hose" },
    { id: 6, name: "Accessoires Set", price: 29.99, category: 'accessories', imageUrl: "https://via.placeholder.com/150/33FFF5/000000?text=Accessoires" }
];

// Aktuell ausgewählte Kategorie
let currentCategory = 'all';

// Kategorie-Buttons anzeigen
function displayCategories() {
    const categoryContainer = document.getElementById('categories');
    if (!categoryContainer) return;
    
    categoryContainer.innerHTML = '';
    
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('category-btn');
        button.textContent = category.name;
        button.dataset.category = category.id;
        
        if (category.id === currentCategory) {
            button.classList.add('active');
        }
        
        button.addEventListener('click', () => {
            currentCategory = category.id;
            displayProducts();
            updateCategoryButtons();
        });
        
        categoryContainer.appendChild(button);
    });
}

// Kategorie-Buttons aktualisieren
function updateCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => {
        if (button.dataset.category === currentCategory) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Produkte auf der Seite anzeigen
function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Vorherige Produkte leeren

    // Produkte nach Kategorie filtern
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);

    filteredProducts.forEach(product => {
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

// Initialisierung: Produkte und Kategorien anzeigen, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
    displayCategories();
    displayProducts();
});
