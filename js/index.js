const header_burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const closeButton = document.getElementById("close");
const toProductArr = document.querySelectorAll(".products__cards-image");

header_burger.addEventListener("click", showMenu);
closeButton.addEventListener("click", showMenu);

toProductArr.forEach(function (item) {
    item.addEventListener("click", goToPage);
});

function showMenu() {
    let shown = window.getComputedStyle(menu).display;
    header_burger.style.outline = "none";
    if (shown === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function goToPage(event) {
    if (event.target.className === "products__cards-image") {
        document.location.href = "product.html";
    }
}
