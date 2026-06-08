function exibirOlaMundo(){
    alert("Olá Mundo")
}

//////////////////////////////////////////////////////////////////////////////////

let Nome = prompt('Digite o seu Nome:');
let ExibeTexto = exibirOlaNome();
function exibirOlaNome(Nome){
    return alert(`Olá, ${Nome}`)
};

//////////////////////////////////////////////////////////////////////////////////

let N1 = prompt('Escreva um número:');
let dobro = dobroDoN1();
function dobrarON1(N1){
    return N1 * 2
}