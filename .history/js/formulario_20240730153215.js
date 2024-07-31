(function () {

    'use strict';

    const elementos = {
        formulario: '[data-js="formulario"]',
        comaposDoFormulario: '[required]',
    }

    const formulario = document.querySelector(elementos.formulario);
    const camposDoFormulario = document.querySelectorAll(elementos.comaposDoFormulario);


    camposDoFormulario.forEach((campo) => {
        campo.addEventListener('invalid', function (evento) {

        });
});

function validaCampos(campo) {
    const mensagem = {
        nome: 'O campo nome é obrigatório',
        email: 'O campo email é obrigatório',
        telefone: 'O campo telefone é obrigatório',
        mensagem: 'O campo mensagem é obrigatório',
    }

    return mensagem[campo];
}

}) ();