//inputs
let nomeCompletoVol = document.querySelector("[data-input='nome']");
let telefoneVol = document.querySelector("[data-input='telefone']");
let emailVol = document.querySelector("[data-input='email']");
let cepVol = document.querySelector("[data-input='cep']");
let enderecoVol = document.querySelector('[data-input="endereco"]');
let bairroVol = document.querySelector('[data-input="bairro"]');
let cidadeVol = document.querySelector('[data-input="cidade"]');
let estadoVol = document.querySelector('[data-input="estado"]');

const enviaFormulario = function () {
  if (
    nomeCompletoVol == "" ||
    telefoneVol == "" ||
    emailVol == "" ||
    cepVol == "" ||
    enderecoVol == "" ||
    bairroVol == "" ||
    cidadeVol == "" ||
    estadoVol == ""
  ) {
    return alert("Informações enviadas com sucesso!");
  } else alert("Campos vazios!");
};

function resetaInput() {
  nomeCompletoVol.value = "";
  telefoneVol.value = "";
  emailVol.value = "";
  cepVol.value = "";
  enderecoVol.value = "";
  bairroVol.value = "";
  cidadeVol.value = "";
  estadoVol.value = "";
}

//botões
let btnEnviarForm = document.querySelector('[data-serviço="enviar-form"]');
btnEnviarForm.addEventListener("click", enviaFormulario);
