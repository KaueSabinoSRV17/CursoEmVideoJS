//treinei no console do devTolls do chrome, acreditem kkk. é um substituito muito bom ao node (atualmente estou sem um PC próprio, então o Node, que é apenas para administradores, se torna inviável para mim no momento)

//nome de variável grande. deve ser uma má prática, mas pensei na possibllidade de muitos outros erros diferentes em todo o script. uma praticidade maior saber do que se trata cada um no topo do código, em sua variável

var digitoInvalidoNoPrompt = "DIGITE APENAS UMA DAS OPÇÕES LISTADAS!"

var escolha = prompt('escolha um número de 0 a 4')

if (escolha == 0) {

    let teste1 = 2+4**9

    let teste2 = 4**9+2

    alert(teste1)

    alert(`${teste2}. Você notou alguma diferença? Exato! a pontenciação sempre será executada na frente, mesmo que ela comece ou termine a expressão aritimética`)
    
} 

if (escolha == 1) {

    let teste1 = 2/4*9

    let teste2 = 4*9/2

    alert(teste1)

    alert(`${teste2}. Neste teste há diferença. Os Operadores de Divisão "/", Muliplicação "*", Potenciação "**", e Resto "%" estão na mesma hierarquia, mas sã executados por "ordem de chegada"`)
    
} 

if (escolha == 2) {

    let teste1 = (2+4)**9

    let teste2 = (4**9)+2

    alert(teste1)

    alert(`${teste2}. O que está em parênteses sempre terá prioridade máxima!`)
    
} 

if (escolha == 3) {

    let teste1 = 2+4*9

    let teste2 = 4*9+2

    alert(teste1)

    alert(`${teste2}. Mais uma vez, sem diferença na ordem dos resultados`)
    
} 

if (escolha == 4) {

    let teste1 = 10/2%2

    let teste2 = 2%2/10

    alert(teste1)

    alert(`${teste2}. Neste, o que aparecer primeiro vai ser executado primeiro`)
    
} 


else {

    alert(digitoInvalidoNoPrompt)

}
