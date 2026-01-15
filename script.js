// Esperamos a que la web cargue antes de tocar nada
document.addEventListener('DOMContentLoaded', () => {

    // 1. BOTÓN
    // Antes hacía cálculos matemáticos aleatorios. Ahora solo avisa
    const btn = document.getElementById('btnProceso');
    if (btn) {
        btn.addEventListener('click', () => {
            alert('¡READY! Sin bloquear el navegador.');
        });
    }

    // 2.LISTA
    const list = document.getElementById('list');
    if (list) {
        //Creamos una caja invisible para guardar las cosas temporalmente
        const cajaTemporal = document.createDocumentFragment();
        // Baja de 5000 a 500 elementos. ¿Quién va a leer 5000 líneas?
        // Además usamos .textContent que es más rápido que .innerHTML
        for (let i = 0; i < 500; i++) {
            const li = document.createElement('li');
            li.textContent = 'Elemento optimizado ' + i;
            cajaTemporal.appendChild(li);
        }
        // Pegamos todo de golpe.Solo 1 operación en vez de 500
        list.appendChild(cajaTemporal);
    }
});