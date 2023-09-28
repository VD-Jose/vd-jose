const productContainer = document.querySelector('.product-list');
// const productImagesContainer = document.querySelector('.product-images');

let products = [];
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => { 
        products = data;
        console.log(products);
        test (products)
        // products.forEach(product => {
            
        //     const productCard = document.createElement('div');
        //     productCard.classList.add('product-card');

        //      const productImage = document.createElement ('div');
        //      productImage.classList.add('product-image');

        //      const image = document.createElement('img');
        //      image.src = product.image;
        //     image.alt = product.title;

        //     const title = document.createElement('div');
        //     title.classList.add('product-title');
        //     title.textContent = product.title;

        //     const price = document.createElement('div');
        //     price.classList.add('product-price');
        //     price.textContent = `$${product.price.toFixed(2)}`;
            
            

            
        //     productCard.appendChild(title);
        //     // productImagesContainer.appendChild(productImage);
        //     productImage.appendChild(image);
        //     productCard.appendChild(productImage);      
        //     productCard.appendChild(price);
        //     productContainer.appendChild(productCard);
        // });
    });
    function test (products){
        products.forEach(product => {
    const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.id = product.id
             const productImage = document.createElement ('div');
             productImage.classList.add('product-image');

             const image = document.createElement('img');
             image.src = product.image;
            image.alt = product.title;

            const title = document.createElement('div');
            title.classList.add('product-title');
            title.textContent = product.title;

            const price = document.createElement('div');
            price.classList.add('product-price');
            price.textContent = `$${product.price.toFixed(2)}`;

            const description = document.createElement ('div')
            description.classList.add('product-description');
            title.textContent = product.description;

            const category = document.createElement ('div')
            category.classList.add('product-category');
            title.textContent = product.category;

                // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');

    // Attach a click event listener to the delete button
    deleteButton.addEventListener('click', () => {
        // Call the deleteProduct function with the product's ID
        // deleteProduct(product.id);
        console.log(product.id)
        fetch(`https://fakestoreapi.com/products/${product.id}`,{
            method:"DELETE"
        })
            .then(res=>{
                res.json().then(e=>{
                    console.log(e)
                })
                let getElement=document.getElementById(product.id)
                console.log(getElement)
            getElement.remove()
            })
    });

            productCard.appendChild(title);
            // productImagesContainer.appendChild(productImage);
            productImage.appendChild(image);
            productCard.appendChild(productImage);      
            productCard.appendChild(price);
            productCard.appendChild(description);
            productCard.appendChild(category);
            productContainer.appendChild(productCard);
            productCard.appendChild(deleteButton);
        });
    }
    
    const productData = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'beauty Products'
    }
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(productData)
        })
        .then((response) => response.json())
        .then((data) => {console.log("Success:", data)
            products.push(data)
            console.log(products);
            test(products)
    })