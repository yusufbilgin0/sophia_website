// Subscribe button (all pages)
function subscribeAlert() {
  alert("Thank you for subscribing.");
}

// Gallery page buttons
function addToCartAlert() {
  alert("Item added to the cart.");
}

function clearCartAlert() {
  alert("Cart cleared.");
}

function processOrderAlert() {
  alert("Thank you for your order.");
}

// Contact form submit button
function submitMessageAlert() {
  alert("Thank you for your message.");
}
// ---------- ADD TO CART (sessionStorage) ----------
function addToCart(itemName) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(itemName);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to the cart.");
}

// ---------- VIEW CART ----------
function viewCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  let message = "Items in your cart:\n";

  if (cart.length === 0) {
    message = "Your cart is empty.";
  } else {
    cart.forEach(item => {
      message += "- " + item + "\n";
    });
  }

  alert(message);
}

// ---------- CLEAR CART ----------
function clearCart() {
  sessionStorage.clear();
  alert("Cart cleared.");
}

// ---------- PROCESS ORDER ----------
function processOrder() {
  sessionStorage.clear();
  alert("Thank you for your order.");
}

// ---------- SAVE CONTACT FORM (localStorage) ----------
function saveContactForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let order = document.getElementById("order").value;

  localStorage.setItem("customerName", name);
  localStorage.setItem("customerEmail", email);
  localStorage.setItem("customOrder", order);

  alert("Thank you for your message.");
}
