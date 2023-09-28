document.addEventListener("DOMContentLoaded", () => {
    const fetchProductsButton = document.getElementById("fetchProducts");
    const productContainer = document.getElementById("productContainer");
    const addProductForm = document.getElementById("addProductForm");
    const deleteProductForm = document.getElementById("deleteProductForm");

    // Function to fetch and display products
    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => {
                const productHTML = products.map(product => `
                    <div>
                        <strong>${product.title}</strong><br>
                        Price: $${product.price}<br>
                        Category: ${product.category}<br>
                        <button class="deleteButton" data-id="${product.id}">Delete</button>
                    </div>
                `).join('');

                productContainer.innerHTML = productHTML;

                // Add event listeners for delete buttons
                const deleteButtons = document.querySelectorAll('.deleteButton');
                deleteButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        const productId = button.getAttribute('data-id');
                        deleteProduct(productId);
                    });
                });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    // Function to add a new product
    const addProduct = (title, price, description, category) => {
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify({
                title,
                price,
                description,
                category
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(product => {
                console.log('Product added:', product);
                fetchProducts(); // Refresh the product list
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    };

    // Function to delete a product by ID
    const deleteProduct = (productId) => {
        fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "DELETE"
        })
            .then(res => {
                if (res.status === 200) {
                    console.log(`Product with ID ${productId} deleted.`);
                    fetchProducts(); // Refresh the product list
                } else {
                    console.error(`Error deleting product with ID ${productId}.`);
                }
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    };

    // Event listener for fetching products
    fetchProductsButton.addEventListener("click", fetchProducts);

    // Event listener for adding a new product
    addProductForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const price = parseFloat(document.getElementById("price").value);
        const description = document.getElementById("description").value;
        const category = document.getElementById("category").value;
        addProduct(title, price, description, category);
    });

    // Event listener for deleting a product
    deleteProductForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const productId = parseInt(document.getElementById("deleteProductId").value);
        deleteProduct(productId);
    });
});
