/* const produtosObjeto = {
    nome: "",
    valor: "", 
} */
//console.log(produtosObjeto);

/* function adicionarBD(n, arrayDados) {
    var valor = arrayDados[n].valor;
    var nome = arrayDados[n].nome;
    produtosObjeto.nome=nome;
    produtosObjeto.valor=valor;

    let endPointDados = "http://localhost:3000/auth/inserirBD";

    let produtosJson = JSON.stringify(produtosObjeto);
    
    let configuracaoRequisicao = {
    method: 'POST',
    body: produtosJson,
    headers: {
        'content-type': 'application/json'
        }
    }
    
    fetch(endPointDados, configuracaoRequisicao).then(
        resultado=>{
            return resultado.json();
            
    }).then(
        resultado =>{
            console.log(resultado);
            

        }).catch(
        erro=>{
            console.log(erro);
            
        });


}

 */




/* botaoAddBD.addEventListener('click', function(evento){

    if (validacaoTelaDeSignup()) {
        evento.preventDefault();
        
        

        
        


        

        
        

        fetch(endPointLogin, configuracaoRequisicao).then(
            resultado=>{
                if(resultado.status == 201){
                    return resultado.json();
                }
                throw resultado;
        }).then(
            resultado =>{
                cadastroSucesso(resultado.jwt)
                

            }).catch(
            erro=>{
                cadastroErro(erro)
                if(erro.status==400){
                    alert("Usuário já cadastrado")
                    
                }
            });

        

    } else {
        alert("Todos os campos devem ser informados")
        evento.preventDefault(); //Não permite que o formulário seja executado / realizado o 'submit'
    }
}); */