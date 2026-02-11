// classe abstrata não pode ser instanciada
abstract class Pagamento {
    private valor:number;
    
    constructor(valor:number) {
        this.valor=valor;
    }

    abstract acesso():void;
    exibirRecibo():void{
        console.log(`recibo gerado ${this.valor}`)
    };

}

// gerança
class PagamentoCartao extends Pagamento{
    private numeroCartao: number;

    constructor(valor:number, numeroCartao:number){
        super(valor);
        this.numeroCartao = numeroCartao;
    }

    // metodo abstract que uma
    acesso(): void{
        console.log(`validando cartao ${this.numeroCartao}`)
    }

    
}

// gerança
class PagamentoPix extends Pagamento{
    private cpf: number;

    constructor(valor:number, cpf:number){
        super(valor);
        this.cpf = cpf;
    }

    // metodo abstract que uma
    acesso(): void{
        console.log(`validando cpf ${this.cpf}`)
    }

    
}


console.log("pagamento por cartao")
const compras: Pagamento[]=[
        new PagamentoCartao(500,123456)
    ]
compras.forEach(pagamento=>{
    pagamento.acesso();
    pagamento.exibirRecibo();
})

console.log("pagamento por pix")
const compraPix: Pagamento[]=[
    new PagamentoPix(100,15248569985)
]
compraPix.forEach(pagamento=>{
    pagamento.acesso();
    pagamento.exibirRecibo();
})