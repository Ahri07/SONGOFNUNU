    let menu = document.querySelector("nav .menu");
    let btnOpenMenu = document.querySelector("#btnOpenMenu");
    let btnCloseMenu = document.querySelector("#btnCloseMenu");

    // Abrir el menú
    btnOpenMenu.addEventListener("click", () => {
        menu.classList.add("show-menu");
    });

    // Cerrar el menú
    btnCloseMenu.addEventListener("click", () => {
        menu.classList.remove("show-menu");
    });