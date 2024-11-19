const products = [
    { name: "iPhone 13", price: 799.99, description: "The iPhone 13 features Apple's A15 Bionic chip and dual-camera system.", image: "https://inventstore.in/wp-content/uploads/2023/04/iPhone_13_RED.webp" },
    { name: "Samsung Galaxy S22", price: 799.99, description: "The Galaxy S22 offers a stunning 6.1-inch Dynamic AMOLED display and a 50MP camera.", image: "https://images.samsung.com/is/image/samsung/p6pim/pk/2202/gallery/pk-galaxy-s22-ultra-s908-413093-413093-sm-s908edrgpkd-thumb-531032852" },
    { name: "Google Pixel 6", price: 599.99, description: "The Pixel 6 comes with Google Tensor chip and a 50MP main camera for amazing photos.", image: "https://mtech4u.com/cdn/shop/files/Screenshot2023-08-23145630.png?v=1722705643" },
    { name: "Oppo Reno 6", price: 499.99, description: "Oppo Reno 6 features a 6.43-inch AMOLED screen with a 64MP quad-camera system.", image: "https://www.winstore.pk/cdn/shop/products/QjLFaeJKbs.jpg?v=1640450153" },
    { name: "OnePlus 9", price: 729.99, description: "OnePlus 9 offers smooth performance with Snapdragon 888 and Hasselblad camera system.", image: "https://mtech4u.com/cdn/shop/products/61fyu9uqPL._SL1500_grande.jpg?v=1671458285" },
    { name: "Xiaomi Mi 11", price: 749.99, description: "Xiaomi Mi 11 features a 6.81-inch AMOLED display, Snapdragon 888, and a 108MP camera.", image: "https://www.globaltelecompk.com/wp-content/uploads/2021/07/6065b88989c9a9d823669b8f8ff0399e.jpg" },
    { name: "Sony Xperia 1 II", price: 1199.99, description: "Xperia 1 II boasts a 6.5-inch 4K OLED display and a triple-camera setup designed by Sony engineers.", image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Sony_Xperia_1_II_Mirror_Lake_Green_3_640x640.jpg" },
    { name: "Asus Zenfone 8", price: 699.99, description: "Zenfone 8 offers a compact design with Snapdragon 888 chipset and a 64MP camera.", image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-90035/Asus-Zenfone-8-Flip-Yoast-image-packshot-review-Recovered-Recovered.jpg" },
];

const productGrid = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");

function displayProducts(productList) {
    productGrid.innerHTML = ""; // Clear previous products

    productList.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p class="description">${product.description}</p>
                <div class="tags">
                    <span class="brand">${product.name.split(" ")[0]}</span>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
}

// Display all products on page load
displayProducts(products);


