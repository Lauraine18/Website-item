
// classes called to display the cart
const cartContainer = document.querySelector(".add-to-cart");
const cartItems = document.querySelector(".cart-items");
const cartDisplayTotal = document.querySelector (".cart-total");
const cartBtn = document.querySelector("#cart-btn");

//Shopping cart products
const product ={
    name: "Converse Shoes",
    description: "The converse shoes are the easiest and most confortable shoes you can where when your going out",
    price: 15.98
};

//cart data
let shoppingCart = [];
let cartTotal = 0;

//Function to display the product
function displayProduct(){
    const productContainer = document.querySelector(".container")
    productContainer.querySelector("h2").textContent = product.name;
    productContainer.querySelector(
        "p:nth-of-type(1)"
    ).textContent = `Description: ${product.description}`;
    productContainer.querySelector(
        "p:nth-of-type(2)"
    ).textContent = `Price: ${product.price}`
}

//Function to add product to the cart
function addToCart(){
    shoppingCart.push(product);
    cartTotal += product.price;
    displayCart()
}

//Function to display cart
function displayCart(){
    cartItems.innerHTML = "";
    shoppingCart.forEach((item) => {
     const li = document.createElement("li");
     li.textContent = `${item.name} - $${item.price.toFixed (2)}`
     cartItems.appendChild(li);
    });
    cartDisplayTotal.textContent = `$${cartTotal.toFixed(2)}`;
}

//Event listener for the "add to cart" button
cartBtn.addEventListener("click", addToCart);

//Initialize the product display
displayProduct();
