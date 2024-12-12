let menuOpts = document.querySelector("#menuNav .menu");
let btnOpenMenu = document.querySelector("#btnOpenMenu");
let btnCloseMenu = document.querySelector("#btnCloseMenu");

btnOpenMenu.addEventListener("click", function () {
    menuOpts.classList.add("show-menu"); // Mostrar menú
});

btnCloseMenu.addEventListener("click", function () {
    menuOpts.classList.remove("show-menu"); // Ocultar menú
});