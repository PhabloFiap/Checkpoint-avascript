//Formulario

document.addEventListener("DOMContentLoaded", function() {
  const formulario = document.getElementById("meuFormulario");
  
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputPrimeiroNome = document.getElementById("primeiroNome");
    const inputSegundoNome = document.getElementById("segundoNome");
    const inputEmail = document.getElementById("email");
    const inputSenha = document.getElementById("senha");
    const inputConfirmacaoSenha = document.getElementById("confirmacaoSenha");


    resetarValidacao();

    if (inputPrimeiroNome.value.trim().length === 0 || inputPrimeiroNome.value.trim().length < 5) {
      marcarInvalido(inputPrimeiroNome);
    }
    
    if (inputSegundoNome.value.trim().length === 0 || inputSegundoNome.value.trim().length < 5) {
      marcarInvalido(inputSegundoNome);
    }

    if (!inputEmail.value.trim() && !emailEValido(inputEmail.value)) {
      marcarInvalido(inputEmail);
    }

    if (inputSenha.value.length < 6 || inputSenha.value.length > 8) {
      marcarInvalido(inputSenha);
    }

    if (inputConfirmacaoSenha.value !== inputSenha.value) {
      marcarInvalido(inputConfirmacaoSenha);
    }

    if (formulario.querySelectorAll(".error").length === 0) {
      formulario.submit();
    } else {
      alert("Preencha corretamente todos os campos do formulario.");
    }
  });

  function marcarInvalido(elementoInput) {
    elementoInput.classList.add("error");
  }

  function resetarValidacao() {
    const inputs = formulario.querySelectorAll("input");
    inputs.forEach(function(input) {
      input.classList.remove("error");
    });
  }

  function emailEValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }
});

const botaoModoEscuro = document.getElementById("botaoEscuro");

botaoModoEscuro.addEventListener("click", function() {
  const corpo = document.body;
  corpo.classList.toggle("modoEscuro");
  
  const modoAtual = corpo.classList.contains("modoEscuro") ? "modoEscuro" : "modoClaro";

  botaoModoEscuro.textContent = modoAtual === "modoEscuro" ? "Modo Claro" : "Modo Escuro";
  
  const elementosModoEscuro = document.querySelectorAll(".alteraCor");

  elementosModoEscuro.forEach(function(elemento) {
    elemento.classList.toggle("modoEscuro");
  });
});