var escolha = prompt('1 para somar, 2 para concatenar, 3 para template strings, 4 para saber o comprimento, 5 para gritar, 6 para salários com casas decimais e localizados');

//usando switch case para não usar milhares de linhas em if. (não estou conseguindo fazer no momento. descomentar depois)

/*switch (escolha) {
    case 1:
        console.log('entrou')
        var input1 = Number(prompt('Digite um número'))

        var input2 = Number(prompt('Digite outro número por favor'))

        var soma = input1 + input2

        alert(soma)
        break;

    case 2:
        alert('ainda não implementado')
        break;
}*/

if (escolha == 1) { // devo usar let para que seja uma variável apenas local? descobriremos nos próximos episódios

        console.log('a operação entrou!')
        
        //number aqui é uma forma de converter rapidamente esta string para um número, para que a operação seja mesmo uma soma
        let input1 = Number(prompt('Digite um número')) 

        let input2 = Number(prompt('Digite outro número por favor'))

        let soma = input1 + input2

        alert(soma)    
    
}

if (escolha == 2) {
    
        console.log('a operação entrou!') //este comando mostra a string desejada no console. estou usando para saber que o programa está entrando no if
        
        let input1 = prompt('Digite um número')

        let input2 = prompt('Digite outro número por favor')

        let soma = input1 + input2

        alert(soma)

}

if (escolha == 3) {

    console.log('a operação entrou!')

    let nome = prompt('Digite o seu primeiro nome: ')

    let sobrenome = prompt('Digite agora o seu sobrenome')

    alert(`O seu nome completo é ${nome} ${sobrenome}`)
    
}

if (escolha == 4) {


    console.log('a operação entrou!')

    let palavra = prompt('Digite qualquer palavra que quiser')

    alert(`A palavra que você digitou tem exatamente ${palavra.length} letras!`)

    /*

    este código aqui constata que o .length retorna um valor number, não string

        let soma = 1 + palavra.length
    
        alert (soma)
    */
    
}

if (escolha == 5) {

    console.log('a operação entrou!')
    
    let grito = prompt('Grite alguma coisa!')

    alert(grito.toUpperCase()) //nesta função precisamos finaliza-la com ()!
    
}

if (escolha == 6) {

    console.log('a operação entrou!')

    let salario = Number(prompt('Me conte qual é o seu salário'))

    alert(`Seu salário está cotado no valor de : ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)

    alert(`Formatado estaria ${salario.toFixed(2).replace('.', ',')}`) //não consegui incluir este código direto no alert aqui de cima. fico em dúvida

}