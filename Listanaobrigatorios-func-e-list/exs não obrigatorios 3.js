let Altura = prompt('Indique a altura da pessoa:');
let Peso = prompt('Indique o peso da pessoa:');

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function calculoIMC(Altura, Peso) {
    let IMC = Peso / (Altura * Altura);
    exibirTexto('H1', `O IMC é ${IMC}`);
}
