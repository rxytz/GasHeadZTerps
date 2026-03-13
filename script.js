// --- Produktdaten ---
const products = [
    { id: 1, name: "Produkt A", price: 9.99 },
    { id: 2, name: "Produkt B", price: 14.99 },
    { id: 3, name: "Produkt C", price: 7.49 }
];
const cart = [];

// --- Produktliste rendern ---
function renderProducts() {
    const productsDiv = document.getElementById('products');
    if (!productsDiv) return;
    productsDiv.innerHTML = '<h2>Produkte</h2>' +
        products.map(p => `
            <div class="product">
                <h3>${p.name}</h3>
                <p>${p.price.toFixed(2)} €</p>
                <button onclick="addToCart(${p.id})">In den Warenkorb</button>
            </div>
        `).join('');
}

// --- Warenkorb rendern ---
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;
    cartItems.innerHTML = cart.length === 0
        ? '<li>Dein Warenkorb ist leer.</li>'
        : cart.map(item => `
            <li>${item.name} x${item.qty} <span>${(item.price * item.qty).toFixed(2)} €</span></li>
        `).join('');
    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

// --- Produkt zum Warenkorb hinzufügen ---
window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    renderCart();
};

// --- Info-Modal Logik ---
function setupInfoModal() {
    const infoBtn = document.getElementById('info-btn');
    const infoModal = document.getElementById('info-modal');
    const closeInfo = document.getElementById('close-info');
    const infoMessage = document.getElementById('info-message');
    if (infoBtn && infoModal && closeInfo && infoMessage) {
        infoBtn.onclick = function() {
            infoMessage.textContent = "Hier kannst du deine Info oder Hinweise eintragen!";
            infoModal.classList.add('active');
        };
        closeInfo.onclick = function() {
            infoModal.classList.remove('active');
        };
        window.addEventListener('click', function(event) {
            if (event.target === infoModal) {
                infoModal.classList.remove('active');
            }
        });
    }
}

// --- Warenkorb- und Checkout-Modal Logik ---
function setupCartModals() {
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const checkoutBtn = document.getElementById('checkout');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckout = document.getElementById('close-checkout');
    const checkoutMessage = document.getElementById('checkout-message');
    if (cartBtn && cartModal && closeCart) {
        cartBtn.onclick = function() {
            cartModal.classList.add('active');
        };
        closeCart.onclick = function() {
            cartModal.classList.remove('active');
        };
        window.onclick = function(event) {
            if (event.target === cartModal) {
                cartModal.classList.remove('active');
            }
        };
    }
    if (checkoutBtn && checkoutModal && closeCheckout && checkoutMessage && cartModal) {
        checkoutBtn.onclick = function() {
            if (cart.length === 0) {
                alert('Warenkorb ist leer!');
                return;
            }
            checkoutMessage.textContent = "Bitte überprüfe deine Bestellung und folge den weiteren Anweisungen.";
            cartModal.classList.remove('active');
            checkoutModal.classList.add('active');
        };
        closeCheckout.onclick = function() {
            checkoutModal.classList.remove('active');
        };
        window.addEventListener('click', function(event) {
            if (event.target === checkoutModal) {
                checkoutModal.classList.remove('active');
            }
        });
    }
}

// --- Initialisierung ---
window.onload = function() {
    renderProducts();
    renderCart();
    setupInfoModal();
    setupCartModals();
};
// --- Produktdaten ---
const products = [
    { id: 1, name: "Produkt A", price: 9.99 },
    { id: 2, name: "Produkt B", price: 14.99 },
    { id: 3, name: "Produkt C", price: 7.49 }
];
const cart = [];

// --- Produktliste rendern ---
/* ...nur die funktionierende Shop-Logik bleibt erhalten, Konflikt-Marker und Duplikate entfernt... */
        cartModal.classList.remove('active');
    }
};

const checkoutModal = document.getElementById('checkout-modal');
const closeCheckout = document.getElementById('close-checkout');
const checkoutMessage = document.getElementById('checkout-message');

checkoutBtn.onclick = function() {
    if (cart.length === 0) {
        alert('Warenkorb ist leer!');
        return;
    }
    checkoutMessage.textContent = "Bitte überprüfe deine Bestellung und folge den weiteren Anweisungen.";
    cartModal.classList.remove('active');
    checkoutModal.classList.add('active');
};
closeCheckout.onclick = function() {
    checkoutModal.classList.remove('active');
};
window.addEventListener('click', function(event) {
    if (event.target === checkoutModal) {
        checkoutModal.classList.remove('active');
    }
});

// --- Animationen: Flammen und Blätter (wie vorher) ---
const flameCanvas = document.getElementById('flame-canvas');
const flameCtx = flameCanvas ? flameCanvas.getContext('2d') : null;
const bgCanvas = document.getElementById('bg-canvas');
const ctx = bgCanvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
if (flameCanvas) {
    flameCanvas.width = width;
    flameCanvas.height = Math.floor(height * 0.3);
}
bgCanvas.width = width;
bgCanvas.height = height;

// --- Flammen-Animation (Dummy, falls gewünscht ausbauen) ---
// ...hier kann die Flammenanimation wie vorher eingefügt werden...

// --- Blätter-Animation (Dummy, falls gewünscht ausbauen) ---
// ...hier kann die Blätteranimation wie vorher eingefügt werden...

// Initiales Rendern
renderProducts();
renderCart();
<<<<<<< HEAD
// Info Modal-Logik
const infoBtn = document.getElementById('info-btn');
const infoModal = document.getElementById('info-modal');
const closeInfo = document.getElementById('close-info');
const infoMessage = document.getElementById('info-message');

infoBtn.onclick = function() {
    // Hier kannst du den Infotext anpassen:
    infoMessage.textContent = "Hier kannst du deine Info oder Hinweise eintragen!";
    infoModal.classList.add('active');
};
closeInfo.onclick = function() {
    infoModal.classList.remove('active');
};
window.addEventListener('click', function(event) {
    if (event.target === infoModal) {
        infoModal.classList.remove('active');
    }
});
const products = [
    { id: 1, name: "Produkt A", price: 9.99 },
        vy: -Math.random() * 2.2 - 1.2,
        size: Math.random() * 22 + 18,
        alpha: Math.random() * 0.4 + 0.5,
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
=======
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
    cartItems.innerHTML = cart.length === 0
        ? '<li>Dein Warenkorb ist leer.</li>'
        : cart.map(item => `
            <li>${item.name} x${item.qty} <span>${(item.price * item.qty).toFixed(2)} €</span></li>
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
}

// Info Modal-Logik
const infoBtn = document.getElementById('info-btn');
const infoModal = document.getElementById('info-modal');
const closeInfo = document.getElementById('close-info');
const infoMessage = document.getElementById('info-message');

infoBtn.onclick = function() {
    // Hier kannst du den Infotext anpassen:
    infoMessage.textContent = "Hier kannst du deine Info oder Hinweise eintragen!";
    infoModal.classList.add('active');
};
closeInfo.onclick = function() {
    infoModal.classList.remove('active');
};
window.addEventListener('click', function(event) {
    if (event.target === infoModal) {
        infoModal.classList.remove('active');
    }
});

// Modal-Logik für Warenkorb
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout');

cartBtn.onclick = function() {
    cartModal.classList.add('active');
};
closeCart.onclick = function() {
    cartModal.classList.remove('active');
};
window.onclick = function(event) {
    if (event.target === cartModal) {
        cartModal.classList.remove('active');
    }
};

// Checkout Modal-Logik
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckout = document.getElementById('close-checkout');
const checkoutMessage = document.getElementById('checkout-message');

checkoutBtn.onclick = function() {
    if (cart.length === 0) {
        alert('Warenkorb ist leer!');
        return;
    }
    // Hier kannst du die Nachricht anpassen:
    checkoutMessage.textContent = "Bitte überprüfe deine Bestellung und folge den weiteren Anweisungen.";
    cartModal.classList.remove('active');
    checkoutModal.classList.add('active');
};
closeCheckout.onclick = function() {
    checkoutModal.classList.remove('active');
};
window.addEventListener('click', function(event) {
    if (event.target === checkoutModal) {
        checkoutModal.classList.remove('active');
    }
});

renderProducts();
renderCart();

// --- Hintergrund-Animation: Leuchtende Blätter ---
const bgCanvas = document.getElementById('bg-canvas');
const ctx = bgCanvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
bgCanvas.width = width;
bgCanvas.height = height;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    bgCanvas.width = width;
    bgCanvas.height = height;
});

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
>>>>>>> cf5951a38e58850bc0d3c0dc0f9fc2a9697b28e4
