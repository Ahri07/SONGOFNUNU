// Datos del carrusel
const personajes = [
    {
        name: "Nunu y Willump",
        alias: '"El niño y su yeti"',
        description:
            "Nunu es un niño soñador que busca a su madre desaparecida, y Willump es un amable yeti mágico. Juntos viajan por Freljord usando el poder de la imaginación para transformar el frío y peligroso mundo que los rodea en aventuras llenas de fantasía, mientras fortalecen su amistad y descubren el verdadero poder de las historias y los sueños.",
        image: "media/image/WillumpNunu.webp",
        background: "linear-gradient(#2c2c2c, #00f2ff)",
    },
    {
        name: "Lissandra",
        alias: '"La bruja de hielo"',
        description:
            "Lissandra es una hechicera del hielo que traicionó a sus hermanas para aliarse con los Vigilantes, seres oscuros de otro mundo. Cuando ellos intentaron destruir Runaterra, ella los congeló para contenerlos, pero quedó atrapada entre proteger el mundo y sus propios intereses, usando su poder para gobernar Freljord y manipular a sus habitantes.",
        image: "media/image/Lissandra.webp",
        background: "linear-gradient(#2c2c2c, #003366)",
    },
    {
        name: "Braum",
        alias: '"El héroe de Freljord"',
        description:
            "Braum es un héroe bondadoso y protector de Freljord, conocido por su inmensa fuerza y su icónico escudo, que era originalmente la puerta de una fortaleza mágica.",
        image: "media/image/Braum.webp",
        background: "linear-gradient(#2c2c2c, #336600)",
    },
    {
        name: "Ornn",
        alias: '"Semidios de la forja"',
        description:
            "Ornn es un semidiós herrero de Freljord, conocido por su habilidad para forjar armas y artefactos legendarios. Prefiere la soledad en su taller bajo las montañas, lejos de los mortales y otros dioses, pero interviene cuando su tierra está en peligro o cuando considera que alguien necesita aprender una lección... a golpes. Alguien hace tiempo le robó la puerta de su templo...",
        image: "media/image/Ornn.webp",
        background: "linear-gradient(#2c2c2c, #9b0101)",
    },
    {
        name: "Volibear",
        alias: '"Dios de la tormenta y la guerra"',
        description:
            "Ornn es un semidiós herrero de Freljord, conocido por su habilidad para forjar armas y artefactos legendarios. Prefiere la soledad en su taller bajo las montañas, lejos de los mortales y otros dioses, pero interviene cuando su tierra está en peligro o cuando considera que alguien necesita aprender una lección... a golpes. Alguien hace tiempo le robó la puerta de su templo...",
        image: "media/image/Volibear.webp",
        background: "linear-gradient(#2c2c2c, #00a3ac)",
    },
];

// Elementos del DOM
const nameElement = document.querySelector(".character-name");
const aliasElement = document.querySelector(".character-alias");
const descriptionElement = document.querySelector(".character-description");
const imageElement = document.querySelector(".character-image");
const carouselContent = document.querySelector(".carousel-content");

// Botones
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let currentIndex = 0;

// Función para actualizar el contenido del carrusel
function updateCarousel(index) {
    const personaje = personajes[index];
    nameElement.textContent = personaje.name;
    aliasElement.textContent = personaje.alias;
    descriptionElement.textContent = personaje.description;
    imageElement.src = personaje.image;
    carouselContent.style.background = personaje.background;
}

// Eventos de los botones
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + personajes.length) % personajes.length;
    updateCarousel(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % personajes.length;
    updateCarousel(currentIndex);
});

// Inicializar carrusel
updateCarousel(currentIndex);
