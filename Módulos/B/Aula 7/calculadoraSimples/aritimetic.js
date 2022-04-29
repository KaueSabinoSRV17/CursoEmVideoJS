//a chamada dos elementos do DOM pode ser feita a nível de código, para nunca ser repetida dentro de nunhuma função
var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')
var res = document.getElementById('resultado')


//não consegui chamar os inputs também a nível de código. o arquivo inteiro estaria bem mais limpo neste caso...
function soma() {

    let n1 = Number(input1.value)
    let n2 = Number(input2.value)

    let soma = n1+n2

    res.innerHTML = `O resultado da soma foi ${soma}`

}
function subtracao() {

    let n1 = Number(input1.value)
    let n2 = Number(input2.value)

    let subtracao = n1-n2

    res.innerHTML = `O resultado da subtração foi ${subtracao}`

}
function multiplicacao() {

    let n1 = Number(input1.value)
    let n2 = Number(input2.value)

    let multiplicacao = n1*n2

    res.innerHTML = `O resultado da multiplicação foi ${multiplicacao}`

}
function divisao() {

    let n1 = Number(input1.value)
    let n2 = Number(input2.value)

    let divisao = n1/n2

    res.innerHTML = `O resultado da divisão foi ${divisao}`

}
function potencia() {

    let n1 = Number(input1.value)
    let n2 = Number(input2.value)

    let potencia = n1**n2

    res.innerHTML = `O resultado da potência foi ${potencia}`

}

function resto() {

    let n1 = Number(input1.value)
    let n2 = Number(input2.value)

    let resto = n1%n2

       res.innerHTML = `O resultado da resto foi ${resto}`

}

//vai deixar o prompt mais vazio novamente
function limpar() {

    res.innerHTML = ""

}