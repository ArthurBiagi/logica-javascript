let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas)
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é maior');
    } else {
        exibirTextoNaTela('p', 'O número secreto é menor');
    }
    tentativas++;
};

function gerarNumAleatorio() {
    return parseInt(Math.random() * 10 + 1)
};