// Elementos por Classe
    const card = document.getElementsByClassName('menu')[0]

// Elementos por Query Selector
    const classe_secreta = document.querySelector('.classe-secreta')

// Alguns "metadados"
    const navegador = window.navigator.appName
    const url = window.document.URL

// Variáveis. Vou separar todo o texto da página
    const title = `<h1>Estou invadindo este Conteúdo para explicar um pouco sobre a DOM</h1>`
    const p1 = '<p></p>'
    const p2 = `<p>Podemos modificar a dom escrevendo html dentro dela, e acessando os seus elementos. a window, a document e a body sempre serão elementos, para outros devemos dar um atributo HTML id com nossa preferência. todo Elemento é um objeto com métodos que podemos usar para acessar seus elementos filhos. são estes: </p>`
    const list = `<ul>
        <li>Tags - Devemos acessar a partir da body</li>
        <li>Id - Podemos atribui-lo como parâmetro HTML</li>
        <li>Nome - Usado em formulários</li>
        <li>Classe - Declarando como Id</li>
        <li>QuerySelector</li>
    </ul>`
    const p3 = `<p>Se quisermos repetir exatamente o segundo parágrafo, podemos fazer assim: ${p2}</p>`
    const bonus = `<p>Sabia que o navegador que você está usando agora mesmo é o... ${window.navigator.appName === 'Netscape' ? 'Netscape? Não, provavelmente é um Live Server kkkk' : navegador}<br>A sua URL atual é ${url}</p>`
    const secret = '<p class="classe-secreta"></p>'

// Concatenação de todas as strings
    html = title + p1 + p2 + p3 + list + bonus + secret

    card.innerHTML = html

// Esta Constante SEMPRE serão o primeiro e segundo parágrafo
    const primeiro_paragrafo = document.getElementsByTagName('p')[0]
    const segundo_paragrafo = document.getElementsByTagName('p')[1]
    const bonus_paragrafo = document.getElementsByTagName('p')[5]
// Vamos atribuir estilos aos elementos da página. Cada propriedade CSS é um atributo, e não um método!
    menu.style.height = 'fit-content'
    bonus_paragrafo.style.marginTop = '5rem'
    primeiro_paragrafo.innerHTML += `<h1>Fim do primeiro parágrafo.</h1>`
    primeiro_paragrafo.style.marginTop = '1rem'
    segundo_paragrafo.style.backgroundColor = '#efd81d'
    segundo_paragrafo.style.padding = '1rem'
    segundo_paragrafo.style.borderRadius = '2rem'