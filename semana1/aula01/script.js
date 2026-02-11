let palpite;

const sorteio = Math.floor(Math.random() * 10)

do{
    palpite = parseInt(prompt("adivinhe o numero de 1 a 10"))
}while(palpite != sorteio);

alert("parabens c acertou")

// dom
const imagem = document.createElement('img')

// definir os atributos da imagem
imagem.src = "imagem.jpg";
imagem.alt = "imagem flores";
imagem.width = 300

document.getElementById("imagem").appendChild(imagem);

// map/filter/reduce

// map ele transforma o array em um novo sem modficar o anterior
const precosVelho = [5000,9000,899,4333]
const precosNovos = precosVelho.map((preco)=>{
    return preco * 2;
})
console.log(precosNovos);