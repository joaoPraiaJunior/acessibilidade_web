
(function() {

  'user strict';
  
  const elementos = {
    botaoDeAbrirDialogo: '[data-js="botao-de-abrir-dialogo"]',\
    dialogo: '[data-js="dialogo"]',
  }
  //Variáveis
  const botaoDeAbrirDialogo = document.querySelector(elementos.botaoDeAbrirDialogo);
  var dialog = document.querySelector('.dialogNewsletter');
  var dialogBody = document.querySelector('.dialogNewsletter-body');
  var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
  
  
  // Quando abrir a dialog...
  btnAbreDialog.addEventListener('click', function() {
    dialog.classList.add('dialogNewsletter--aberto');
  });
  
  function fechandoDialog() {
    document.activeElement.blur();
    dialog.classList.remove('dialogNewsletter--aberto');     
  }
  
  // Listeners
  document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
})();
