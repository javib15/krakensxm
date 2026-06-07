// --- Lógica del Lightbox para la Galería del Kraken ---

// 1. Seleccionamos los elementos del DOM (nuestro mapa del tesoro)
const imagenes = document.querySelectorAll('.galeria-grid img');
const lightbox = document.getElementById('lightbox');
const imagenExpandida = document.getElementById('imagen-expandida');
const btnCerrar = document.querySelector('.cerrar-lightbox');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let indiceActual = 0; // Guardará la posición de la imagen que estamos viendo

// 2. Función para abrir el Lightbox al hacer clic en una imagen
imagenes.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.classList.add('activo'); // Muestra la pantalla oscura
        imagenExpandida.src = img.src;    // Copia la ruta de la imagen seleccionada
        indiceActual = index;             // Guarda qué número de imagen es
    });
});

// 3. Función para cerrar el Lightbox (al hacer clic en la X)
btnCerrar.addEventListener('click', () => {
    lightbox.classList.remove('activo');
});

// También cerramos si el usuario hace clic fuera de la imagen (en el fondo oscuro)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('activo');
    }
});

// 4. Lógica de Navegación (Siguiente / Anterior)
function cambiarImagen(direccion) {
    indiceActual += direccion; // Suma 1 o resta 1 al índice

    // Si llegamos al final, volvemos a la primera imagen
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    // Si retrocedemos desde la primera, vamos a la última
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    // Actualizamos la imagen en pantalla
    imagenExpandida.src = imagenes[indiceActual].src;
}

// Escuchamos los clics en los botones
btnNext.addEventListener('click', () => cambiarImagen(1));
btnPrev.addEventListener('click', () => cambiarImagen(-1));