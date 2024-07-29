const bola = document.querySelector('.bola');
const caja = document.querySelector('.caja');
const startButton = document.getElementById('startButton');

const bolaSize = 50; // Tamano de la pelota
const cajaWidth = caja.clientWidth;
const cajaHeight = caja.clientHeight;

// Posicion inicial aleatoria de la pelota
function obtenerPosicionAleatoria() {
    const x = Math.random() * (cajaWidth - bolaSize);
    const y = Math.random() * (cajaHeight - bolaSize);
    return { x, y };
}

// Obtener una velocidad aleatoria de la pelota
function obtenerVelocidadAleatoria() {
    const velocidad = 4; // Velocidad base de la pelota
    const dx = (Math.random() - 1.5) * velocidad * 2; // Velocidad horizontal aleatoria
    const dy = (Math.random() - 1.5) * velocidad * 2; // Velocidad vertical aleatoria
    return { dx, dy };
}

// Variables para la posicion y velocidad iniciales
let x, y, dx, dy;
let intervalo;

// Mover la pelota
function moverBola() {
    // Actualiza la posicion de la pelota
    x += dx;
    y += dy;

    // Verifica colisiones con los bordes de la caja
    if (x <= 0 || x + bolaSize >= cajaWidth) {
        dx = -dx; // Rebote horizontal
    }
    if (y <= 0 || y + bolaSize >= cajaHeight) {
        dy = -dy; // Rebote vertical
    }

    // Actualiza el estilo de la pelota
    bola.style.left = `${x}px`;
    bola.style.top = `${y}px`;
}

// Iniciar el movimiento de la pelota
function iniciarMovimiento() {
    // Obtener posicion y velocidad aleatorias
    ({ x, y } = obtenerPosicionAleatoria());
    ({ dx, dy } = obtenerVelocidadAleatoria());

    // Iniciar el intervalo de movimiento
    if (intervalo) {
        clearInterval(intervalo); // Limpiar el intervalo anterior si existe
    }
    intervalo = setInterval(moverBola, 5);
}

// Crear evento de clic al boton para iniciar el movimiento
startButton.addEventListener('click', iniciarMovimiento);
