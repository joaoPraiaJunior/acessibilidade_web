
(function() {

  'user strict';
  
  const elementos = {
    botaoDeAbrirDialogo: '[data-js="botao-de-abrir-dialogo"]',
    fecharDialogo: '[data-js="fechar-dialogo"]',
    dialogoNewsletter: '[data-js="dialogo-newsletter"]',
    dialogoBody: '[data-js="dialogo-body"]',
    dialogoOverlay: '[data-js="dialogo-overlay"]',
    inputDeEmail: '[data-js="input-de-email"]',
  }
  //Variáveis
  const botaoDeAbrirDialogo = document.querySelector(elementos.botaoDeAbrirDialogo);
  const fecharDialogo = document.querySelector(elementos.fecharDialogo);
  const dialogoNewsletter = document.querySelector(elementos.dialogoNewsletter);
  const dialogoBody = document.querySelector(elementos.dialogoBody);
  const dialogoOverlay = document.querySelector(elementos.dialogoOverlay);
  const inputDeEmail = document.querySelector(elementos.inputDeEmail);
  
  
  // Quando abrir a dialog...
  botaoDeAbrirDialogo.addEventListener('click', function() {
    dialogoNewsletter.classList.add('dialogNewsletter--aberto');
    inputDeEmail.focus();
  });
  
  function fechandoDialogoDeNewslleter() {
    document.activeElement.blur();
    dialogoNewsletter.classList.remove('dialogNewsletter--aberto');     
  }
  
  // Listeners
 fecharDialogo.addEventListener('click', fechandoDialogoDeNewslleter);
})();
