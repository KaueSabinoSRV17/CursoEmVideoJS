// Códigos ensinados permanecerão, mas serão refatorados com o DOM, para que sejam disparados apenas por demanda do usuário
function botao() {
    
    alert('Olá Mundo - aperte esc se quiser cancelar o código');

    var escolha = confirm('Pode me informar o seu nome?');

    if (escolha == true) {

        var nome = prompt('Obrigado, pode escreve-lo por favor!');
    
        alert('Olá, seja bem vindo, ' + nome + '!');
        
    } else {

        alert('Ok. tenha um bom dia!')

    }    

}