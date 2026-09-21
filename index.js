document.addEventListener('DOMContentLoaded', () => {
    const btnPromo = document.getElementById('btnPromo');

    if (btnPromo) {
        btnPromo.addEventListener('click', () => {
            alert('🎉 ¡Promoción Activada!\nMuestra este mensaje en caja para recibir tu agua fresca de 1L gratis en la compra de 5 tacos.');
        });
    }
});