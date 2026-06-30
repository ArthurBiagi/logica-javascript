function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function calculoIMC() {
    let Altura = parseFloat(document.getElementById('alturaInput'))
    let IMC = Peso / (Altura * Altura);
    exibirTexto('H1', `O IMC é ${IMC}`);
}
