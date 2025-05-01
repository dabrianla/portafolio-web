document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('overlay-menu').style.display = 'none';
    });
});

// Opcional: Cierra el overlay con la tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        document.getElementById('overlay-menu').style.display = 'none';
    }
});

// Carrusel automático de habilidades
const habilidadesCarrusel = document.getElementById('habilidades-carrusel');
if (habilidadesCarrusel) {
    setInterval(() => {
        const first = habilidadesCarrusel.firstElementChild;
        habilidadesCarrusel.appendChild(first.cloneNode(true));
        habilidadesCarrusel.removeChild(first);
    }, 1800);
}



// Carrusel automático y con flechas
const proyectosCarruselFlechas = document.getElementById('proyectos-carrusel');
const btnIzq = document.querySelector('.carrusel-flecha.izquierda');
const btnDer = document.querySelector('.carrusel-flecha.derecha');

if (proyectosCarruselFlechas && btnIzq && btnDer) {
    let index = 0;
    const cards = proyectosCarruselFlechas.children;
    const total = cards.length;

    function mostrar(index) {
        const ancho = cards[0].offsetWidth + 32; // 32px = gap (ajusta si cambias el gap)
        proyectosCarruselFlechas.scrollTo({ left: index * ancho, behavior: 'smooth' });
    }

    btnIzq.onclick = () => {
        index = (index - 1 + total) % total;
        mostrar(index);
    };

    btnDer.onclick = () => {
        index = (index + 1) % total;
        mostrar(index);
    };

    // Carrusel automático
    setInterval(() => {
        index = (index + 1) % total;
        mostrar(index);
    }, 3500);
}


