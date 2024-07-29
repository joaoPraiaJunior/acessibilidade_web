
(function() {

  'user strict';
  
  const elementos = {
    botaoDeAbrirDialogo: '[data-js="botao-de-abrir-dialogo"]',
    fecharDialogo: '[data-js="fechar-dialogo"]',
    dialogoNewsletter: '[data-js="dialogo-newsletter"]',
    dialogoBody: '[data-js="dialogo-body"]',
    dialogoOverlay: '[data-js="dialogo-overlay"]',
  }
  //Variáveis
  const botaoDeAbrirDialogo = document.querySelector(elementos.botaoDeAbrirDialogo);
  const fecharDialogo = document.querySelector(elementos.fecharDialogo);
  const dialogoNewsletter = document.querySelector(elementos.dialogoNewsletter);
  const dialogoBody = document.querySelector(elementos.dialogoBody);
  const dialogoOverlay = document.querySelector(elementos.dialogoOverlay);
  
  
  // Quando abrir a dialog...
  botaoDeAbrirDialogo.addEventListener('click', function() {
    dialogoNewsletter.classList.add('dialogNewsletter--aberto');
  });
  
  function fechandoDialog() {
    document.activeElement.blur();
    dialogoNewsletter.classList.remove('dialogNewsletter--aberto');     
  }
  
  // Listeners
  document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
})();
