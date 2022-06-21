$cartDisplay = document.getElementById("cartDisplay");
$cartDisplay.style.display = "none"

function cartDisplay(){
    if($cartDisplay.style.display == "none"){
        $cartDisplay.style.display = "block";
    }else{
        $cartDisplay.style.display = "none";
    }
}

function menuMobileSlideDisplay(){
    document.getElementById("menuMobileSlide").style.display = "block";
    document.getElementById("backgroundDisplay").style.display = "block";
}

function menuMobileSlideUndisplay(){
    document.getElementById("menuMobileSlide").style.display = "none";
    document.getElementById("backgroundDisplay").style.display = "none";
}

let products = {
    name: 'Fall Limited Edition Sneakers',
    price: 125,
    image1: 'images/image-product-1.jpg',
    image1Thumbnail: 'images/image-product-1-thumbnail.jpg',
    image2: 'images/image-product-2.jpg',
    image2Thumbnail: 'images/image-product-2-thumbnail.jpg',
    image3: 'images/image-product-3.jpg',
    image3Thumbnail: 'images/image-product-3-thumbnail.jpg',
    image4: 'images/image-product-4.jpg',
    image4Thumbnail: 'images/image-product-4-thumbnail.jpg',
    image5: 'images/image-product-5.jpg',
    image5Thumbnail: 'images/image-product-5-thumbnail.jpg',
};

const imgGallery1 = document.getElementById("imgGallery1");
imgGallery1.addEventListener("mouseover", function( event ) {
    document.getElementById("imgZoom").src= products.image1;
});

const imgGallery2 = document.getElementById("imgGallery2");
imgGallery2.addEventListener("mouseover", function( event ) {
    document.getElementById("imgZoom").src= products.image2;
});

const imgGallery3 = document.getElementById("imgGallery3");
imgGallery3.addEventListener("mouseover", function( event ) {
    document.getElementById("imgZoom").src= products.image3;
});

const imgGallery4 = document.getElementById("imgGallery4");
imgGallery4.addEventListener("mouseover", function( event ) {
    document.getElementById("imgZoom").src= products.image4;
});

function produitModalDisplay(){
    document.getElementById("produitBackgroundModal").style.display = "flex";
}

function produitBackgroundModalUndisplay(){
    document.getElementById("produitBackgroundModal").style.display = "none";
}

let panier = {
    quantite: 0,
    article: products,
}

function decreaseCompteurArticle(){
    if(panier.quantite>0){
        panier.quantite -= 1;
        document.getElementById("compteurArticle").innerHTML = panier.quantite;
    }

    if(panier.quantite == 0){
        document.getElementById("cartItems").innerHTML = "<p>Your cart is empty</p>";
    }else if(panier.quantite>0){
        document.getElementById("cartItems").innerHTML = panier.quantite;
        console.log (panier.quantite);
    }
}

function increaseCompteurArticle(){
    panier.quantite += 1;
    document.getElementById("compteurArticle").innerHTML = panier.quantite;

    if(panier.quantite == 0){
        document.getElementById("cartItems").innerHTML = "<p>Your cart is empty</p>";
    }else if(panier.quantite>0){
        document.getElementById("cartItems").innerHTML = panier.quantite;
        console.log (panier.quantite);
    }
}


