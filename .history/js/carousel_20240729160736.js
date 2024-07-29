(function() {

  'use strict';

  const elementos = {
    botoesControladores: '[data-js="botoes-controladores"]',
    teste: '.listaDeArtigos-slider-item'
  }
  
  const botoesControladores = document.querySelectorAll(elementos.botoesControladores);
  const teste = document.querySelectorAll(elementos.teste);
  console.log(teste);
  
  // Percorre todos os botoes controladores
  botoesControladores.forEach(function(botaoControlador) {
    botaoControlador.addEventListener('click', function() {
      // Remove classe 'ativo' dos outros botoes
      botoesControladores.forEach(function(botaoRemoveClass) {
        botaoRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
      });
  
      this.classList.add('listaDeArtigos-slider-item--ativo')
    });
  });

})();

