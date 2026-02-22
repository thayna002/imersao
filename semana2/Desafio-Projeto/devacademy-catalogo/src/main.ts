// usado para definir o formato padrão dos dados
interface Curso {
    titulo: string;
    categoria: string;
    nivel: string;
    duracao: string;
}

// pego o elemento do html pelo ID
const catalogo = document.getElementById("catalogo") as HTMLElement;
const input = document.getElementById("search") as HTMLInputElement;

const botaoMenu = document.querySelector(".menu-toggle") as HTMLButtonElement;
const menu = document.getElementById("menu") as HTMLElement;

//armazena a lista inicial
let listaCursos: Curso[] = [];

function criarCard(curso: Curso): HTMLElement{
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

async function carregaCursos(){
    const resposta = await fetch("cursos.json");
    listaCursos = await resposta.json();

    renderizarCursos(listaCursos);
}

function renderizarCursos(cursos: Curso[]){
    catalogo.innerHTML="";

    cursos.forEach(curso => {
        const card = criarCard(curso);
        catalogo.appendChild(card);
    })
}

function alterarMenu(){
    const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
    botaoMenu.setAttribute("aria-expanded", String (!aberto));
    menu
    .classList.toggle("ativo");
}
input.addEventListener("input", ()=> {
    const termo = input.value.toLowerCase();

    const filtrados = listaCursos.filter(curso => 
        curso.titulo.toLocaleLowerCase().includes(termo) 
        || curso.categoria.toLocaleLowerCase().includes(termo));

    renderizarCursos(filtrados);
})
// menu taba abrindo sempre que ia pra mobile
window.addEventListener("resize", () => {

  if (window.innerWidth >= 600) {
    menu.classList.remove("ativo");
    botaoMenu.setAttribute("aria-expanded", "false");
  }

});


carregaCursos();

botaoMenu.addEventListener("click", alterarMenu);