const form = document.getElementById("form");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const texto = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value;
  const sobrenomeValue = sobrenome.value;
  const emailValue = email.value;
  const textoValue = texto.value;

  if (nomeValue === "") {
    setErrorFor(nome, "O nome é obrigatório.");
  } else {
    setSuccessFor(nome);
  }

  if (sobrenomeValue === "") {
    setErrorFor(sobrenome, "O sobrenome é obrigatório.");
  } else {
    setSuccessFor(sobrenome);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (textoValue === "") {
    setErrorFor(texto, "Digite sobre o que deseja falar.");
  } else {
    setSuccessFor(texto);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("Mensagem enviada!");
    formControls.forEach((formControl) => {
      formControl.className = "form-control invisible";
    });
    form.reset();
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function openPopup() {
  document.getElementById("popup-form").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup-form").style.display = "none";
}
