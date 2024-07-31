(function() {

    'use strict';

    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);

    formulario.addEventListener('invalid', function(evento) {
        evento.preventDefault();
        console.log(evento.target);
    });

})();