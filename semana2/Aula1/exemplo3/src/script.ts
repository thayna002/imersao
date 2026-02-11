// definindo um contrato(interface) para o objeto Cliente
interface Cliente{
    nome:string;
    nascimento: string;
    telefone:string;
}
//selecionar os elementos usando o DOM
const formulario = document.querySelector("#form-cliente") as HTMLFormElement
const inputNome = document.querySelector("#nome") as HTMLFormElement
const erro = document.querySelector("#erro-nome") as HTMLFormElement

//ACESSIBILIDADE função de validação em tempo real

formulario.addEventListener('submit',(e:Event)=>{
    //previne que sua página carregue (loanding)
    e.preventDefault()

    //capturar os valores e tipar como esta na interace cliente
    const dadosCliente:Cliente ={
        nome:inputNome.value,
        nascimento: (document.querySelector("#nascimento") as HTMLInputElement).value,
        telefone:(document.querySelector("#telefone") as HTMLInputElement).value
    };

    //validação simples(SEO)
    if(dadosCliente.nome.length <3){
        inputNome.style.borderColor="red";
        erro.textContent="O nome deve ter pelo menos 3 caracteres";
        return;
    }

    console.log("Enviando dados",dadosCliente);
    alert(`Cliente ${dadosCliente.nome} cadastro com sucesso!`)
    
    //limpar o formulario
    formulario.reset();
    erro.textContent=""
    inputNome.style.borderColor=""
})
