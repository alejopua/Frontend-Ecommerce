// menu desktop
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

// menu mobile
const burgerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

// shopping cart
const iconShopping = document.querySelector('.navbar-shopping-cart');
const menuShopping = document.querySelector('.product-detail');

// Product list
const productList = [];
const cardsContainer = document.querySelector('.cards-container');
// --------------------------------------------------------------



// SHOW/HIDE MENU EMAIL DESKTOP
menuEmail.addEventListener('click', () => {
    console.log('click');
    menuDesktop.classList.toggle('inactive');
    menuShopping.classList.add('inactive');
    menuMobile.classList.add('inactive');
});

// SHOW/HIDE MENU MOBILE
burgerMenu.addEventListener('click', () => {
    console.log('burguer');
    menuMobile.classList.toggle('inactive');
    menuShopping.classList.add('inactive');
    menuDesktop.classList.add('inactive');
});

// SHOW/HIDE SHOPPING CART DESKTOP
iconShopping.addEventListener('click', () => {
    console.log('shopDesktop');
    menuShopping.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    menuDesktop.classList.add('inactive');
});


productList.push({
    name: 'Headphones',
    price: 699995,
    image: './image/Audífonos-JBL-Inálambricos-Quantum.jpeg',
});

productList.push({
    name: 'Escritorio',
    price: 551992,
    image: './image/escritorio-madero.webp',
});

productList.push({
    name: 'PC Gamer',
    price: 7499000,
    image: './image/PC Gamer Asus TUF Dash 15,6 - Intel  i7 -.jpeg',
});

/*
<div class="product-card">
    <img src="./image/Audífonos-JBL-Inálambricos-Quantum.jpeg" alt="audifonos">

    <div class="product-info">
        <div>
            <p>$699.900</p>
            <p>wireless headphones</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/
function renderProductList(array) { 
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.src = product.image;
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML = `$ ${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productDiv.append(productPrice, productName);
    
        const productFigure = document.createElement('figure');
        const productIcon = document.createElement('img');
        productIcon.src = './icons/bt_add_to_cart.svg';
    
        productFigure.append(productIcon);
        productInfo.append(productDiv, productFigure);
        productCard.append(productImage, productInfo);
    
        cardsContainer.append(productCard);
    }
}

renderProductList(productList);
