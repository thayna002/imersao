// classe abstrata não pode ser instanciada
class Pagamento {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    exibirRecibo() {
        console.log(`recibo gerado ${this.valor}`);
    }
    ;
}
// gerança
class PagamentoCartao extends Pagamento {
    numeroCartao;
    constructor(valor, numeroCartao) {
        super(valor);
        this.numeroCartao = numeroCartao;
    }
    // metodo abstract que uma
    acesso() {
        console.log(`validando cartao ${this.numeroCartao}`);
    }
}
// gerança
class PagamentoPix extends Pagamento {
    cpf;
    constructor(valor, cpf) {
        super(valor);
        this.cpf = cpf;
    }
    // metodo abstract que uma
    acesso() {
        console.log(`validando cpf ${this.cpf}`);
    }
}
console.log("pagamento por cartao");
const compras = [
    new PagamentoCartao(500, 123456)
];
compras.forEach(pagamento => {
    pagamento.acesso();
    pagamento.exibirRecibo();
});
console.log("pagamento por pix");
const compraPix = [
    new PagamentoPix(100, 15248569985)
];
compraPix.forEach(pagamento => {
    pagamento.acesso();
    pagamento.exibirRecibo();
});
export {};
