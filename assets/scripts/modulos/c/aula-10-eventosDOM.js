// Funções Utilitárias
    // Cria o Componente o adiciona ao Elemento Pai
        function componentIncrementingParentHtml(tag, text, parent, id, cls) {
            let id_and_class = id != null && cls != null
            let id_only = id != null
            let cls_only = cls != null
            text == null ? '' : text
            if (id_and_class) {result = `<${tag} id="${id}" class="${cls}">${text}</${tag}>`} 
            else if (id_only) {result = `<${tag} id="${id}">${text}</${tag}>`} 
            else if (cls_only) {result = `<${tag} class="${cls}">${text}</${tag}>`} 
            else result = `<${tag}>${text}</${tag}>`
            parent.innerHTML += result
            return parent
        }
    // Retorna o HTMl do componente, sem adiciona-lo a um pai
        function component(tag, text, id, cls) {
            let id_and_class = id != null && cls != null
            let id_only = id != null
            let cls_only = cls != null
            text == null ? '' : text
            if (id_and_class) {return `<${tag} id="${id}" class="${cls}">${text}</${tag}>`} 
            else if (id_only) {return `<${tag} id="${id}">${text}</${tag}>`} 
            else if (cls_only) {return `<${tag} class="${cls}">${text}</${tag}>`} 
            return `<${tag}>${text}</${tag}>`
        }
    // Input    
        function input(type, id, name, cls, placeholder, parent) {
            parent.innerHTML += `<input type="${type}" id="${id}" name="${name}" class="${cls}" placeholder="${placeholder}">`
        }
// HTML
    // Elementos Nativos do HTML
        const body = document.querySelector('.landing-page')
        const menu = document.querySelector('.menu')
    // Rendereização de ComponentIncrementingParentHtmles
        menu.innerHTML = ''
        componentIncrementingParentHtml('h1', 'Eventos DOM', menu)
        componentIncrementingParentHtml('p', 'Podemos trabalhar com eventos na DOM usando o método addEventListener, presente em todos os elementos HTML.', menu)
        componentIncrementingParentHtml('div', component('h1', 'Div Interativa', 'divTitle'), menu, 'div')
        componentIncrementingParentHtml('div', `${component('h1', 'Calculadora')}${input('number', 'n1', 'n1', 'n1', '')}`, menu, 'calc')
// Estilos
    // Seleção dos Elementos
        const div = document.getElementById('div')
        const divTitle = document.getElementById('divTitle')
        const calc = document.getElementById('calc')
    // Body
        body.style.backgroundColor = 'black'
    // Menu
        menu.style.height = '50vw'
    // Div
        div.style.borderRadius = '1rem'
        div.style.backgroundColor = 'green'
        div.style.marginInline = 'auto'
        div.style.padding = '1.5rem'
        div.style.width = '30vw'
        div.style.height = '30vw'
    // Título da Div
        divTitle.style.textAlign = 'center'
    // Calculadora
        calc.style.marginTop = '1rem'
        calc.style.textAlign = 'center'
// Eventos
    // Clicar o mouse na div
        div.addEventListener('click', () => {
            div.innerHTML = component('h1', 'Clicou!')
            div.innerHTML += component('button', 'Reset', 'btn')
            div.style.textAlign = 'center'
            div.style.backgroundColor = 'red'
        })
    // Entrar com o mouse   
        div.addEventListener('mouseenter', () => {
            div.innerHTML = component('h1', 'Mouse entrou!')
            div.style.textAlign = 'center'
            div.style.backgroundColor = 'yellow'
        })
    // Sair com o mouse
        div.addEventListener('mouseleave', () => {
            div.innerHTML = component('h1', 'Mouse Saiu!')
            div.style.backgroundColor = 'green'
        })