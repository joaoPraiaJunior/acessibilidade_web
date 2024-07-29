
(function() {

  'user strict';
  
  const elementos = {
    botaoDeAbrirDialogo: '[data-js="botao-de-abrir-dialogo"]',
    dialogoNewsletter: '[data-js="dialogo-newsletter"]',
    dialogoBody: '[data-js="dialogo-body"]',
  }
  //Variáveis
  const botaoDeAbrirDialogo = document.querySelector(elementos.botaoDeAbrirDialogo);
  const dialogoNewsletter = document.querySelector(elementos.dialogoNewsletter);
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
