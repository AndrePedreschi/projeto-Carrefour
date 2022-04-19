//Para Futuras implementações
//adicionarItemSB(${i}, novidades)



let novidades = [ 
    {nome: "Dark Évora Pw Darkness 300g vários Saboras Integralmédica", imagem: "./imgs/carros4-1.png", valor_Desconto: '', desconto: '', valor: 109.90, qtd: 10 },
    {nome: "Notebook Acer Intel Core i5 8GB 256GB SSD 15,6'' IPS Windows 11", imagem: "./imgs/carros4-2.png", valor_Desconto: "3999,00", desconto: '17', valor: 3324.05, qtd: 20 },
    {nome: "Smartphone Samsung Galaxy S22 Ultra 256GB Preto 5G Tela", imagem: "./imgs/carros4-3.png", valor_Desconto: "9.499,00", desconto: '10', valor: 8549.10, qtd: 30 },
    {nome: "Smartphone Samsung Galaxy A03s 64GB Azul 4G Tela''", imagem: "./imgs/carros4-4.png", valor_Desconto: '', desconto: '', valor: 999.00, qtd: 40 },
    {nome: "Kit 05 Toalhas de Banho Prática Secagem Rápida 100% Algodão", imagem: "./imgs/carros4-5.png", valor_Desconto: '', desconto: '', valor: 105.90, qtd: 50 },
    {nome: "Aspirador de Pó e Água Electrolux 1250W Preto e Azul", imagem: "./imgs/carros4-6.png", valor_Desconto: '', desconto: '', valor: 279.00, qtd: 60 },
    {nome: "Purificador de Água Premium Colormaq CPUHFBA1", imagem: "./imgs/carros4-7.png", valor_Desconto: '', desconto: '', valor: 739.00, qtd: 70 },
    {nome: "Liquidificados Philips Walita Daily RI2110 Pro Blend 550W 2l", imagem: "./imgs/carros4-8.png", valor_Desconto: '', desconto: '', valor: 128.90, qtd: 80 },
    {nome: "Bule Térmico Viena 1 Litro Com Gatilho Invicta French Gold", imagem: "./imgs/carros4-9.png", valor_Desconto: '', desconto: '', valor: 59.99, qtd: 90 },
    {nome: "Kit 4 Pneus Aro 14 Pneu Barum 185 60R14 82H", imagem: "./imgs/carros4-10.png", valor_Desconto: "1.316,00", desconto: '10', valor: 1184.40, qtd: 100 }
];



function apagaTexto2(){
    let apagaDesconto32=document.querySelectorAll(".Desconto");

    for(let i=0; i<apagaDesconto32.length;i++){
        if(novidades[i].desconto==''){
            document.getElementById("cards"+i+"Carro").classList.add('visually-hidden');
        }
    }

}


let container4 = document.getElementById("carrossel4Add");
//adicionar itens ao Carrossel 4 - Scroll
for(let i=0;i<10;i++){
       
    let novaDiv4 = document.createElement('div');

    novaDiv4.innerHTML = `
    <a class="carroCard-ancora carroCard">
            <div class="carroCard-imagens">
                <img class="carroCard-img" src=${novidades[i].imagem} alt="#">
                <img  class="carroCard-coracao" src="./imgs/coração.png" alt="#">
            </div>

            <p>${novidades[i].nome}</p>
            <div>
                <div class="carroCard-desconto testeDesconto" id="cards${i}Carro">
                    <p class="carroCard-taxado">R$ ${novidades[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${novidades[i].desconto}%</p>
                </div>
                <p class="carroCard-valor">R$ ${novidades[i].valor.toFixed(2).replace("." , ",")}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
            <button onclick="adicionarItem(${i}, novidades)" class="botaoAddCarrinho">Adicionar ao Carrinho</button>
    </a>` 

    
    container4.appendChild(novaDiv4);
            
}

apagaTexto2();


let container41 = document.querySelector('#innerCards41');
for(let i=0; i<5;i++){

    let novaDiv41 = document.createElement('div');

    novaDiv41.innerHTML = `
    <div> <a class="carroCard-ancora carroCard">
    
            <div class="carroCard-imagens">
    
                <img class="carroCard-img" src=${novidades[i].imagem} alt="">
                <img class="carroCard-coracao" src="./imgs/coração.png" alt="">
    
            </div>
    
            <p>${novidades[i].nome}</p>
            <div>
            
                <div class="carroCard-desconto testeDesconto1" id="cards${i}Carro">
                    <p class="carroCard-taxado">R$ ${novidades[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${novidades[i].desconto}%</p>
                </div>
            
                <p class="carroCard-valor">R$ ${novidades[i].valor.toFixed(2).replace("." , ",")}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
            <button onclick="adicionarItem(${i}, novidades)" class="botaoAddCarrinho">Adicionar ao Carrinho</button>
        </a></div>`
               
        container41.appendChild(novaDiv41.lastChild);

}


let container42 = document.querySelector('#innerCards42');
for(let i=5; i<10;i++){

    let novaDiv42 = document.createElement('div');

    novaDiv42.innerHTML = `
    <div> <a class="carroCard-ancora carroCard">
    
            <div class="carroCard-imagens">
    
                <img class="carroCard-img" src=${novidades[i].imagem} alt="">
                <img class="carroCard-coracao" src="./imgs/coração.png" alt="">
    
            </div>
    
            <p>${novidades[i].nome}</p>
            <div>
           
                <div class="carroCard-desconto testeDesconto1" id="cards${i}Carro">
                    <p class="carroCard-taxado">R$ ${novidades[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${novidades[i].desconto}%</p>
                </div>
            
                <p class="carroCard-valor">R$ ${novidades[i].valor.toFixed(2).replace("." , ",")}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
            <button onclick="adicionarItem(${i}, novidades)" class="botaoAddCarrinho">Adicionar ao Carrinho</button>
        </a></div>`

        container42.appendChild(novaDiv42.lastChild);

}


apagaTexto2();
