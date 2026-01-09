
function validacaoDados(){
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const local = document.getElementById("local-radiacao");
  const quant = document.getElementById("qtd-fontes");

  const emailValor = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  let validado = true;

  nome.style.borderColor = '#2E4F8C';
  email.style.borderColor = '#2E4F8C';
  local.style.borderColor = '#2E4F8C';
  quant.style.borderColor = '#2E4F8C';

  if (nome.value.trim() === '') {
    nome.style.borderColor = '#D84A4F';
    validado = false;
  }

  if (emailValor === '' || !emailRegex.test(emailValor)){
    email.style.borderColor = '#D84A4F';
    validado = false;
  }

  if (local.selectedIndex === 0){
    local.style.borderColor = '#D84A4F';
    validado = false;
  }

  if (quant.selectedIndex === 0){
    quant.style.borderColor = '#D84A4F';
    validado = false;
  }

  return validado;
}

function enviaProposta(){
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  const localSelect = document.getElementById("local-radiacao");
  const local = localSelect.options[localSelect.selectedIndex].text.trim();

  const quantSelect = document.getElementById("qtd-fontes");
  const quant = quantSelect.options[quantSelect.selectedIndex].text.trim();

  const numero = '5551996790202';

  const mensagem = `
Olá, gostaria de uma proposta.

Nome: ${nome}
Email: ${email}
Área de Atuação: ${local}
Origens de Radiação: ${quant}
`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}


document.addEventListener('DOMContentLoaded', () => {
  const botaoProposta = document.getElementById("proposta");

  botaoProposta.addEventListener('click', () => {
    if (validacaoDados()) {
      enviaProposta();
    }
  });
});
