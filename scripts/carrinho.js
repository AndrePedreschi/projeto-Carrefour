//Função abrir o carrinho de compras
function abreCarrinho() {
    let jwt=sessionStorage.getItem('jwt');
    if(jwt!==null){
        document.querySelector('.carrinhoPopup').classList.remove('visually-hidden');
        document.querySelector('.carrinhoPopup').style.display = 'block';

        /* document.querySelector('carrinhoPopupSidebar').classList.remove('visually-hidden');
        document.querySelector('carrinhoPopupSidebar').style.display = 'block'; */
    }
    
    
}
/* document.querySelector(".testeq").addEventListener('mouseover',abre) */

//função fechar o carrinho de compras
function fechaCarrinho() {
    //let comportamento = document.getElementById('blockComportamento');
    //comportamento.preventDefault();

    document.querySelector('.carrinhoPopup').classList.add('visually-hidden');
    /* document.querySelector('.carrinhoPopup').style.display = 'none'; */
    

   /*  document.querySelector('carrinhoPopupSidebar').classList.add('visually-hidden'); */
    
}


let valorTotal = [0];
let soma = 0;
let jason = [];


//Realiza a somatória de valores do carrinho de compra
function somatoria() {

    soma = valorTotal.reduce(function (acumulador, valor) {
        return acumulador + valor;
    });

    if (soma == 0) {
        document.getElementById('carrinhoTotal').innerHTML = "Total do carrinho de compras R$0,00";
    } else {
        document.getElementById('carrinhoTotal').innerHTML = "Total do carrinho de compras R$" + soma.toFixed(2).replace("." , ",");
    }

}

//Exclui o carrinho inteiro de compras
function excluirCarrinho() {
    let itens = document.querySelectorAll('#itens option');
    itens.forEach(iten => {
        iten.remove();
    })
    valorTotal = [0];
    somatoria();
    jason = [];
    document.getElementById('contagem').innerText = valorTotal.length - 1;
}

//Exclui um item do carrinho de compras
function excluirItemSelecionado() {
    
    if (itens.selectedIndex == -1) {
        alert("Selecine um item da Lista!");
        return;
    }
    var indice = itens.options[itens.selectedIndex].index;
    itens.removeChild(itens[indice]);
    valorTotal.splice(indice, 1,);
    somatoria();
    jason.splice(indice, 1,);
    document.getElementById('contagem').innerText = valorTotal.length - 1;
}


//Adiciona um item ao carrinho de compras
function adicionarItem(n, arrayDados) {
    var valor = arrayDados[n].valor;
    var nome = arrayDados[n].nome.slice(0,35);


    valorTotal.unshift(valor);
    somatoria();

    var itens = document.getElementById("itens");
    var option = document.createElement("option");

    option.text = nome + " = R$" + valor.toFixed(2).replace("." , ",");
    console.log(option);
    itens.add(option, itens[0]);

    jason.push(arrayDados[n]);

    document.getElementById('contagem').innerText = valorTotal.length - 1;
}







/* //Funções para o SB
//Exclui o carrinho inteiro de compras
function excluirCarrinho() {
    let itens = document.querySelectorAll('#itensSB option');
    itens.forEach(iten => {
        iten.remove();
    })
    valorTotal = [0];
    somatoria();
    jason = [];
    document.getElementById('contagemSB').innerText = valorTotal.length - 1;
}

//Exclui um item do carrinho de compras
function excluirItemSelecionado() {
    
    if (itens.selectedIndex == -1) {
        alert("Selecine um item da Lista!");
        return;
    }
    var indice = itens.options[itens.selectedIndex].index;
    itens.removeChild(itens[indice]);
    valorTotal.splice(indice, 1,);
    somatoria();
    jason.splice(indice, 1,);
    document.getElementById('contagemSB').innerText = valorTotal.length - 1;
}


//Adiciona um item ao carrinho de compras
function adicionarItem(n, arrayDados) {
    var valor = arrayDados[n].valor;
    var nome = arrayDados[n].nome.slice(0,35);


    valorTotal.unshift(valor);
    somatoria();

    var itens = document.getElementById("itensSB");
    var option = document.createElement("option");

    option.text = nome + " = R$" + valor.toFixed(2).replace("." , ",");
    console.log(option);
    itens.add(option, itens[0]);

    jason.push(arrayDados[n]);

    document.getElementById('contagemSB').innerText = valorTotal.length - 1;
} */




//Finalizar compra - 























function fecharCompra() {
    const produtosObjeto = {
        nome: nomeUsuario,
        produtos: jason, 
    }




    //let tokenJwtusuarioLogado = sessionStorage.getItem("jwt")


    /* let endPointDadosUsuario = "https://ctd-todo-api.herokuapp.com/v1/users/getMe";
    let configuracaoRequisicaoUsuario = {
        method: 'GET',
        headers: {
            'authorization': tokenJwtusuarioLogado
        }
    }
    //Adquirir os dados de usuário da api
    fetch(endPointDadosUsuario, configuracaoRequisicaoUsuario).then(resultado=>{           
        return resultado.json();      
        }).then(resultado =>{
       //resultado.firstName +" "+resultado.lastName
        produtosObjeto.nome = "João";
        //jason
        produtosObjeto.produtos= "teste3";   
        }).catch(erro=>{
          
            console.log(erro);
        }
    );         */
    



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
