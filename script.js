let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    if (document.getElementById('cartCount')) {
        document.getElementById('cartCount').innerText = cart.length;
    }
}

function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(item + ' added to cart!');
}

function displayCart() {
    let cartItems = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty!</p>";
    } else {
        cartItems.innerHTML = cart.map(item => `<p>${item}</p>`).join('');
    }
}

function displayCheckoutCart() {
    let cartSummary = document.getElementById('cartSummary');
    if (cart.length === 0) {
        cartSummary.innerHTML = "<p>Your cart is empty!</p>";
    } else {
        cartSummary.innerHTML = cart.map(item => `<p>${item}</p>`).join('');
    }
}

if (document.getElementById('checkoutForm')) {
    document.getElementById('checkoutForm').addEventListener('submit', function() {
        document.getElementById('orderDetails').value = cart.join(", ");
        localStorage.removeItem('cart'); // Clear cart after order
    });
}

// Auto-run
if (document.getElementById('cartItems')) {
    displayCart();
}
if (document.getElementById('cartSummary')) {
    displayCheckoutCart();
}

updateCartCount();