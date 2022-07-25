// Funções
    function printing_precedence_tests(array, length) {
        for (let i = 0; i < length; i++) {
            const element = array[i];
            return `Teste ${i}: ${element}`
        }
    }

// Variáveis - let, pois trocarão de valor em tempo de execução!
    // Resultado = 9
        let a = 6 + 3
    // Resultado = 4
        let b = a % 5

    // Testes de precedência

        // Aqui, a potência será feita primeiro, mesmo que ela esteja no final da expressão. Resultado = 80
            let c = 5 * b ** 2
        // Aqui a divisão será feita primeiro, mesmo que ela esteja no final da expressão. Resultado = 5.5
            let d = 10 - a / 2
        // Aqui será feita a multiplicação primeiro, que está na mesma hierarquia da divisão, mas apareceu primeiro na expressão. Resultado = 82.5
            let e = 5 * 3 / d
        // Aqui, tudo está na mesma hierarquia, então também será feito o que aparecer primeiro na expressão
            let f = b % e + 4 / e

let lista_de_testes = [a, b, c, d, e, f]

// \n = Quebra de linha. \t = seta
    alert('Operadores\n     Os Operadores podem ser os seguintes:\n+: Soma\n-: Subtração\n*: Multiplicão\n/: divisão comum\n%: resto de divisão inteira\n**: potência')
    alert('Ordem de precedência\n( ): Parênteses\n**: Potência\n*, /, %: Multiplicação, Divisão ou Resto (O que vier primeiro) \n+, - (Soma e subtração) o que vier primeiro.')
    alert(`Gabarito:\n${a}\n${b}\n${c}\n${d}\n${e}\n${f}`)
    alert(`Auto Atribuições\n"n = n + 4" = "n += 4"\n"n = n - 4" = "n -= 4"\n"n = n * 4" = "n *= 4"\n"n = n / 4" = "n /= 4"\n"n = n ** 4" = "n **= 4"\n"n = n % 4" = "n %= 4"`)
    alert(`Incremento\n"n += 1" = "n++"\n"n -= 1" = "n--"`)