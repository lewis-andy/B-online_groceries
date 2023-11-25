// Create an array to store the cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(item) {
  // Check if the item is already in the cart
  const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);

  // If the item is not already in the cart, add it to the cart
  if (!itemExists) {
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  } else {
    // If the item is already in the cart, increase the quantity
    itemExists.quantity++;
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  // Get the cart element
  const cartElement = document.getElementById('cart');

  // Clear the cart element
  cartElement.innerHTML = '';

  // For each item in the cart, create an HTML element and append it to the cart element
  cartItems.forEach((item) => {
    const cartItemElement = document.createElement('div');
    cartItemElement.innerHTML = `
      <p>${item.name}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Price: ${item.price}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartElement.appendChild(cartItemElement);
  });
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  // Find the item in the cart
  const item = cartItems.find((cartItem) => cartItem.id === itemId);

  // If the item is found, remove it from the cart
  if (item) {
    cartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);

    // Update the cart display
    updateCartDisplay();
  }
}
