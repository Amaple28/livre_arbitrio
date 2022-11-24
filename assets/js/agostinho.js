// ao clicar na tela redirecionar para a pagina exemplo

$(document).ready(function(){
    $("body").click(function(){
        console.log("clicou");
        window.location.href = "caminho.html";
    });
});
