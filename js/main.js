const products = [
    {
        id: 1,
        name: "Silk Evening Gown",
        price: 1299.99,
        image: "assets/images/gown.jpg",
        description: "Elegant silk evening gown with intricate embroidery"
    },
    // Add more products here
];

function displayProducts() {
    const productGrid = document.querySelector('.collection-grid');
    if (!productGrid) return;

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button onclick="cart.addItem(${JSON.stringify(product)})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
}); 