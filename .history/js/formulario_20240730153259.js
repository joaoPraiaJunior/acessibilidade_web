(function () {

    'use strict';

    const elementos = {
        formulario: '[data-js="formulario"]',
        comaposDoFormulario: '[required]',
    }

    const formulario = document.querySelector(elementos.formulario);
    const camposDoFormulario = document.querySelectorAll(elementos.comaposDoFormulario);


    camposDoFormulario.forEach((campo) => {
        campo.addEventListener('invalid', function () {
            validaCampos(campo);
        });
});

function validaCampos(campo) {

}

}) ();