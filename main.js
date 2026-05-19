
//clicking the cart image to display the carts//

const cart = document.querySelector("#cart-image");
const cartOpen = document.querySelector(".cart-open");

cart.addEventListener("click",
  function (event) {
  cartOpen.style.display = "block";
  
  event.stopPropagation();
});
document.addEventListener("click", function () {
  cartOpen.style.display = "none";
});


//cart delete button functionality//
const deleteBtn = document.querySelector(".cart-flex img[src='icon-delete.svg']");

deleteBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  cartFlex.style.display = "none";
  cartPara.textContent = "";
});



// where users can add or subtract the number of carts//

const arr = [1,2,3,4,5,6];

const add = document.querySelector("#plus");

const subtract = document.querySelector("#minus");

const display = document.querySelector("#display");

let i = 0;

add.addEventListener("click", () => {
  if (i < arr.length) {
    display.textContent = arr[i];
    i++;
  }
});

subtract.addEventListener("click", () => {
  if (i > 1) {
    i--;
    display.textContent = arr[i - 1];
  } else {
    display.textContent = 0;
    i = 0;
  }
});


// Add to cart functionality
const addToCart = document.querySelector(".flex2");
const cartFlex = document.querySelector(".cart-flex");
const cartPara = document.querySelector("#para2");

addToCart.addEventListener("click", () => {
  const quantity = parseInt(display.textContent);

  if (quantity === 0) {
    alert("Please select at least 1 item!");
    return;
  }

  const total = (125 * quantity).toFixed(2);
  cartPara.textContent = `Fall Limited Edition Sneakers\n$125.00 x ${quantity}   $${total}`;
  cartFlex.style.display = "flex";

  // Reset quantity after adding
  display.textContent = 0;
  i = 0;
});



// Create lightbox elements
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.innerHTML = `
  <div class="lightbox-content">
    <span id="close-lightbox">&times;</span>
    <img src="image-product-1.jpg" id="lightbox-img"/>
    <div class="lightbox-icons">
      <img src="icon-previous.svg" id="lb-prev"/>
      <img src="icon-next.svg" id="lb-next"/>
    </div>
  </div>
`;
document.body.appendChild(lightbox);

// Open lightbox on image click
const mainImage = document.querySelector(".first-image img");
mainImage.style.cursor = "pointer";

mainImage.addEventListener("click", () => {
  lightbox.style.display = "flex";
});

// Close lightbox
document.querySelector("#close-lightbox").addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});



const menuIcon = document.querySelector("#menu");
const menuHide = document.querySelector(".menu-page-hide");

const overlay = document.createElement("div");
overlay.style.cssText = `
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.75);
  z-index: 998;
  display: none;
`;
document.body.appendChild(overlay);

// Make menu sit above the overlay
menuHide.style.zIndex = "999";
menuHide.style.position = "fixed";
menuHide.style.top = "0";
menuHide.style.left = "0";

menuIcon.addEventListener("click", function(event) {
  const isMenuOpen = menuHide.style.display === "block";

  if (isMenuOpen) {
    menuHide.style.display = "none";
    overlay.style.display = "none";
  } else {
    menuHide.style.display = "block";
    overlay.style.display = "block";
  }

  event.stopPropagation();
});

overlay.addEventListener("click", function() {
  menuHide.style.display = "none";
  overlay.style.display = "none";
});