function logar(){
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    
    if(login=="adm" && senha=="1234"){
        alert("usuario autenticado");
        location.href ="principal.html"
        alert("Bem vindo ao\nRevenda cripto-moedas Etherium");
        
    }else{
        alert("login ou senha invalida!");
    }
}