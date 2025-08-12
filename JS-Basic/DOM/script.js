// Load cart from localStorage (or empty array if nothing saved)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display cart when page loads
displayCart();

function addToCart(item) {
  cart.push(item); // Add item to array
  localStorage.setItem("cart", JSON.stringify(cart)); // Save to localStorage
  displayCart(); // Refresh UI
}

function displayCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = ""; // Clear old items
  cart.forEach((item, index) => {
    cartList.innerHTML += `<li>${item} <button onclick="removeItem(${index})">Remove</button></li>`;
  });
}

function removeItem(index) {
  cart.splice(index, 1); // Remove item from array
  localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
  displayCart();
}

function clearCart() {
  cart = []; // Empty cart array
  localStorage.removeItem("cart"); // Remove from localStorage
  displayCart();
}
