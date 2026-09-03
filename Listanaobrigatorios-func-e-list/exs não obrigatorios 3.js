function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function calculoIMC() {
    let Altura = parseFloat(document.getElementById('alturaInput').value);
    let Peso = parseFloat(document.getElementById('pesoInput').value);

    if (Altura > 0 && Peso > 0) {
        let IMC = Peso / (Altura * Altura);
        exibirTexto('p', `O IMC é ${IMC.toFixed(2)}`);
    } else {
        exibirTexto('p', `Valores inválidos`);
    }
}

function calculoFatorial(N1) {
    if (isNaN(N1) || N1 < 0){
        exibirTexto('#resultadoFatorial', "Digite um número válido");
        return;
    }
    //o Botão do html ja passa o input como parâmtro
    let fatorial = 1;
    let i = 1;

    while (i <= N1) {
        fatorial = fatorial * i;
        i++
    }
    exibirTexto('#resultadoFatorial', `O fatorial de ${N1} é: ${fatorial}`);
}

function converteDolarReais(valor){
    if (isNaN(valor) || valor < 0){
        exibirTexto('#ResultadoConversao', "Digite um valor válido");
        return;
    }
    //o Botão do html ja passa o input como parâmetro
    let conversao = valor * 4.8
    exibirTexto('#ResultadoConversao', `O valor em Reais é: ${conversao}`);
}


