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

function calculoFatorial(N1){
    
}
