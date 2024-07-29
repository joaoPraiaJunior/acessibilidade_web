
(function () {

  'user strict';

  const elementos = {
    botaoDeAbrirDialogo: '[data-js="botao-de-abrir-dialogo"]',
    fecharDialogo: '[data-js="fechar-dialogo"]',
    dialogoNewsletter: '[data-js="dialogo-newsletter"]',
    dialogoBody: '[data-js="dialogo-body"]',
    dialogoOverlay: '[data-js="dialogo-overlay"]',
    inputDeEmail: '[data-js="input-de-email"]',
    conteudoForaDoDialogo: '[data-js="conteudo-fora-do-dialogo"]'
  }
  //Variáveis
  const botaoDeAbrirDialogo = document.querySelector(elementos.botaoDeAbrirDialogo);
  const fecharDialogo = document.querySelector(elementos.fecharDialogo);
  const dialogoNewsletter = document.querySelector(elementos.dialogoNewsletter);
  const dialogoBody = document.querySelector(elementos.dialogoBody);
  const dialogoOverlay = document.querySelector(elementos.dialogoOverlay);
  const inputDeEmail = document.querySelector(elementos.inputDeEmail);
  const conteudoForaDoDialogo = document.querySelector(elementos.conteudoForaDoDialogo);


  // Quando abrir a dialog...
  botaoDeAbrirDialogo.addEventListener('click', function () {
    dialogoNewsletter.classList.add('dialogNewsletter--aberto');
    inputDeEmail.focus();
    conteudoForaDoDialogo.inert = true;
    document.body.style.overflowY = 'hidden';


  });

  function fechandoDialogoDeNewslleter() {
    document.activeElement.blur();
    dialogoNewsletter.classList.remove('dialogNewsletter--aberto');
    conteudoForaDoDialogo.inert = false;
    botaoDeAbrirDialogo.focus();
    document.body.style.overflowY = 'auto';
  }

  // Listeners
  fecharDialogo.addEventListener('click', fechandoDialogoDeNewslleter);
  document.addEventListener('keyup', function (evento) {
    if (evento.keyCode === 27) {
      fechandoDialogoDeNewslleter();
    }
  } 
});
})();
