let nome = document.getElementById("nome");
let email = document.getElementById("emailBotton");
let mensagem = document.getElementById("mensagem");
let enviarContato = document.getElementById("enviar-contato");

enviarContato.addEventListener("click", (e) => {
  e.preventDefault();
  if (nome.value == "" || email.value == "" || mensagem.value == "") {
    alert("Campos vazios!");
  } else {
    alert("Obrigado! Formulário enviado!");
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  }
});
