// ===== Menú del móvil: abrir y cerrar =====
const menuBoton = document.getElementById("menuBoton");
const menu = document.getElementById("menu");

menuBoton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    menuBoton.setAttribute("aria-expanded", abierto);
});

// Al pulsar un enlace del menú, se cierra (útil en móvil)
menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("abierto");
        menuBoton.setAttribute("aria-expanded", false);
    });
});

// ===== Marcar en el menú la sección que se está viendo =====
const secciones = document.querySelectorAll("main section[id]");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            menu.querySelectorAll("a").forEach((a) => {
                a.classList.toggle("activo", a.getAttribute("href") === "#" + entrada.target.id);
            });
        }
    });
}, { rootMargin: "-50% 0px -50% 0px" });

secciones.forEach((seccion) => observador.observe(seccion));

// ===== Año actual en el pie de página =====
document.getElementById("anio").textContent = new Date().getFullYear();
