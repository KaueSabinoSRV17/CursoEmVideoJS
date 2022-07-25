// Função que soma os dois valores que vieram
    function soma(a, b) {
        return a + b
    }

// Variáveis
    const nome = prompt('Me diga por favor o seu nome!')
    const valor_monetario = 1500.4556

// Caso o valor do primeiro prompt seja nulo, vamos retornar o erro rapidamente
    if (nome != '' && nome != null) {
        alert(`Seja bem vindo, ${nome}!\nO seu nome em maúsculas: ${nome.toUpperCase()}\nEm minúsulas: ${nome.toLowerCase()}\nA propósito, ele tem ${nome.length} letras.\n\nVou pedir agora para você me digitar 2 números que serão somados.`)
        alert(`O resultado seria: ${

                soma(
                    Number.parseFloat(
                        prompt('Digite o primeiro número')
                    ),
                    Number.parseFloat(
                        prompt('Digite o segundo número')
                    )
                )

            }`)
        alert(`Podemos ter as vezes a necessidade de Formatar também números. Por padrão o JS mostra reais com . ao invés de ,. podemos mudar isso assim, primeiro fixando o valor em um número de casas decimais e ao mesmo tempo o transformando em uma String: ${valor_monetario.toFixed(2).replace('.', ',')}\n\nApesar da interpolação tornar fácil a formatação de moedas, ela não é necessária. segue a função: ${

            valor_monetario.toLocaleString(
            'pt-br',
            {
                style: 'currency',
                currency: 'BRL'
            }
        ).replace('.', ',')

    }`)
} else {
    alert('Valor nulo!')
}
