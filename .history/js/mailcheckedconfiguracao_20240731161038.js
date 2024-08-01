(function () {

    const elementos = {
        formulario: '[data-js="formulario"]',
        sujestaoDeEmail: '[data-js="sujestao-de-email"]',
    }

    const formulario = document.querySelector(elementos.formulario);
    const campoEmail = formulario.email;
    const sujestaoDeEmail = document.querySelector(elementos.sujestaoDeEmail);

    const domains = ['gmail.com', 'aol.com', 'yahoo.com', 'hotmail.com', 'live.com', 'outlook.com', 'globo.com', 'uol.com.br', 'bol.com.br', 'terra.com.br', 'ig.com.br', 'r7.com', 'zipmail.com.br', 'joaopraia.com.br'];
    const secondLevelDomains = ['hotmail', 'live', 'outlook', 'globo', 'uol', 'bol', 'terra', 'ig', 'r7', 'zipmail', 'joaopraia'];
    const topLevelDomains = ["com", "net", "org", "info", "edu", "gov", "br", "com.br", "net.br", "org.br", "info.br", "edu.br", "gov.br"];

    // variáveis domains, secondLevelDomains e topLevelDomains. superStringDistance pode ser deletada, pois não será necessária

    campoEmail.addEventListener('blur', function () {
        Mailcheck.run({
            email: campoEmail.value,
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            secondLevelDomains: secondLevelDomains, // optional
            suggested: function (suggestion) {
                sujestaoDeEmail.innerHTML = `Você quis dizer: <a href="#">${suggestion.full}</a>?`;
                sugestaoDeEmail.parentNode.classList.remove('contatoCampo--sucesso');
                campoEmail.classList.remove('contatoCampo--validouFoi');
                sugestaoDeEmail.parentNode.classList.add('contatoCampo--erro');
                campoEmail.classList.add('contatoCampo--validouErro');
            }
        });
    });

})();