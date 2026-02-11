"use strict";
//selecionar os elementos usando o DOM
const formulario = document.querySelector("#form-cliente");
const inputNome = document.querySelector("#nome");
const erro = document.querySelector("#erro-nome");
//ACESSIBILIDADE função de validação em tempo real
formulario.addEventListener('submit', (e) => {
    //previne que sua página carregue (loanding)
    e.preventDefault();
    //capturar os valores e tipar como esta na interace cliente
    const dadosCliente = {
        nome: inputNome.value,
        nascimento: document.querySelector("#nascimento").value,
        telefone: document.querySelector("#telefone").value
    };
    //validação simples(SEO)
    if (dadosCliente.nome.length < 3) {
        inputNome.style.borderColor = "red";
        erro.textContent = "O nome deve ter pelo menos 3 caracteres";
        return;
    }
    console.log("Enviando dados", dadosCliente);
    alert(`Cliente ${dadosCliente.nome} cadastro com sucesso!`);
    //limpar o formulario
    formulario.reset();
    erro.textContent = "";
    inputNome.style.borderColor = "";
});
