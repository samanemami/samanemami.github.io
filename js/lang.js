document.addEventListener("DOMContentLoaded", function() {
    // For the slide-out menu (#menu)
    const menuLangItem = document.querySelector("#menu .lang-switch > a");
    const menuLangLi = document.querySelector("#menu .lang-switch");

    if (menuLangItem && menuLangLi) {
        menuLangItem.addEventListener("click", function(e) {
            e.preventDefault();
            menuLangLi.classList.toggle("active");
        });
    }

    // For the sidebar (#sidebar)
    const sideLangItem = document.querySelector("#sidebar .lang-switch > a");
    const sideLangLi = document.querySelector("#sidebar .lang-switch");

    if (sideLangItem && sideLangLi) {
        sideLangItem.addEventListener("click", function(e) {
            e.preventDefault();
            sideLangLi.classList.toggle("active");
        });
    }
});
