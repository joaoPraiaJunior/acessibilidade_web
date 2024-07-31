(function() {

    'use strict';

    const elementos = {
        formulario: '[data-js="formulario"]',
    }

    const formulario = document.querySelector(elementos.formulario);

    formulario.addEventListener('invalid', function(evento) {
        if(!evento.target.validity.valid) {
            evento.targetsetCustomValidity(`${validaCampos(evento.target.name)}`);
        }
    }, true);

    function validaCampos(campo) {
        const mensagem = {
            nome: 'O campo nome é obrigatório',
            email: 'O campo email é obrigatório',
            telefone: 'O campo telefone é obrigatório',
            mensagem: 'O campo mensagem é obrigatório',
        }

        return mensagem[campo];
    }

})();