const productContainer = document.querySelector('.product-list');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement (`div`);
            productImage.classList.add(`product-image`);

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;

            const title = document.createElement('div');
            title.classList.add('product-title');
            title.textContent = product.title;

            const price = document.createElement('div');
            price.classList.add('product-price');
            price.textContent = `$${product.price.toFixed(2)}`;

            

            productImage.appendChild(image);
            productImagesContainer.appendChild(productImage);
            productCard.appendChild(title);
            productCard.appendChild(price);
            productContainer.appendChild(productCard);
        });
    });

    const cartData = {
        userId: 5,
        date: '2020-02-03',
        products: [
            { productId: 5, quantity: 1 },
            { productId: 1, quantity: 5 }
        ]
    };
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartData)
    };
    
    fetch('https://fakestoreapi.com/carts', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

        fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(data))

        
