(function () {

    const elementos = {
        formulario: '[data-js="formulario"]',
        sugestaoDeEmail: '[data-js="sugestao-de-email"]',
    }

    const formulario = document.querySelector(elementos.formulario);
    const campoEmail = formulario.email;
    const campoTelefone = formulario.telefone;
    const sugestaoDeEmail = document.querySelector(elementos.sugestaoDeEmail);

    const domains = ['gmail.com', 'aol.com', 'yahoo.com', 'hotmail.com', 'live.com', 'outlook.com', 'globo.com', 'uol.com.br', 'bol.com.br', 'terra.com.br', 'ig.com.br', 'r7.com', 'zipmail.com.br', 'joaopraia.com.br'];
    const secondLevelDomains = ['hotmail', 'live', 'outlook', 'globo', 'uol', 'bol', 'terra', 'ig', 'r7', 'zipmail', 'joaopraia'];
    const topLevelDomains = ["com", "net", "org", "info", "edu", "gov", "br", "com.br", "net.br", "org.br", "info.br", "edu.br", "gov.br"];

    // variáveis domains, secondLevelDomains e topLevelDomains. superStringDistance pode ser deletada, pois não será necessária

    campoEmail.addEventListener('keydow', function () {
        Mailcheck.run({
            email: campoEmail.value,
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            secondLevelDomains: secondLevelDomains, // optional
            suggested: function (suggestion) {
                sugestaoDeEmail.textContent = `Você quis dizer: ${suggestion.full}?`;
                sugestaoDeEmail.computedStyleMap.display = 'inline-block';
                sugestaoDeEmail.parentNode.classList.remove('contatoCampo--sucesso');
                campoEmail.classList.remove('contatoCampo--validouFoi');
                sugestaoDeEmail.parentNode.classList.add('contatoCampo--erro');
                campoEmail.classList.add('contatoCampo--validouErro');
                sugestaoDeEmail.setAttribute('tabindex', '-1');
                sugestaoDeEmail.setAttribute('role', 'alert');

            }
        });
    });

})();