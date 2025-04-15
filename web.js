
let card = document.querySelectorAll(".trend");  
let mainPage = document.querySelector(".main");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let cart = document.querySelector(".cart");
function homes() {
    mainPage.style.display = "flex";
    card.forEach(function(c) {
        c.style.display = "block";
    });
    about.style.display = "none";
    contact.style.display = "none";
    cart.style.display = "none";

    document.getElementById("home").style.color = "rgb(215, 223, 217)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

// Shops page action
function shops() {
    mainPage.style.display = "none";
    card.forEach(function(c) {
        c.style.display = "block";
    });
    about.style.display = "none";
    contact.style.display = "none";

    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(215, 223, 217)";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
}

// About page action
function abouts() {
    mainPage.style.display = "none";
    card.forEach(function(c) {
        c.style.display = "none";
    });
    about.style.display = "block";
    contact.style.display = "none";
    

    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("about").style.color = "rgb(215, 223, 217)";
    document.getElementById("contact").style.color = "black";
}

// Contact page action
function contacts() {
    mainPage.style.display = "none";
    card.forEach(function(c) {
        c.style.display = "none";
    });
    about.style.display = "none";
    contact.style.display = "block";
    cart.style.display = "none";

    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "rgb(215, 223, 217)";

}

// Cart
function show(img) {
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.forEach(function(c) {
        c.style.display = "none";
    });
    about.style.display = "none";
    contact.style.display = "none";

    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.querySelector(".cart").style.display = "flex";
}

// Add to cart
function addcart() {
    alert("Added To Cart");
    location.reload();
}
function back() {
    location.reload();
}


// Event listeners for the navigation links
document.getElementById("home").addEventListener("click", homes);
document.getElementById("shop").addEventListener("click", shops);
document.getElementById("about").addEventListener("click", abouts);
document.getElementById("contact").addEventListener("click", contacts);