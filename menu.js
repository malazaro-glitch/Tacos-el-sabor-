document.addEventListener('DOMContentLoaded', () => {
    let contadorProductos = 0;
    let totalAcumulado = 0;

    const cantItemsElem = document.getElementById('cant-items');
    const totalPrecioElem = document.getElementById('total-precio');
    const botonesOrdenar = document.querySelectorAll('.btn-ordenar');

    botonesOrdenar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const target = e.target.closest('.btn-ordenar');
            const nombre = target.getAttribute('data-nombre');
            const precio = parseFloat(target.getAttribute('data-precio'));

            contadorProductos++;
            totalAcumulado += precio;

            cantItemsElem.textContent = contadorProductos;
            totalPrecioElem.textContent = totalAcumulado;

            // Animación temporal en el botón
            target.classList.remove('btn-outline-danger');
            target.classList.add('btn-success');
            target.innerHTML = '<i class="bi bi-check-circle"></i> Agregado';

            setTimeout(() => {
                target.classList.remove('btn-success');
                target.classList.add('btn-outline-danger');
                target.innerHTML = '<i class="bi bi-plus-circle"></i> Ordenar';
            }, 1000);
        });
    });
});