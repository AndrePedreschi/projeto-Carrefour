//para futuras implementações
//adicionarItemSB(${i}, smartphone)



let smartphone = [
    {nome: "Smartphone Samsung A32 128GB Preto 4g Tela 6.4''", imagem: "./imgs/carros3-1.png", valor_Desconto: "1639,79", desconto: "9", valor: 1487.78, qtd: 10 },
    {nome: "Smartphone Motorola Moto G20 64GB Azul 4G tela 6.5'' Camera", imagem: "./imgs/carros3-2.png", valor_Desconto: "2252,13", desconto: "47", valor: 1199.00, qtd: 20 },
    {nome: "Smartphone Samsung Galaxy A21s 64GB Preto Tela 6.5 Pol", imagem: "./imgs/carros3-3.png", valor_Desconto: "", desconto: "", valor: 2199.00, qtd: 30 },
    {nome: "Smartphone Samsung A32 28GB Violeta 4G Tela 6.4 ''", imagem: "./imgs/carros3-4.png", valor_Desconto: "", desconto: "", valor: 1593.90, qtd: 40 },
    {nome: "Smartphone Motorola Moto G9 Play 64GB Verde Turqueza 4G", imagem: "./imgs/carros3-5.png", valor_Desconto: "", desconto: "", valor: 1699.00, qtd: 50 },
    {nome: "Iphone 11 Preto, com Tela de 6,1'', 4G, 128GB e Câmera de 12", imagem: "./imgs/carros3-6.png", valor_Desconto: "", desconto: "", valor: 4400.00, qtd: 60 },
    {nome: "Smartphone Samsung Galaxy A31 128GB Azul 6.4 Pol.", imagem: "./imgs/carros3-7.png", valor_Desconto: "1940,00", desconto: "28", valor: 1399.00, qtd: 70 },
    {nome: "Smartphone Motorola Moto E7 64GB Cinza 4G Tela 6.5'' Câmera", imagem: "./imgs/carros3-8.png", valor_Desconto: "1099,00", desconto: "10", valor: 989.10, qtd: 80 },
    {nome: "Smartphone Motorola G60S 128GB Azul 4G Câmera", imagem: "./imgs/carros3-9.png", valor_Desconto: "1965,56", desconto: "10", valor: 1769.00, qtd: 90 },
    {nome: "Smartphone Xiaomi Note 8 128GB Versão Global - Neptune Blue", imagem: "./imgs/carros3-10.png", valor_Desconto: "", desconto: "", valor: 3999.90, qtd: 100 }
];

function apagaTexto(){
    let apagaDesconto32=document.querySelectorAll(".Desconto");

    for(let i=0; i<apagaDesconto32.length;i++){
        if(smartphone[i].desconto==''){
            document.getElementById("card"+i+"Carro").classList.add('visually-hidden');
        }
    }


}


let container3 = document.getElementById("carrossel3Add"); //Alterar


//adicionar itens ao Carrossel 3 - Scroll
for(let i=0;i<smartphone.length;i++){
       
    let novaDiv3 = document.createElement("div");
    novaDiv3.classList.add('divConfig')
    novaDiv3.innerHTML = `
    <a class="carroCard-ancora carroCard">
            <div class="carroCard-imagens">
                <img class="carroCard-img" src=${smartphone[i].imagem} alt="">
                <img  class="carroCard-coracao" src="./imgs/coração.png" alt="">
            </div>

            <p>${smartphone[i].nome}</p>
            <div>
                <div class="carroCard-desconto Desconto" id="card${i}Carro">
                    <p class="carroCard-taxado">R$ ${smartphone[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${smartphone[i].desconto}%</p>
                </div>
                <p class="carroCard-valor">R$ ${smartphone[i].valor.toFixed(2).replace("." , ",")}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
            <button onclick="adicionarItem(${i}, smartphone), limparCarrinho()" class="botaoAddCarrinho">Adicionar ao Carrinho</button>
    </a>` 

    
    container3.appendChild(novaDiv3);
            
}

apagaTexto();



let container31 = document.querySelector('#innerCards31');
for(let i=0; i<5;i++){

    let novaDiv31 = document.createElement('div');

    novaDiv31.innerHTML = `
    <div> <a class="carroCard-ancora carroCard">
    
            <div class="carroCard-imagens">
    
                <img class="carroCard-img" src=${smartphone[i].imagem} alt="">
                <img  class="carroCard-coracao" src="./imgs/coração.png" alt="">
    
            </div>
    
            <p>${smartphone[i].nome}</p>
            <div>
            
                <div class="carroCard-desconto testeDesconto1" id="card${i}Carro">
                    <p class="carroCard-taxado">R$ ${smartphone[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${smartphone[i].desconto}%</p>
                </div>
            
                <p class="carroCard-valor">R$ ${smartphone[i].valor.toFixed(2).replace("." , ",")}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
            <button onclick="adicionarItem(${i}, smartphone), limparCarrinho()" class="botaoAddCarrinho">Adicionar ao Carrinho</button>
        </a></div>`
               
        container31.appendChild(novaDiv31.lastChild);

}


let container32 = document.querySelector('#innerCards32');  
for(let i=5; i<10;i++){

    let novaDiv32 = document.createElement('div');

    novaDiv32.innerHTML = `
    <div> <a class="carroCard-ancora carroCard">
    
            <div class="carroCard-imagens">
    
                <img class="carroCard-img" src=${smartphone[i].imagem} alt="">
                <img  class="carroCard-coracao" src="./imgs/coração.png" alt="">
    
            </div>
    
            <p>${smartphone[i].nome}</p>
            <div>
           
                <div class="carroCard-desconto testeDesconto1" id="card${i}Carro">
                    <p class="carroCard-taxado">R$ ${smartphone[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${smartphone[i].desconto}%</p>
                </div>
            
                <p class="carroCard-valor">R$ ${smartphone[i].valor.toFixed(2).replace("." , ",")}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
            <button onclick="adicionarItem(${i}, smartphone), limparCarrinho()" class="botaoAddCarrinho">Adicionar ao Carrinho</button>
        </a></div>`

        container32.appendChild(novaDiv32.lastChild);

}


apagaTexto();



//, adicionarBD(${i}, smartphone)