const form = document.getElementById("formCadastro");
const emailInput = document.getElementById("emailInput");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Inscrição concluída com sucesso!\nE-mail: ${emailInput.value}`);
    form.reset();
});
