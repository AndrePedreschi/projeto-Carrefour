let nomes = document.querySelectorAll(".nome")
let nomeUsuario="";

if(!sessionStorage.getItem("jwt") == ""){
    let tokenJwtusuarioLogado = sessionStorage.getItem("jwt")

    let endPointUsuario = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
    //let usuarioJson = JSON.stringify(usuarioObjeto);
    let configuracaoRequisicao = {
        method: 'GET',
        //body: usuarioJson,
        headers: {
            //'content-type': 'application/json'
            'authorization': tokenJwtusuarioLogado
            }
        
    }
    
    
    //Adquirir os dados de usuário da api
    fetch(endPointUsuario, configuracaoRequisicao).then(resultado=>{           
        return resultado.json();      
        }).then(resultado =>{
            
            /* console.log(resultado);*/
        
            nomes.forEach((iten)=>{
                iten.innerText = resultado.firstName;
            })

            return nomeUsuario = resultado.firstName +" "+resultado.lastName;
            /* if(!resultado==''){
                nomes.forEach((iten)=>{
                    iten.innerText = resultado.firstName;
                })
            }else{
                nomes.forEach((iten)=>{
                    iten.innerText = "Entre";
                })
            } */
            
        }).catch(erro=>{
            /* cadastroErro(erro)
            if(erro.status==400){
                alert("Usuário já cadastrado")
                        
            } */
            console.log(erro);
        }
    );
     





}else{
    nomes.forEach((iten)=>{
        iten.innerText = "Entre";
    })
}


/* onload = () =>{
    

    if(!tokenJwtusuarioLogado){
        location.href="index.html"
    }else{
        console.log(tokenJwtusuarioLogado);
    }
    //console.log(tokenJwtusuarioLogado);
} */

//console.log(tokenJwtusuarioLogado);



function limparCarrinho(){
    if(sessionStorage.getItem("jwt") == null){
        excluirCarrinho()
    }
}
    
