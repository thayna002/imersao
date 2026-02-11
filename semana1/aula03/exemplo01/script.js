/*
EXEMPLO 01

console.log("inicio");

setTimeout(()=> console.log("5s"),5000);

const arquivo = (nome:string, callback:(conteudo:string)=>void)=>{
    setTimeout(()=>callback(`conteudo ${nome}`),2000);
}

arquivo("doc.txt",(res)=>console.log(res));

//evento de click que tem reacao assincrona apos acao do usuario
const botao = document.querySelector("#botao");
botao?.addEventListener("click", ()=>console.log("comprou"))*/
// EXEMPLO 02
// console.log("inicia promessa")
// const promessa = new Promise<string>((resolve)=>{
//     setTimeout(()=>{
//         console.log("ja iniciei")
//         resolve("dadoscarregados")
//     },2000)
// })
// promessa.then(res=>console.log("resultado final",res))
// console.log("processo rodando abaixo da promessa")
// const contaIdade=(idade:number): Promise<string>=>{
//     return new Promise((res,rej)=>{
//         idade>=18 ? res("abre ") : rej("nao abre")
//     })
// }
// EXEMPLO 03
async function buscarDados() {
    try {
        const resposta = await fetch("https://dummyjson.com/products");
        const dados = await resposta.json();
        console.log("Busca correta");
        console.log(dados);
        return dados;
    }
    catch (erro) {
        console.error("erro ao solicitar a requisicao", erro);
    }
}
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");
botao.addEventListener("click", async () => {
    const dados = await buscarDados();
    if (!dados) {
        lista.innerHTML = "Erro ao buscar dados.";
        return;
    }
    lista.innerHTML = "";
    dados.products.forEach((produto) => {
        lista.innerHTML += `
            <div>
                <h3>${produto.title}</h3>
                <p>${produto.description}</p>
                <p>Preço: ${produto.price}</p>
            </div>
        `;
    });
});
export {};
