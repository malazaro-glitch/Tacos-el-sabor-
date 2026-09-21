document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularioContacto');
    const notificacion = document.getElementById('notificacionExito');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nombreInput = document.getElementById('nombre').value;

            notificacion.innerHTML = `<i class="bi bi-check-circle-fill"></i> ¡Gracias, <strong>${nombreInput}</strong>! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.`;
            notificacion.classList.remove('d-none');

            form.reset();
        });
    }
});