(function() {

    'use strict';

    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);

    formulario.addEventListener('invalid', function(evento) {
        console.log(evento.target);
    }, true);

})();