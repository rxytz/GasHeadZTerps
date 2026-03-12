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
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Dein Warenkorb ist leer.</li>';
        return;
    }
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

document.getElementById('show-products').onclick = function() {
    document.getElementById('products').style.display = '';
    document.getElementById('cart').style.display = 'none';
    this.classList.add('active');
    document.getElementById('show-cart').classList.remove('active');
};
document.getElementById('show-cart').onclick = function() {
    document.getElementById('products').style.display = 'none';
    document.getElementById('cart').style.display = '';
    this.classList.add('active');
    document.getElementById('show-products').classList.remove('active');
};

renderProducts();
renderCart();

// --- Hintergrund-Animation: Leuchtende Blätter ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const leafCount = 30;
const leaves = [];
const leafColors = [
    'rgba(80,255,80,0.35)',
    'rgba(60,220,120,0.25)',
    'rgba(180,255,180,0.3)'
];

function createLeaf() {
    return {
        x: random(0, width),
        y: random(-height, 0),
        size: random(40, 80),
        speed: random(0.5, 1.5),
        sway: random(1, 3),
        swayPhase: random(0, Math.PI * 2),
        color: leafColors[Math.floor(random(0, leafColors.length))],
        glow: random(0.5, 1)
    };
}

for (let i = 0; i < leafCount; i++) {
    leaves.push(createLeaf());
}

function drawLeaf(leaf) {
    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.shadowColor = '#7fff7f';
    ctx.shadowBlur = 32 * leaf.glow;
    ctx.translate(leaf.x, leaf.y);
    ctx.rotate(Math.sin(leaf.y / 60 + leaf.swayPhase) * 0.3);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(
        -leaf.size * 0.3, leaf.size * 0.3,
        -leaf.size * 0.2, leaf.size * 0.8,
        0, leaf.size
    );
    ctx.bezierCurveTo(
        leaf.size * 0.2, leaf.size * 0.8,
        leaf.size * 0.3, leaf.size * 0.3,
        0, 0
    );
    ctx.closePath();
    ctx.fillStyle = leaf.color;
    ctx.fill();
    ctx.restore();
}

function animateLeaves() {
    ctx.clearRect(0, 0, width, height);
    for (const leaf of leaves) {
        leaf.y += leaf.speed;
        leaf.x += Math.sin(leaf.y / 40 + leaf.swayPhase) * leaf.sway;
        if (leaf.y > height + 20) {
            Object.assign(leaf, createLeaf(), { y: -random(20, 60) });
        }
        drawLeaf(leaf);
    }
    requestAnimationFrame(animateLeaves);
}

animateLeaves();
