(function () {

    const elementos = {
        formulario: '[data-js="formulario"]',
        sujestaoDeEmail: '[data-js="sujestao-de-email"]',
    }

    const formulario = document.querySelector(elementos.formulario);
    const campoEmail = formulario.email;
    const sujestaoDeEmail = document.querySelector(elementos.sujestaoDeEmail);

    const domains = ['gmail.com', 'aol.com', 'joaopraia.com.br', 'yahoo.com'];
    const secondLevelDomains = ['hotmail'];
    const topLevelDomains = ["com", "net", "org"];

    // variáveis domains, secondLevelDomains e topLevelDomains. superStringDistance pode ser deletada, pois não será necessária

    campoEmail.addEventListener('blur', function () {
        Mailcheck.run({
            email: campoEmail.value,
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            secondLevelDomains: secondLevelDomains, // optional
            suggested: function (suggestion) {
                console.log(suggestion.full);
            }
        });
    });

})();