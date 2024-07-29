(function() {

  'use strict';

  const elementos = {
    botoesControladores: '[data-js="botoes-controladores"]',
    noticias: '[data-js="noticia"]',
  }
  
  const botoesControladores = document.querySelectorAll(elementos.botoesControladores);
  const noticias = document.querySelectorAll(elementos.noticias);

  // Percorre todos os botoes controladores
  botoesControladores.forEach(function(botaoControlador) {
    botaoControlador.addEventListener('click', function() {
      //evento.preventDefault();
      //botaoControlador.href = 'javascript:void(0)';
      // Remove classe 'ativo' dos outros botoes
      botoesControladores.forEach(function(botaoRemoveClass) {
        botaoRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
      });
  
      this.classList.add('listaDeArtigos-slider-item--ativo')
      adicionaDescricaoSlideAtual(botaoControlador);
      setaNoticia(botaoControlador);
    });
  });

  function adicionaDescricaoSlideAtual(botaoControlador) {
    const span = document.createElement('span');
    span.id = 'escondeVisualmente';
    span.classList.add('escondeVisualmente');
    span.textContent = '(Slide atual)';
    removeDescricaoSlideAtual();
    botaoControlador.append(span);
  }

  function removeDescricaoSlideAtual() {
    const span = document.getElementById('escondeVisualmente');
    span.remove();
  }

  function setaNoticia(botaoControlador) {
    noticias.forEach(function(noticia) {
      noticia.style.display = 'none';
      noticia.style.opacity = 0;
      if(botaoControlador.dataset.sliderItem === noticia.dataset.noticia) {
        noticia.style.display = 'block';
        efeitoFade(noticia);
      }
    });
  }

  function efeitoFade(noticia) {
    setTimeout(function() {
      noticia.style.opacity = 1;
    }, 2000);
  }

})();

