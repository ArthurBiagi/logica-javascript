let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//////////////////////////////////////////////////////////////////////////////

//<button onclick="verificarChute()" class="container__botao">Chute</button> No Html
function verificarChute() {
    console.log('O botão foi clicado');
}

//////////////////////////////////////////////////////////////////////////////

//<button onclick="Alerta()" class="container__botao">Alerta</button> No Html
function Alerta() {
    alert('Eu amo JS');
}

//////////////////////////////////////////////////////////////////////////////

//<button onclick="Prompt()" class="container__botao">Pergunta (prompt)</button> No Html
function Prompt() {
    let cidade = prompt("Escreva o nome de uma cidade do Brasil:");
    alert(`Estava em ${cidade} e lembrei de você`);
}

//////////////////////////////////////////////////////////////////////////////

//<button onclick="indicarNum()" class="container__botao">Efetuar Soma</button> No Html
function indicarNum() {
    let N1 = parseInt(prompt("Indique o primeiro número para a soma"));
    let N2 = parseInt(prompt("Indique o segundo número para a soma"));
    let soma = N1 + N2;
    alert(`O resultado da soma é: ${soma}`);
}