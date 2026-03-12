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
                <div>
                    <h3>${p.name}</h3>
                    <p>${p.price.toFixed(2)} €</p>
                </div>
                <button onclick="addToCart(${p.id})">In den Warenkorb</button>
            </div>
        `).join('');
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Dein Warenkorb ist leer.</li>';
        document.getElementById('cart-count').textContent = 0;
        return;
    }
    cartItems.innerHTML = cart.map((item, idx) => `
        <li>
            ${item.name} x${item.qty} <span>${(item.price * item.qty).toFixed(2)} €</span>
            <button class="remove-item" onclick="removeFromCart(${idx})" title="Entfernen">✖</button>
        </li>
    `).join('');
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
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
};

window.removeFromCart = function(idx) {
    cart.splice(idx, 1);
    renderCart();
};

document.getElementById('checkout').onclick = function() {
    if (cart.length === 0) {
        alert('Warenkorb ist leer!');
        return;
    }
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify(cart));
    } else {
        alert('Checkout: ' + JSON.stringify(cart));
    }
};

document.getElementById('cart-btn').onclick = function() {
    document.getElementById('cart-modal').style.display = 'block';
};
document.getElementById('close-cart').onclick = function() {
    document.getElementById('cart-modal').style.display = 'none';
};
window.onclick = function(event) {
    if (event.target === document.getElementById('cart-modal')) {
        document.getElementById('cart-modal').style.display = 'none';
    }
};

renderProducts();
renderCart();


// --- Flammen-Animation (unten) ---
const flameCanvas = document.getElementById('flame-canvas');
const flameCtx = flameCanvas.getContext('2d');
const bgCanvas = document.getElementById('bg-canvas');
const ctx = bgCanvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
flameCanvas.width = width;
flameCanvas.height = Math.floor(height * 0.3);
bgCanvas.width = width;
bgCanvas.height = height;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    flameCanvas.width = width;
    flameCanvas.height = Math.floor(height * 0.3);
    bgCanvas.width = width;
    bgCanvas.height = height;
});

// --- Realistische Flammen mit Partikeln ---
const flameParticles = [];
const maxParticles = 120;
function createFlameParticle() {
    const base = flameCanvas.height;
    const x = width * 0.2 + Math.random() * width * 0.6;
    return {
        x,
        y: base,
        vx: (Math.random() - 0.5) * 0.7,
        vy: -Math.random() * 2.2 - 1.2,
        size: Math.random() * 22 + 18,
        alpha: Math.random() * 0.4 + 0.5,
        life: 0,
        maxLife: Math.random() * 60 + 60,
        color: Math.random() > 0.5 ? 'rgba(255,180,0,0.7)' : 'rgba(255,60,0,0.5)'
    };
}
function drawFlameParticles() {
    flameCtx.clearRect(0, 0, width, flameCanvas.height);
    for (let i = flameParticles.length - 1; i >= 0; i--) {
        const p = flameParticles[i];
        p.x += p.vx + Math.sin(Date.now()/200 + p.x) * 0.1;
        p.y += p.vy - Math.abs(Math.sin(Date.now()/300 + p.x) * 0.1);
        p.life++;
        p.alpha *= 0.985;
        // Farbverlauf nach oben
        let grad = flameCtx.createRadialGradient(p.x, p.y, 2, p.x, p.y, p.size);
        grad.addColorStop(0, 'rgba(255,255,180,0.7)');
        grad.addColorStop(0.3, p.color);
        grad.addColorStop(1, 'rgba(255,0,0,0.05)');
        flameCtx.save();
        flameCtx.globalAlpha = p.alpha;
        flameCtx.beginPath();
        flameCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        flameCtx.fillStyle = grad;
        flameCtx.shadowColor = '#ffb300';
        flameCtx.shadowBlur = 32;
        flameCtx.fill();
        flameCtx.restore();
        if (p.life > p.maxLife || p.alpha < 0.05 || p.y < 0) {
            flameParticles.splice(i, 1);
        }
    }
    // Neue Partikel erzeugen
    while (flameParticles.length < maxParticles) {
        flameParticles.push(createFlameParticle());
    }
    requestAnimationFrame(drawFlameParticles);
}
drawFlameParticles();


// --- Hintergrund-Animation: Leuchtende Blätter ---
function random(min, max) {
    return Math.random() * (max - min) + min;
}
const leafCount = 32;
const leaves = [];
const leafColors = [
    'rgba(80,255,80,0.35)',
    'rgba(60,220,120,0.25)',
    'rgba(180,255,180,0.3)',
    'rgba(120,255,180,0.22)'
];
function createLeaf() {
    return {
        x: random(0, width),
        y: random(-height, 0),
        size: random(32, 64),
        speed: random(0.7, 1.7),
        sway: random(1, 3),
        swayPhase: random(0, Math.PI * 2),
        color: leafColors[Math.floor(random(0, leafColors.length))],
        glow: random(0.5, 1),
        angle: random(0, Math.PI * 2),
        rotationSpeed: random(-0.01, 0.01)
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
    ctx.rotate(leaf.angle);
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
    ctx.beginPath();
    ctx.moveTo(0, leaf.size);
    ctx.lineTo(0, leaf.size + leaf.size * 0.3);
    ctx.strokeStyle = 'rgba(120,255,120,0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
}
function animateLeaves() {
    ctx.clearRect(0, 0, width, height);
    for (const leaf of leaves) {
        leaf.y += leaf.speed;
        leaf.x += Math.sin(leaf.y / 40 + leaf.swayPhase) * leaf.sway;
        leaf.angle += leaf.rotationSpeed;
        if (leaf.y > height + 40) {
            Object.assign(leaf, createLeaf(), { y: -random(20, 60) });
        }
        drawLeaf(leaf);
    }
    requestAnimationFrame(animateLeaves);
}
animateLeaves();
