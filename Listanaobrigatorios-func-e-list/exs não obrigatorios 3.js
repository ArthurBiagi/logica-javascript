function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function calculoIMC() {
    let Altura = parseFloat(document.getElementById('alturaInput').value);
    let Peso = parseFloat(document.getElementById('pesoInput').value);

    if (Altura > 0 && Peso > 0){
    let IMC = Peso / (Altura * Altura);
    exibirTexto('p', `O IMC é ${IMC.toFixed(2)}`);
    } else{
    exibirTexto('p', `Valores inválidos`);
    }
}

let N1 = parseFloat(document.getElementById('fatorialInput').value);
function calculoFatorial(N1){
    let fatorial = 1;
    let i = 1;
}
