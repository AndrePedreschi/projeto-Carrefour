function abre(){
    document.getElementById('popup').style.display = 'block';
}
function fecha(){
    document.getElementById('popup').style.display = 'none';
}
document.getElementById('popup1').addEventListener("mouseover",abre);
document.querySelector('#popup1').addEventListener("mouseout",fecha);



//selecionando o modal correto

let jwt=sessionStorage.getItem('jwt');

let toggle = document.querySelectorAll(".modalToggleLogin");

if(jwt==null){
    toggle.forEach((item)=>{
        item.setAttribute("href","#exampleModalToggle")
    })
}else{
    toggle.forEach((item)=>{
        item.setAttribute("href","#modalLogin")
    }) 
}
    
//realizando o logout do usuário

function logout(){
    sessionStorage.removeItem('jwt')
    alert("Logout Realizado")
    location.reload();
}


//Desabilitando o modal login do carrinho de compras caso já sido feito o login

if(jwt != null){
    document.querySelector('.desabilitaModal').setAttribute("href","#")
}



