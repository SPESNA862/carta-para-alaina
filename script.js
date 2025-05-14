document.addEventListener('DOMContentLoaded', () => {
    const cartaContainer = document.getElementById('carta-container');
    const mensajeTeQuiero = document.getElementById('mensaje-te-quiero');
    const botonSeguirBuscando = document.getElementById('boton-seguir-buscando');
    const cumplidoArea = document.getElementById('cumplido-area');
    const textoCumplido = document.getElementById('texto-cumplido');

    // --- NUEVA LISTA DE CUMPLIDOS Y MENSAJES (Más grande y variada) ---
    const todosLosMensajes = [
        "Te valoro muchísimo, cada parte de ti.",
        "Estoy agradecido de la suerte que me llevo a conocerte",
        "Confio plenamente, sin dudar.",
        "Me pareces increíblemente linda, por dentro y por fuera.",
        "Eres hermosisima, Alaina.",
        "Me resultas sumamente atractiva, en todos los sentidos.",
        "Estoy enamorado de ti, enamorado y embobado.",
        "Adoro tu amabilidad con todos.",
        "Una de las cualidades que mas aprecio de ti es el sentido del humor.",
        "Me encanta tu timidez (Aunque solo te queda la caraa, ya casi se fueee JAHSAHSJS ;-;).",
        "Admiro lo directa y honesta que eres.",
        "Admiro como enfrentas los desafios.",
        "Valoro inmensamente cómo sigues tratando de manejarlo todo.",
        "Admiro tu empatia.",
        "Tu pasión por lo que te importa es contagiosa.",
        "Estoy enamorado de TI, de todo tu ser, Alaina.",
        "Te has visto al espejo, explicame como no voy a quedar embobado",
        "A veces te miro y no entiendo cómo tuve tanta suerte.",
        "Eres mi momento favorito del día.",
        "Te juro, no se como lo haces, pero me encantas más cada día.",
        "Eres mi notificacion favorita (y no es broma, me emociono y me joden por eso ;-;).",
        "Eres una persona increiblemente fuerte.",
        "Valoro todo y cada uno de tus consejos.",
        "Te apareces en mi cabeza y sonrio sin queres, como es esooo.", 
        "Eres mi futura enamorada.",
        "Si estes tu, estoy bien.",
        "Te veo y mi cerebro se desconecta (Completamente).",
        "No se como decirlo bien, pero me haces feliz, increiblemente feliz."
    ];

    let mensajesDisponibles = [...todosLosMensajes]; 

    function obtenerMensajeAleatorio() {
        if (mensajesDisponibles.length === 0) {
             Opcional: 
             mensajesDisponibles = [...todosLosMensajes];
             botonSeguirBuscando.disabled = false;
             botonSeguirBuscando.textContent = "Empezar de nuevo";
            return "¡Has descubierto todos mis secretos por ahora! Pero siempre habrá más amor y risas para ti.";
        }
        const indiceAleatorio = Math.floor(Math.random() * mensajesDisponibles.length);
        const mensajeSeleccionado = mensajesDisponibles.splice(indiceAleatorio, 1)[0];
        return mensajeSeleccionado;
    }

    cartaContainer.addEventListener('click', abrirCarta);

    function abrirCarta() {
        cartaContainer.classList.add('hidden');
        mensajeTeQuiero.classList.remove('hidden');

        setTimeout(() => {
            botonSeguirBuscando.classList.remove('hidden');
            cumplidoArea.classList.remove('hidden');
            mostrarSiguienteMensaje();
        }, 1500);
    }

    botonSeguirBuscando.addEventListener('click', mostrarSiguienteMensaje);

    function mostrarSiguienteMensaje() {
        const proximoMensaje = obtenerMensajeAleatorio();
        textoCumplido.textContent = proximoMensaje;

        const hoja = document.getElementById('hoja-cumplido');
        hoja.style.opacity = '0';
        hoja.style.transform = 'translateY(10px)';
        void hoja.offsetWidth; // Forzar reflow
        
        setTimeout(() => {
            hoja.style.opacity = '1';
            hoja.style.transform = 'translateY(0)';
            hoja.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        }, 50);

        if (mensajesDisponibles.length === 0) {
            botonSeguirBuscando.textContent = "¡Eso es todo por ahora!";
            botonSeguirBuscando.disabled = true;
        }
    }
});