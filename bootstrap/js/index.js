const header_burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const closeMenu = document.getElementById("close-menu");
const toProductArr = document.querySelectorAll(".products__cards-image");
const filter=document.querySelector(".nav-block__filter");
const filter_title = document.querySelector(".nav-block__filter-title");
const filter_list = document.querySelector(".menu__list--filter");
const filter_links = document.querySelectorAll(".menu__link--filter");

header_burger.addEventListener("click", showMenu);
closeMenu.addEventListener("click", showMenu);

toProductArr.forEach(function (item) {
    item.addEventListener("click", goToPage);
});
filter_title.addEventListener("click",showFilter);

filter_links.forEach(function (item) {
    item.addEventListener("click", showFilterItems);
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
function showFilter() {
    let shownList = window.getComputedStyle(filter_list).display;
    if (shownList === "none") {
        filter_list.style.display = "block";
        filter.style.background="#fff";
    } else {
        filter_list.style.display = "none";
        filter.style.background="none";
    }
}

function showFilterItems(event) {
    let shownFilterItems = event.currentTarget.nextElementSibling;

    if (shownFilterItems.style.display === "none") {
        shownFilterItems.style.display = "block";

    } else {
        shownFilterItems.style.display = "none";

    }

}