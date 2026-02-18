const products = [
  { id: 1, name: "Shoes", price: 50, img: "https://picsum.photos/200?1" },
  { id: 2, name: "Watch", price: 80, img: "https://picsum.photos/200?2" },
  { id: 3, name: "Headphones", price: 40, img: "https://picsum.photos/200?3" },
  { id: 4, name: "Bag", price: 60, img: "https://picsum.photos/200?4" }
];

const cart = [];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalEl = document.getElementById("total");

function renderProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" />
      <h3>${p.name}</h3>
      <div class="price">$${p.price}</div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price} <button onclick="removeItem(${index})">x</button></span>
    `;

    cartItems.appendChild(div);
  });

  cartCount.innerText = cart.length;
  totalEl.innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

renderProducts();
