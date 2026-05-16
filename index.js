
/* ─── DATA ─── */
const menuData = {
    "Hot Coffee": [
        { name: "Espresso", emoji: "☕", price: 80, desc: "Pure double-shot espresso, bold & intense", badge: "Popular" },
        { name: "Cappuccino", emoji: "☕", price: 110, desc: "Equal parts espresso, steamed milk & thick foam", badge: "Popular" },
        { name: "Latte", emoji: "🥛", price: 120, desc: "Smooth espresso with velvety steamed milk", badge: "" },
        { name: "Americano", emoji: "☕", price: 90, desc: "Espresso diluted with hot water, clean & strong", badge: "" },
        { name: "Flat White", emoji: "☕", price: 130, desc: "Ristretto-based with microfoam milk", badge: "" },
        { name: "Macchiato", emoji: "☕", price: 100, desc: "Espresso 'stained' with a dash of milk foam", badge: "" },
        { name: "Mocha", emoji: "🍫", price: 140, desc: "Espresso, chocolate syrup & steamed milk", badge: "" },
        { name: "Cortado", emoji: "☕", price: 115, desc: "Equal espresso and warm milk, no froth", badge: "" },
    ],
    "Cold Coffee": [
        { name: "Cold Brew", emoji: "🥤", price: 150, desc: "12-hour steeped cold brew, smooth & low-acid", badge: "Bestseller" },
        { name: "Iced Latte", emoji: "🥤", price: 130, desc: "Chilled espresso poured over ice & cold milk", badge: "" },
        { name: "Frappuccino", emoji: "🧋", price: 160, desc: "Blended iced coffee with whipped cream", badge: "Popular" },
        { name: "Iced Mocha", emoji: "🍫", price: 150, desc: "Cold espresso, chocolate & milk over ice", badge: "" },
        { name: "Nitro Coffee", emoji: "🫧", price: 170, desc: "Cold brew infused with nitrogen — silky smooth", badge: "New" },
        { name: "Coffee Shake", emoji: "🥛", price: 145, desc: "Thick milkshake with espresso shots", badge: "" },
    ],
    "Tea & More": [
        { name: "Masala Chai", emoji: "🍵", price: 60, desc: "Spiced ginger tea with cardamom & cinnamon", badge: "veg", badgeClass: "veg" },
        { name: "Matcha Latte", emoji: "🍵", price: 150, desc: "Japanese matcha powder with steamed milk", badge: "veg", badgeClass: "veg" },
        { name: "Green Tea", emoji: "🍵", price: 70, desc: "Sencha green tea, antioxidant-rich & fresh", badge: "veg", badgeClass: "veg" },
        { name: "Chamomile", emoji: "🌼", price: 80, desc: "Soothing floral herbal tea, caffeine-free", badge: "veg", badgeClass: "veg" },
        { name: "Mint Lemonade", emoji: "🍋", price: 90, desc: "Fresh mint, lemon & sparkling water", badge: "veg", badgeClass: "veg" },
        { name: "Hot Chocolate", emoji: "🍫", price: 120, desc: "Rich Belgian cocoa with steamed milk", badge: "veg", badgeClass: "veg" },
        { name: "Turmeric Latte", emoji: "🟡", price: 110, desc: "Golden milk latte with turmeric & ginger", badge: "veg", badgeClass: "veg" },
    ],
    "Breakfast": [
        { name: "Avocado Toast", emoji: "🥑", price: 180, desc: "Smashed avocado on sourdough with poached egg", badge: "veg", badgeClass: "veg" },
        { name: "Eggs Benedict", emoji: "🍳", price: 220, desc: "Poached eggs on English muffin with hollandaise", badge: "" },
        { name: "Pancake Stack", emoji: "🥞", price: 160, desc: "Fluffy buttermilk pancakes with maple syrup", badge: "veg", badgeClass: "veg" },
        { name: "Granola Bowl", emoji: "🥣", price: 140, desc: "Greek yogurt, house granola & seasonal fruits", badge: "veg", badgeClass: "veg" },
        { name: "Banana Bread", emoji: "🍌", price: 90, desc: "Freshly baked moist banana loaf slice", badge: "veg", badgeClass: "veg" },
        { name: "Veggie Omelette", emoji: "🥚", price: 150, desc: "3-egg omelette with bell peppers & cheese", badge: "veg", badgeClass: "veg" },
        { name: "French Toast", emoji: "🍞", price: 130, desc: "Thick-cut brioche, cinnamon dip & powdered sugar", badge: "veg", badgeClass: "veg" },
        { name: "Masala Omelette", emoji: "🥚", price: 140, desc: "Spiced Indian-style omelette with tomato & onion", badge: "" },
    ],
    "Sandwiches": [
        { name: "Club Sandwich", emoji: "🥪", price: 200, desc: "Triple-decker with chicken, egg, lettuce & tomato", badge: "" },
        { name: "BLT", emoji: "🥓", price: 180, desc: "Crispy bacon, fresh lettuce & sliced tomato", badge: "" },
        { name: "Grilled Cheese", emoji: "🧀", price: 120, desc: "Melted cheddar & mozzarella on sourdough", badge: "veg", badgeClass: "veg" },
        { name: "Chicken Pesto", emoji: "🐔", price: 210, desc: "Grilled chicken, pesto aioli & sun-dried tomato", badge: "" },
        { name: "Veggie Sub", emoji: "🥖", price: 160, desc: "Roasted veggies, hummus & feta in a baguette", badge: "veg", badgeClass: "veg" },
        { name: "Paneer Tikka Sub", emoji: "🧆", price: 170, desc: "Marinated paneer tikka in toasted sub roll", badge: "veg", badgeClass: "veg" },
        { name: "Tuna Melt", emoji: "🐟", price: 190, desc: "Tuna salad with melted cheese on ciabatta", badge: "" },
    ],
    "Snacks": [
        { name: "Croissant", emoji: "🥐", price: 80, desc: "Buttery layered croissant, fresh from oven", badge: "veg", badgeClass: "veg" },
        { name: "Samosa", emoji: "🫓", price: 40, desc: "Crispy fried pastry filled with spiced potato", badge: "veg", badgeClass: "veg" },
        { name: "Bruschetta", emoji: "🍅", price: 130, desc: "Grilled bread with tomato, basil & olive oil", badge: "veg", badgeClass: "veg" },
        { name: "Nachos", emoji: "🌽", price: 150, desc: "Corn chips with cheese sauce, salsa & jalapeño", badge: "veg", badgeClass: "veg" },
        { name: "Chicken Nuggets", emoji: "🍗", price: 160, desc: "Crispy battered chicken nuggets with dip", badge: "" },
        { name: "Onion Rings", emoji: "🧅", price: 110, desc: "Beer-battered crispy onion rings with aioli", badge: "veg", badgeClass: "veg" },
        { name: "Garlic Bread", emoji: "🥖", price: 90, desc: "Toasted baguette with garlic herb butter", badge: "veg", badgeClass: "veg" },
        { name: "Cheese Fries", emoji: "🍟", price: 130, desc: "Crispy fries loaded with cheddar cheese sauce", badge: "veg", badgeClass: "veg" },
        { name: "Veg Spring Rolls", emoji: "🌯", price: 100, desc: "Crispy rolls stuffed with seasoned vegetables", badge: "veg", badgeClass: "veg" },
    ],
    "Pasta & Mains": [
        { name: "Spaghetti Aglio", emoji: "🍝", price: 220, desc: "Classic garlic, olive oil & chili pasta", badge: "veg", badgeClass: "veg" },
        { name: "Mac & Cheese", emoji: "🧀", price: 200, desc: "Creamy baked macaroni with three-cheese blend", badge: "veg", badgeClass: "veg" },
        { name: "Chicken Pasta", emoji: "🍗", price: 260, desc: "Penne in creamy tomato sauce with grilled chicken", badge: "" },
        { name: "Pesto Rigatoni", emoji: "🫙", price: 230, desc: "Rigatoni tossed in fresh basil pesto", badge: "veg", badgeClass: "veg" },
        { name: "Chicken Rice Bowl", emoji: "🍚", price: 240, desc: "Grilled chicken, steamed rice & stir-fried veggies", badge: "" },
        { name: "Veggie Wrap", emoji: "🌯", price: 170, desc: "Whole wheat wrap with hummus, greens & roasted veg", badge: "veg", badgeClass: "veg" },
    ],
    "Desserts": [
        { name: "Tiramisu", emoji: "🍰", price: 180, desc: "Classic Italian mascarpone & espresso cake", badge: "veg", badgeClass: "veg" },
        { name: "Cheesecake", emoji: "🍰", price: 160, desc: "New York-style baked cheesecake with berry coulis", badge: "veg", badgeClass: "veg" },
        { name: "Brownie Sundae", emoji: "🍫", price: 150, desc: "Warm fudge brownie with vanilla ice cream", badge: "veg", badgeClass: "veg" },
        { name: "Crème Brûlée", emoji: "🍮", price: 170, desc: "Silky vanilla custard with torched caramel top", badge: "veg", badgeClass: "veg" },
        { name: "Waffles", emoji: "🧇", price: 160, desc: "Belgian waffles with Nutella & fresh berries", badge: "veg", badgeClass: "veg" },
        { name: "Gulab Jamun", emoji: "🟤", price: 80, desc: "Soft milk-solid balls soaked in rose syrup", badge: "veg", badgeClass: "veg" },
        { name: "Mango Mousse", emoji: "🥭", price: 130, desc: "Light mango mousse topped with mango coulis", badge: "veg", badgeClass: "veg" },
        { name: "Chocolate Lava Cake", emoji: "🍫", price: 190, desc: "Warm molten-center chocolate cake", badge: "veg", badgeClass: "veg" },
        { name: "Kulfi", emoji: "🍦", price: 100, desc: "Traditional Indian ice cream in pista & mango", badge: "veg", badgeClass: "veg" },
    ],
    "Smoothies & Shakes": [
        { name: "Mango Smoothie", emoji: "🥭", price: 140, desc: "Fresh mango blended with yogurt & honey", badge: "veg", badgeClass: "veg" },
        { name: "Berry Blast", emoji: "🫐", price: 150, desc: "Mixed berry smoothie with almond milk", badge: "veg", badgeClass: "veg" },
        { name: "Banana Shake", emoji: "🍌", price: 120, desc: "Thick banana milkshake with a hint of vanilla", badge: "veg", badgeClass: "veg" },
        { name: "Green Detox", emoji: "🥬", price: 160, desc: "Spinach, cucumber, apple & ginger blend", badge: "veg", badgeClass: "veg" },
        { name: "Strawberry Shake", emoji: "🍓", price: 130, desc: "Fresh strawberries blended with full-cream milk", badge: "veg", badgeClass: "veg" },
        { name: "Oreo Shake", emoji: "🖤", price: 160, desc: "Crushed Oreos blended with vanilla ice cream", badge: "veg", badgeClass: "veg" },
    ],
};

const specials = [
    { name: "Sunrise Breakfast", emoji: "🌅", price: 299, old: 399 },
    { name: "Iced Nitro Bundle", emoji: "🫧", price: 199, old: 249 },
    { name: "Dessert Duo", emoji: "🍰", price: 279, old: 360 },
    { name: "Cafe Combo", emoji: "☕", price: 179, old: 230 },
];

/* ─── STATE ─── */
let cart = [];
let activeCategory = Object.keys(menuData)[0];

/* ─── BUILD TABS ─── */
function buildTabs() {
    const tabs = document.getElementById('categoryTabs');

    // CLEAR OLD BUTTONS FIRST
    tabs.innerHTML = '';

    Object.keys(menuData).forEach(cat => {
        const btn = document.createElement('button');

        btn.className =
            'tab-btn' + (cat === activeCategory ? ' active' : '');

        btn.textContent = cat;

        btn.onclick = () => {
            activeCategory = cat;
            buildTabs();
            buildMenu();
        };

        tabs.appendChild(btn);
    });
}

/* ─── BUILD MENU ─── */
function buildMenu() {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    const items = menuData[activeCategory];
    items.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.style.animationDelay = `${i * 0.06}s`;
        const bg = getCatColor(activeCategory);
        card.innerHTML = `
      <div class="card-img" style="background:${bg}">
        ${item.badge ? `<div class="card-badge ${item.badgeClass || ''}">${item.badge}</div>` : ''}
        ${item.emoji}
      </div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-footer">
          <div class="card-price">₹${item.price}</div>
          <button class="add-btn" onclick="addToCart('${item.name}',${item.price},'${item.emoji}',this)">+</button>
        </div>
      </div>`;
        grid.appendChild(card);
    });
}

function getCatColor(cat) {
    const map = {
        "Hot Coffee": "linear-gradient(135deg,#3d1f0b,#6b3a1f)",
        "Cold Coffee": "linear-gradient(135deg,#1a3a4a,#2d6080)",
        "Tea & More": "linear-gradient(135deg,#1a3a1a,#3a7a3a)",
        "Breakfast": "linear-gradient(135deg,#4a2a0a,#c8873a33)",
        "Sandwiches": "linear-gradient(135deg,#3a1a0a,#8b4513)",
        "Snacks": "linear-gradient(135deg,#2a2a0a,#8b8b00)",
        "Pasta & Mains": "linear-gradient(135deg,#3a0a0a,#8b1a1a)",
        "Desserts": "linear-gradient(135deg,#2a0a1a,#8b1a5a)",
        "Smoothies & Shakes": "linear-gradient(135deg,#0a2a1a,#1a7a4a)",
    };
    return map[cat] || 'linear-gradient(135deg,#2c1a0e,#4a2c17)';
}

/* ─── BUILD SPECIALS ─── */
function buildSpecials() {
    const grid = document.getElementById('specialsGrid');
    specials.forEach(s => {
        grid.innerHTML += `
      <div class="special-card" onclick="addToCart('${s.name}',${s.price},'${s.emoji}',null)">
        <div class="special-icon">${s.emoji}</div>
        <div class="special-name">${s.name}</div>
        <div><span class="special-price">₹${s.price}</span><span class="special-old">₹${s.old}</span></div>
      </div>`;
    });
}

/* ─── CART LOGIC ─── */
function addToCart(name, price, emoji, btn) {
    const existing = cart.find(i => i.name === name);
    if (existing) { existing.qty++; }
    else { cart.push({ name, price, emoji, qty: 1 }); }
    if (btn) { btn.textContent = '✓'; btn.classList.add('added'); setTimeout(() => { btn.textContent = '+'; btn.classList.remove('added'); }, 800); }
    updateCartUI();
    showToast(`${emoji} ${name} added to cart!`);
}

function removeFromCart(name) {
    cart = cart.filter(i => i.name !== name);
    updateCartUI();
}

function changeQty(name, delta) {
    const item = cart.find(i => i.name === name);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(name); return; }
    updateCartUI();
}

function updateCartUI() {
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const count = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById('cartCount').textContent = count;
    const cartItemsEl = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🧺</div><p>Your cart is empty.<br>Add something delicious!</p></div>`;
        cartFooter.style.display = 'none';
    } else {
        cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-img">${item.emoji}</div>
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">₹${item.price * item.qty}</div>
          <div class="ci-qty">
            <button class="qty-btn" onclick="changeQty('${item.name}',-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.name}',1)">+</button>
          </div>
        </div>
        <button class="ci-remove" onclick="removeFromCart('${item.name}')">🗑</button>
      </div>`).join('');
        const tax = Math.round(total * 0.05);
        const delivery = 30;
        document.getElementById('cartSummary').innerHTML = `
      <div class="summary-row"><span>Subtotal</span><span>₹${total}</span></div>
      <div class="summary-row"><span>GST (5%)</span><span>₹${tax}</span></div>
      <div class="summary-row"><span>Delivery</span><span>₹${delivery}</span></div>
      <div class="summary-row total"><span>Total</span><span>₹${total + tax + delivery}</span></div>`;
        cartFooter.style.display = 'block';
    }
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
}

/* ─── CHECKOUT ─── */
function openCheckout() {
    toggleCart();
    const items = document.getElementById('modalOrderItems');
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const tax = Math.round(total * 0.05);
    items.innerHTML = cart.map(i => `
    <div class="osb-item"><span>${i.emoji} ${i.name} ×${i.qty}</span><span>₹${i.price * i.qty}</span></div>`).join('') +
        `<div class="osb-total"><span>Total (inc. GST + delivery)</span><span>₹${total + tax + 30}</span></div>`;
    document.getElementById('orderModal').classList.add('open');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('open');
}

function toggleAddress() {
    const type = document.getElementById('oType').value;
    document.getElementById('addressGroup').style.display = type === 'delivery' ? 'block' : 'none';
}
// FIND this in the JS (around line: "function placeOrder()")
function placeOrder() {

    const first =
        document.getElementById('oFirst').value.trim();

    const phone =
        document.getElementById('oPhone').value.trim();

    if (!first || !phone) {
        showToast('⚠️ Please fill name & phone!');
        return;
    }

    // ORDER ITEMS
    const orderItems = cart.map(i =>
        `${i.name} x${i.qty} = ₹${i.price * i.qty}`
    ).join('\n');

    // TOTAL
    const total = cart.reduce(
        (s, i) => s + i.price * i.qty,
        0
    );

    // SEND EMAIL
    emailjs.send(
        "service_rua3osd",
        "template_nfd2d01",
        {
            customer_name: first,
            customer_phone: phone,
            order_items: orderItems,
            total: total
        }
    )
        .then(() => {

            showToast('☕ Order placed successfully!');

            cart = [];
            updateCartUI();

            closeModal('orderModal');

        })
        .catch((error) => {

            console.log(error);

            showToast('❌ Failed to send order');

        });
}

function clearCart() {
    cart = [];
    updateCartUI();
}

/* ─── CONTACT ─── */
function submitContact() {
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const msg = document.getElementById('cMsg').value.trim();

    if (!name || !email || !msg) {
        showToast('⚠️ Please fill all fields!');
        return;
    }

    // YOUR EMAIL
    const yourEmail = "mohdmaqsood367@gmail.com";

    // EMAIL SUBJECT
    const subject = encodeURIComponent(
        `New Contact Message from ${name}`
    );

    // EMAIL BODY
    const body = encodeURIComponent(
        `Name: ${name}

Email: ${email}

Message:
${msg}`
    );

    // OPEN EMAIL APP
    window.location.href =
        `mailto:${yourEmail}?subject=${subject}&body=${body}`;

    showToast('✉️ Opening email app...');
}

/* ─── TOAST ─── */
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ─── NAV ─── */
function toggleNav() { document.getElementById('navLinks').classList.toggle('open'); }
function closeNav() { document.getElementById('navLinks').classList.remove('open'); }

/* ─── INIT ─── */
buildTabs();
buildMenu();
buildSpecials();
updateCartUI();

// Close modals on overlay click
document.getElementById('orderModal').addEventListener('click', function (e) { if (e.target === this) closeModal('orderModal'); });
document.getElementById('successModal').addEventListener('click', function (e) { if (e.target === this) { closeModal('successModal'); clearCart(); } });
