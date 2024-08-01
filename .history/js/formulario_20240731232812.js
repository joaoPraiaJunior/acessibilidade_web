(function () {

    'use strict';

    const elementos = {
        formulario: '[data-js="formulario"]',
        camposDoFormulario: '[data-js="campos-do-formulario"]',
        mensagemDeEnvio: '[data-js="mensagem-de-envio"]',
    }

    const formulario = document.querySelector(elementos.formulario);
    const camposDoFormulario = document.querySelectorAll(elementos.camposDoFormulario);
    const mensagemDeEnvio = document.querySelector(elementos.mensagemDeEnvio);

    const dadosDeUsuarios = JSON.parse(localStorage.getItem('Contato')) || [];


    const tiposDeErro = [
        'valueMissing',
        'typeMismatch',
        'patternMismatch',
        'tooShort',
        'customError'
    ]

    const mensagensDeErro = {
        nome: {
            valueMissing: "O campo de nome não pode estar vazio.",
            patternMismatch: "Por favor, preencha seu nome completo somente com letras.",
            tooShort: "Por favor, preencha seu nome completo com mais de 5 caracteres."
        },
        email: {
            valueMissing: "O campo de e-mail não pode estar vazio.",
            typeMismatch: "Por favor, preencha um email válido.",
            tooShort: "Por favor, preencha um email válido."
        },
        telefone: {
            valueMissing: "O campo de telefone não pode estar vazio.",
            patternMismatch: "Seu telefone deve ser um número válido.",
            tooShort: "O telefone ultrapassou o número máximo de caracteress."
        },
        cep: {
            valueMissing: 'O campo de cep não pode estar vazio.',
            patternMismatch: "Por favor, preencha um Cep válido.",
            customError: "O Cep digitado não existe.",
            tooShort: "O campo de Cep não tem caractéres suficientes."
        },
        endereco: {
            valueMissing: 'O campo de endereço não pode estar vazio.',
            patternMismatch: "Por favor, preencha um endereço válido.",
            customError: "O endereço digitado não existe.",
            tooShort: "O campo de endereço não tem caractéres suficientes."
        },
        bairro: {
            valueMissing: 'O campo bairro não pode estar vazio.',
            patternMismatch: "Por favor, preencha um bairro válido.",
            customError: "O bairro digitado não existe.",
            tooShort: "O campo bairro não tem caractéres suficientes."
        },
        cidade: {
            valueMissing: 'O campo cidade não pode estar vazio.',
            patternMismatch: "Por favor, preencha um cidade válido.",
            customError: "O cidade digitado não existe.",
            tooShort: "O campo cidade não tem caractéres suficientes."
        },
        estado: {
            valueMissing: 'O campo estado não pode estar vazio.',
            patternMismatch: "Por favor, preencha um estado válido.",
            customError: "O estado digitado não existe.",
            tooShort: "O campo estado deve conter 2 dígitos."
        },
        mensagem: {
            valueMissing: 'O campo mensagem não pode estar vazio.',
            patternMismatch: "Por favor, caracteres inseridos não são válidos.",
            tooShort: "O campo mensagem não tem caractéres suficientes."
        },

        termos: {
            valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
        }
    }

    const listaDeEventos = ['invalid', 'focusout', 'input'];

    camposDoFormulario.forEach((campo) => {
        listaDeEventos.forEach(eventoListener => {
            campo.addEventListener(eventoListener, () => validaCampos(campo));
        });
    });

    function validaCampos(campo) {
        let mensagemCustomizada = '';
        campo.setCustomValidity('');
        const validadorDeCampo = campo.validity.valid;
        tiposDeErro.forEach(erro => {
            if (campo.validity[erro]) {
                mensagemCustomizada = mensagensDeErro[campo.name][erro];
            }
        });

        if (!validadorDeCampo) {
            campo.setCustomValidity(mensagemCustomizada);
            campo.parentElement.classList.add('contatoCampo--erro');
            campo.classList.add('contatoCampo--validouErro');
        } else {
            campo.parentElement.classList.add('contatoCampo--sucesso');
            campo.classList.add('contatoCampo--validouFoi');
            campo.parentElement.classList.remove('contatoCampo--erro');
            campo.classList.remove('contatoCampo--validouErro');
            campo.setCustomValidity('');
        }

    }

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const dadosDoFormulario = {
            nome: formulario.nome.value,
            email: formulario.email.value,
            telefone: formulario.telefone.value,
            cep: formulario.cep.value,
            endereco: formulario.endereco.value,
            bairro: formulario.bairro.value,
            cidade: formulario.cidade.value,
            estado: formulario.estado.value,
            mensagem: formulario.mensagem.value,
            destaques: formulario.destaques.checked
        }

        dadosDeUsuarios.push(dadosDoFormulario);

        localStorage.setItem('Contato', JSON.stringify(dadosDeUsuarios));
        mensagemDeEnvio.textContent = 'Mensagem enviada com sucesso!';

        limpaFormulario();
        
    });

    function limpaFormulario() {
        formulario.reset();
        camposDoFormulario.forEach(campo => {
            campo.classList.remove('contatoCampo--validouFoi');
            campo.parentElement.classList.remove('contatoCampo--sucesso');
        });
    }
})();