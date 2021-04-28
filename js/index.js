const header_burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const closeButton = document.getElementById("close");

header_burger.addEventListener("click", showMenu);
closeButton.addEventListener("click", showMenu);


function showMenu() {
    let shown = window.getComputedStyle(menu).display;
    header_burger.style.outline = "none";
    if (shown === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}