let Altura = prompt('Indique a altura da pessoa:');
let Peso = prompt('Indique o peso da pessoa:');


function calculoIMC(Altura, Peso) {
    let IMC = Peso / (Altura * Altura);
    return IMC;
}
