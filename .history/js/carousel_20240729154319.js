(function() {

  'use strict';

  const elementos = {
    botoesControladores: '[data-js="botoes-controladores"]',
  }

})();


const botoesControladores = document.querySelectorAll(elementos.botoesControladores);

// Percorre todos os botoes controladores
botoesControladores.forEach(function(btn) {
  btn.addEventListener('click', function() {
    

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})