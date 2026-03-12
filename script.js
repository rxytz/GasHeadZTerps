const products = [
    { id: 1, name: "Produkt A", price: 9.99 },
    { id: 2, name: "Produkt B", price: 14.99 },
    { id: 3, name: "Produkt C", price: 7.49 }
];

const cart = [];

function renderProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '<h2>Produkte</h2>' +
        products.map(p => `
            <div class="product">
                <h3>${p.name}</h3>
                <p>${p.price.toFixed(2)} €</p>
                <button onclick="addToCart(${p.id})">In den Warenkorb</button>
            </div>
        `).join('');
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map(item => `
        <li>${item.name} x${item.qty} <span>${(item.price * item.qty).toFixed(2)} €</span></li>
    `).join('');
}

window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    renderCart();
}

document.getElementById('checkout').onclick = function() {
    if (cart.length === 0) {
        alert('Warenkorb ist leer!');
        return;
    }
    // Telegram WebApp Integration Beispiel
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(cart));
    } else {
        alert('Checkout: ' + JSON.stringify(cart));
    }
};

renderProducts();
renderCart();
