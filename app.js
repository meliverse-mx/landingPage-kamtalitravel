// CONTROL DE CONTADORES REGRESIVOS - KAMTALI TRAVEL

function inicializarContador(idPrefijo, fechaDestinoTexto) {
    const fechaDestino = new Date(fechaDestinoTexto).getTime();

    const intervalo = setInterval(function() {
        const ahora = new Date().getTime();
        const diferencia = fechaDestino - ahora;

        // Captura de elementos DOM
        const diasEl = document.getElementById(`${idPrefijo}-days`);
        const horasEl = document.getElementById(`${idPrefijo}-hours`);
        const minsEl = document.getElementById(`${idPrefijo}-mins`);
        const secsEl = document.getElementById(`${idPrefijo}-secs`);

        // Si la fecha ya se cumplió
        if (diferencia < 0) {
            clearInterval(intervalo);
            if(diasEl) {
                diasEl.parentElement.parentElement.innerHTML = 
                    "<div class='text-center font-bold text-[#134074] py-2'>¡Viaje en Curso o Próximo a Salir!</div>";
            }
            return;
        }



 // Soporte de Arrastre por Mouse (Drag-to-Scroll)
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener("mousedown", (e) => {
        isDown = true;
        track.style.scrollBehavior = "auto"; 
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        track.style.cursor = "grabbing";
    });

    track.addEventListener("mouseleave", () => {
        isDown = false;
        track.style.cursor = "default";
    });

    track.addEventListener("mouseup", () => {
        isDown = false;
        track.style.scrollBehavior = "smooth"; 
        track.style.cursor = "default";
    });

    track.addEventListener("mousemove", (e) => {
        if (!isDown) return; 
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5; 
        track.scrollLeft = scrollLeft - walk;
    });

        // Cálculos de tiempo
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Renderizado en pantalla con formato de dos dígitos
        if (diasEl) diasEl.innerText = dias < 10 ? '0' + dias : dias;
        if (horasEl) horasEl.innerText = horas < 10 ? '0' + horas : horas;
        if (minsEl) minsEl.innerText = minutos < 10 ? '0' + minutos : minutos;
        if (secsEl) secsEl.innerText = segundos < 10 ? '0' + segundos : segundos;

    }, 1000);
}
// CONTROL DE CONTADORES REGRESIVOS - KAMTALI TRAVEL

function inicializarContador(idPrefijo, fechaDestinoTexto) {
    const fechaDestino = new Date(fechaDestinoTexto).getTime();

    const intervalo = setInterval(function() {
        const ahora = new Date().getTime();
        const diferencia = fechaDestino - ahora;

        // Captura de elementos DOM
        const diasEl = document.getElementById(`${idPrefijo}-days`);
        const horasEl = document.getElementById(`${idPrefijo}-hours`);
        const minsEl = document.getElementById(`${idPrefijo}-mins`);
        const secsEl = document.getElementById(`${idPrefijo}-secs`);

        // Si la fecha ya se cumplió
        if (diferencia < 0) {
            clearInterval(intervalo);
            if(diasEl) {
                diasEl.parentElement.parentElement.innerHTML = 
                    "<div class='text-center font-bold text-[#134074] py-2'>¡Viaje en Curso o Próximo a Salir!</div>";
            }
            return;
        }

        // Cálculos de tiempo
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Renderizado en pantalla con formato de dos dígitos
        if (diasEl) diasEl.innerText = dias < 10 ? '0' + dias : dias;
        if (horasEl) horasEl.innerText = horas < 10 ? '0' + horas : horas;
        if (minsEl) minsEl.innerText = minutos < 10 ? '0' + minutos : minutos;
        if (secsEl) secsEl.innerText = segundos < 10 ? '0' + segundos : segundos;

    }, 1000);
}

// Inicialización cuando el documento está listo
document.addEventListener("DOMContentLoaded", function() {
    // Viaje 1: Las Vegas & Disney - 27 de Julio de 2026
    inicializarContador("lv", "July 27, 2026 09:00:00");

    // Viaje 2: Europa - 20 de Diciembre de 2026
    inicializarContador("eu", "December 20, 2026 07:00:00");
});