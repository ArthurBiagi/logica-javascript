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
    let cotacaoDolar = 4.8;
    let conversao = valor * cotacaoDolar;
    exibirTexto('#ResultadoConversao', `O valor em Reais é: ${conversao}`);
}

function CalcularAreaRet(altura, largura) {
    if (isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0) {
        exibirTexto('#AlturaeLargura', "Digite uma Altura e Largura válidas");
        return;
    }

    let areaR = altura * largura;
    exibirTexto('#AlturaeLargura', `A Área do Retângulo é: ${areaR}`);
}

function calculaPerimetroRet(altura, largura){
    if (isNaN(altura) || isNaN(largura) || altura < 0 || largura < 0){
        exibirTexto('#AlturaeLargura', "Digite uma altura e largura Válidas");
        return;
    }

    let perimetroR = (altura*2) + (largura*2);
    exibirTexto('#AlturaeLargura', `O Perímetro do Retângulo é: ${perimetroR}`);
}

function CalcularAreaCirculo(raio){
    if(isNaN(raio) || raio < 0){
        exibirTexto('#ResultadosCirculo', "Digite um valor de raio válido");
        return;
    }

    let pi = 3.14
    let areaC = pi * (raio*raio);
    exibirTexto('#ResultadosCirculo', `A Área do Círculo é: ${areaC}`);
}

function calculaPerimetroCirculo(raio){
    if(isNaN(raio) || raio < 0){
        exibirTexto('#ResultadosCirculo', "Digite um valor de raio válido");
        return;
    }

    let pi = 3.14
    let perimetroC = 2 * pi * raio;
    exibirTexto('#ResultadosCirculo', `O Perímetro do Círculo é: ${perimetroC}`);
}

