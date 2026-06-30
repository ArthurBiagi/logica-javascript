let Altura = prompt('Indique a altura da pessoa (em cm):');
let Peso = prompt('Indique o peso da pessoa (em kg):');

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function calculoIMC(Altura, Peso) {
    let IMC = Peso / (Altura * Altura);
    exibirTexto('H1', `O IMC é ${IMC}`);
}
