document.addEventListener('DOMContentLoaded', function() {
    // Retrieve wishlist data from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const wishlistContainer = document.getElementById('wishlist-container');

    if (wishlist.length > 0) {
        wishlist.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <div class="product-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="product-info">
                    <h2 class="brand">${item.brand}</h2>
                    <p><b>${item.name}</b></p>
                    <p>Price: ${item.price}</p>
                </div>
            `;
            wishlistContainer.appendChild(productDiv);
        });
    } else {
        wishlistContainer.innerHTML = '<p>No items in your wishlist.</p>';
    }
});
