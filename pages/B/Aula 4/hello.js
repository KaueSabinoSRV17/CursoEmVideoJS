// Códigos ensinados permanecerão, mas serão refatorados com o DOM, para que sejam disparados apenas por demanda do usuário
function botao() {
    
    alert('Olá Mundo - aperte esc se quiser cancelar o código');

    var escolha = confirm('Pode me informar o seu nome?');

    if (escolha == true) {

        var nome = prompt('Obrigado, pode escreve-lo por favor!');
    
        alert(nome);
        
    } else {

        alert('Ok. tenha um bom dia!')

    }    

}


/* tentando fazer um pouco melhor (percebe minha falha? SIm, não declarei que nada era uma variável kkkkk. como pude)

 function botao() {
    
     campo = document.getElementById('nome');

     nome = campo.value

     document.write(nome)

 } */