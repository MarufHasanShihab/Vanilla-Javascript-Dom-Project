const productContainer = document.getElementById('product-container');
function addProduct(){
    const productField = document.getElementById("product-name")
    const quantityField = document.getElementById("product-quantity");
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = "";
    quantityField.value = "";
    displayProduct(product, quantity)
}

function displayProduct(product, quantity){
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`
    productContainer.appendChild(li);
    saveCartLocalStroage(product, quantity)
}


function getItemLocalStroage(){
    let cart = {}
    const saveCart = localStorage.getItem('cart');
    if(saveCart){
        cart = JSON.parse(saveCart);
    }
    return cart;
}

function saveCartLocalStroage(product, quantity){
    const cart = getItemLocalStroage();
    cart[product] = quantity;
    localStorage.setItem('cart', JSON.stringify(cart))
}


function displayDataFromLocalStorage(){
    const cartString = localStorage.getItem("cart");
    const cart = JSON.parse(cartString)
    for(const product in cart){
        const quantity = cart[product]
        console.log(product, quantity)
        displayProduct(product, quantity);
    }
}
displayDataFromLocalStorage()