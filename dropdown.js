/*
Precisei de um vídeo do Web Dev Simplefied (link: https://www.youtube.com/watch?v=S-VeYcOCFZw) que mostrava como fazer um menu dropdown com CSS e JS. usarei pela primeira vez arrow functions

são tecnicamente chamadas de funções anônimas, onde se aponta " nomeFunção => {código da função}"

document.addEventListener('click', e => {

    const checkDropDown = e.target.matches('[data-dropdown-button]')

    if (!checkDropDown && e.target.closest('[data-dropdown]') != null) return

    let = currentDropdown

    if (checkDropDown) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toogle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(fechaDropDown => {
        if (fechaDropDown === currentDropdown) return
        fechaDropDown.classList.remove('active')
    })

})

*/

//o nome da arrow function no video é apenas e. vou manter assim, parece ser uma convenção eficiente
