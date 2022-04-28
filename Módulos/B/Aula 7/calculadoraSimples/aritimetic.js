var escolha = Number(prompt('1 para soma, 2 para substração, 3 para muliplicação, 4 para divisão, 5 para resto, 6 para potenciação'))

//mal posso esperar para aprender a usar o switch case :/

//a conversão acima é válida pois este if aqui de baixo pede que a escolha tenha o mesmo valor e o mesmo tipo

if (escolha === 1) {

    let input1 = Number(prompt('Primeiro número'))

    let input2 = Number(prompt('Segundo número'))

    let soma = input1 + input2

    alert(soma)
    
}

if (escolha == 2) {

    let input1 = Number(prompt('Primeiro número'))

    let input2 = Number(prompt('Segundo número'))  

    let substracao = input1 - input2

    alert(substracao)
    
}

if (escolha == 3) {

    let input1 = Number(prompt('Primeiro número'))

    let input2 = Number(prompt('Segundo número'))  

    let multiplicacao = input1 * input2

    alert(multiplicacao)
    
}

if (escolha == 4) {

    let input1 = Number(prompt('Primeiro número'))

    let input2 = Number(prompt('Segundo número'))  

    let divisao = input1 / input2

    alert(divisao)
    
}

if (escolha == 5) {

    let input1 = Number(prompt('Primeiro número'))

    let input2 = Number(prompt('Segundo número'))  

    let resto = input1 % input2

    alert(resto)
    
}

if (escolha == 6) {

    let input1 = Number(prompt('Primeiro número'))

    let input2 = Number(prompt('Segundo número'))  

    let potencia = input1 ** input2

    alert(potencia)
    
}