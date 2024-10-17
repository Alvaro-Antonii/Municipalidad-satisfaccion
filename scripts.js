// Función para simular la cuenta de servicios realizados
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('serviceCounter');
    let count = 1270;

    const counterInterval = setInterval(() => {
        if (count < 5234) {  // Cantidad de servicios simulados
            count += Math.floor(Math.random() * 10);  // Incremento aleatorio
            counterElement.textContent = count;
        } else {
            clearInterval(counterInterval);
        }
    }, 5000);  // Velocidad del contador
});

// Mensaje de progreso al interactuar con el botón de "Accede a tus servicios"
const serviciosButton = document.getElementById('serviciosButton');
const progressMessage = document.getElementById('progressMessage');

serviciosButton.addEventListener('click', (e) => {
    e.preventDefault();
    progressMessage.textContent = "¡Genial! Estás a un paso de acceder a todos los servicios disponibles.";
    setTimeout(() => {
        progressMessage.textContent = "";  // Oculta el mensaje después de unos segundos
    }, 3000);
});
