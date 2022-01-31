let nome = document.getElementById("nome");
let email = document.getElementById("emailBotton");
let mensagem = document.getElementById("mensagem");
let enviarContato = document.getElementById("enviar-contato");

enviarContato.addEventListener("click", (e) => {
  e.preventDefault();
  if (nome.value == "" || email.value == "" || mensagem.value == "") {
    alert("Preencha todos os campos do formulário.");
  } else {
    alert("Sucesso! Formulário enviado!");
    console.log(`${nome.value} + ${email.value} + ${mensagem.value}`);
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  }
});
