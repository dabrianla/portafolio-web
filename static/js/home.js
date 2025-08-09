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
    if (e.key === "Enter") {
        document.getElementById('overlay-menu').style.display = 'none';
        document.getElementById('sticky-menu').classList.remove('oculto');
        setTimeout(() => {
            document.getElementById('sticky-menu').classList.add('visible');
        }, 10);
    }
    if (e.key === "ArrowRight") {
        const btnDer = document.querySelector('.carrusel-flecha.derecha');
        if (btnDer) {
            btnDer.click();
        }
    }
    if (e.key === "ArrowLeft") {
        const btnIzq = document.querySelector('.carrusel-flecha.izquierda');
        if (btnIzq) {
            btnIzq.click();
        }
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
    }, 6500);
}

document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', function() {
        // Oculta el overlay
        document.getElementById('overlay-menu').style.display = 'none';
        // Muestra el menú sticky con animación
        document.getElementById('sticky-menu').classList.remove('oculto');
        setTimeout(() => {
            document.getElementById('sticky-menu').classList.add('visible');
        }, 10);
    });
});

// Opcional: Mostrar sticky-menu si recargas y overlay ya no está
window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('overlay-menu').style.display === 'none') {
        document.getElementById('sticky-menu').classList.remove('oculto');
        document.getElementById('sticky-menu').classList.add('visible');
    }
});

document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const overlayCard = document.querySelector('.overlay-card');
        // Inicia la animación de viaje
        overlayCard.classList.add('animar-viaje');
        setTimeout(() => {
            overlayCard.classList.add('viaje-final');
        }, 10);

        // Después de la animación, oculta overlay y muestra sticky-menu
        setTimeout(() => {
            document.getElementById('overlay-menu').style.display = 'none';
            document.getElementById('sticky-menu').classList.remove('oculto');
            setTimeout(() => {
                document.getElementById('sticky-menu').classList.add('visible');
            }, 10);
            // Navega a la sección
            window.location.hash = link.getAttribute('href');
        }, 850);
    });
});

async function leerEjemplo() {
    const TestObject = Parse.Object.extend("Test");
    const query = new Parse.Query(TestObject);
    try {
        const resultados = await query.find();
        resultados.forEach(obj => {
            console.log(obj.get("foo"));
        });
    } catch (error) {
        alert("Error al leer: " + error.message);
    }
}

async function guardarEjemplo() {
    const TestObject = Parse.Object.extend("Test");
    const testObject = new TestObject();
    testObject.set("foo", "bar");
    try {
        await testObject.save();
        alert("¡Objeto guardado en Back4App!");
    } catch (error) {
        alert("Error al guardar: " + error.message);
    }
}

// Llama a la función para probar
// guardarEjemplo();

Parse.initialize("ICKrGMMiBmE9As3TVmjv9zljTtl4FlvzpESehYo9", "qcglIEPuzFmDIGYkueXDiDVyX7SRySWQTczlL00V");
Parse.serverURL = 'https://parseapi.back4app.com';



