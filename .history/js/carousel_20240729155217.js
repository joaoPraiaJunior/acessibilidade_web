(function() {

  'use strict';

  const elementos = {
    botoesControladores: '[data-js="botoes-controladores"]',
  }
  
  const botoesControladores = document.querySelectorAll(elementos.botoesControladores);
  
  // Percorre todos os botoes controladores
  botoesControladores.forEach(function(botaoControlador) {
    botaoControlador.addEventListener('click', function() {
      // Remove classe 'ativo' dos outros botoes
      botoesControladores.forEach(function(botaoRemoveClass) {
        botaoRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
      })
  
      this.classList.add('listaDeArtigos-slider-item--ativo')
    })
  })

})();

