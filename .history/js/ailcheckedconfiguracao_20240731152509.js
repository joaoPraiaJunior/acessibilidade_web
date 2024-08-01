(function () {

    const elementos = {
        formulario: '[data-formulario]',
    }

    const domains = ['gmail.com', 'aol.com'];
    const secondLevelDomains = ['hotmail'];
    const topLevelDomains = ["com", "net", "org"];

    const campoEmail = formulario.email;

    // variáveis domains, secondLevelDomains e topLevelDomains. superStringDistance pode ser deletada, pois não será necessária

    campoEmail.addEventListener('blur', function () {
        Mailcheck.run({
            email: campoEmail.value,
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            secondLevelDomains: secondLevelDomains, // optional
            distanceFunction: superStringDistance,  // optional
            suggested: function (suggestion) {
                console.log(suggestion.full);
            }
        });
    });

})();