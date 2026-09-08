exibirOlaMundo();
function exibirOlaMundo(){
    alert("Olá Mundo")
}

//////////////////////////////////////////////////////////////////////////////////

let Nome = prompt('Digite o seu Nome:');
exibirOlaNome(Nome);
function exibirOlaNome(Nome){
    return alert(`Olá, ${Nome}`)
};

//////////////////////////////////////////////////////////////////////////////////

let N1 = parseInt(prompt('Escreva um número:'));
alert(dobrarON1(N1));
function dobrarON1(N1){
    return N1 * 2;
}

//////////////////////////////////////////////////////////////////////////////////

let Pnum = parseInt(prompt('Digite o primeiro Número:'));
let Snum = parseInt(prompt('Digite o segundo Número:'));
let Tnum = parseInt(prompt('Digite o terceiro Número:'));

alert(calcularMedia(Pnum, Snum, Tnum));
function calcularMedia(Pnum, Snum, Tnum){
    let Media = (Pnum + Snum + Tnum) / 3;
    return Media;
}

//////////////////////////////////////////////////////////////////////////////////

let fnum = parseInt(prompt('Digite o primeiro Número:'));
let lnum = parseInt(prompt('Digite o segundo Número:'));

alert(exibirMaiorNum(fnum, lnum));
function exibirMaiorNum(fnum, lnum){
    if (fnum > lnum){
        return `O maior número é o ${fnum}`
    } else if(lnum > fnum){
        return `O maior número é o ${lnum}`
    } else{
        return 'Os dois números são iguais'
    }
}

//////////////////////////////////////////////////////////////////////////////////

let Anum = parseInt(prompt('Escreva um número:'));
alert(multiplicaPorEleMsm(Anum));
function multiplicaPorEleMsm(Anum){
    return Anum * Anum;
}