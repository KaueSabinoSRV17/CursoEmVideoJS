function component(tag, text, id, cls) {
    // Teste: uma função com id e classe, um de cada, ou nenhum
    let id_and_class = id != null && cls != null
    let id_only = id != null
    let cls_only = cls != null
    if (id_and_class) {return `<${tag} id="${id}" class="${cls}">${text}</${tag}>`} 
    else if (id_only) {return `<${tag} id="${id}">${text}</${tag}>`} 
    else if (cls_only) {return `<${tag} class="${cls}">${text}</${tag}>`} 
    else return `<${tag}>${text}</${tag}>`
}

// Elementos por Classe
    const card = document.getElementsByClassName('menu')[0]

// Elementos por Query Selector
    const classe_secreta = document.querySelector('.classe-secreta')

// Alguns "metadados"
    const navegador = window.navigator.appName
    const url = window.document.URL

// Componentes da página
    const title = component('h1', 'Estou invadindo este Conteúdo para explicar um pouco sobre a DOM')
    const p1 = component('p', '')
    const p2 = component('p','Podemos modificar a dom escrevendo html dentro dela, e acessando os seus elementos. a window, a document e a body sempre serão elementos, para outros devemos dar um atributo HTML id com nossa preferência. todo Elemento é um objeto com métodos que podemos usar para acessar seus elementos filhos. são estes: ')
    const list = component('ul',
        `<li>Tags - Devemos acessar a partir da body</li>
        <li>Id - Podemos atribui-lo como parâmetro HTML</li>
        <li>Nome - Usado em formulários</li>
        <li>Classe - Declarando como Id</li>
        <li>QuerySelector</li>`
    )
    const p3 = component('p', `Se quisermos repetir exatamente o segundo parágrafo, podemos fazer assim: ${p2}`)
    const bonus = component('p', `Sabia que o navegador que você está usando agora mesmo é o... ${navegador === 'Netscape' ? 'Netscape? Não, provavelmente é um Live Server kkkk' : navegador}<br>A sua URL atual é ${url}`)
    const secret = component('p', '', null, 'classe-secreta')

// Renderização de todos os componentes na tela
    card.innerHTML = title + p1 + p2 + p3 + list + bonus + secret

// Não podemos chamar ids de componentes feitos pelo Javascript. vamos ter varrer a página de forma de separada
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