"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// pego o elemento do html pelo ID
const catalogo = document.getElementById("catalogo");
const input = document.getElementById("search");
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
//armazena a lista inicial
let listaCursos = [];
function criarCard(curso) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
    <span class = "nivel">${curso.nivel}</span>
    <h3>${curso.titulo}</h3>
    <p><strong>${curso.categoria}</strong> • ${curso.duracao}</p>
    <button>Saber mais</button>
    `;
    return card;
}
function carregaCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const resposta = yield fetch("cursos.json");
        listaCursos = yield resposta.json();
        renderizarCursos(listaCursos);
    });
}
function renderizarCursos(cursos) {
    catalogo.innerHTML = "";
    cursos.forEach(curso => {
        const card = criarCard(curso);
        catalogo.appendChild(card);
    });
}
function alterarMenu() {
    const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
    botaoMenu.setAttribute("aria-expanded", String(!aberto));
    menu
        .classList.toggle("ativo");
}
input.addEventListener("input", () => {
    const termo = input.value.toLowerCase();
    const filtrados = listaCursos.filter(curso => curso.titulo.toLocaleLowerCase().includes(termo)
        || curso.categoria.toLocaleLowerCase().includes(termo));
    renderizarCursos(filtrados);
});
// menu taba abrindo sempre que ia pra mobile
window.addEventListener("resize", () => {
    if (window.innerWidth >= 600) {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
    }
});
carregaCursos();
botaoMenu.addEventListener("click", alterarMenu);
