//Array de objetos Carrossel 2 - Novidades
let dados = [
    {nome: "carro 2", imagem: "./imgs/carros2-1.png", valor_Desconto: '', desconto: '', valor: "109,90", qtd: 10 },
    {nome: "Notebook Acer Intel Core i5 8GB 256GB SSD 15,6'' IPS Windows 11", imagem: "./imgs/carros2-2.png", valor_Desconto: "3999,00", desconto: '17', valor: "3.324,05", qtd: 20 },
    {nome: "Smartphone Samsung Galaxy S22 Ultra 256GB Preto 5G Tela", imagem: "./imgs/carros2-3.png", valor_Desconto: "9.499,00", desconto: '10', valor: "8.549,10", qtd: 30 },
    {nome: "Smartphone Samsung Galaxy A03s 64GB Azul 4G Tela''", imagem: "./imgs/carros2-4.png", valor_Desconto: '', desconto: '', valor: "999,00", qtd: 40 },
    {nome: "Kit 05 Toalhas de Banho Prática Secagem Rápida 100% Algodão", imagem: "./imgs/carros2-5.png", valor_Desconto: '', desconto: '', valor: "105,90", qtd: 50 },
    {nome: "Aspirador de Pó e Água Electrolux 1250W Preto e Azul", imagem: "./imgs/carros2-6.png", valor_Desconto: '', desconto: '', valor: "279,00", qtd: 60 },
    {nome: "Purificador de Água Premium Colormaq CPUHFBA1", imagem: "./imgs/carros2-7.png", valor_Desconto: '', desconto: '', valor: "739,00", qtd: 70 },
    {nome: "Liquidificados Philips Walita Daily RI2110 Pro Blend 550W 2l", imagem: "./imgs/carros2-8.png", valor_Desconto: '', desconto: '', valor: "128,90", qtd: 80 },
    {nome: "Bule Térmico Viena 1 Litro Com Gatilho Invicta French Gold", imagem: "./imgs/carros2-9.png", valor_Desconto: '', desconto: '', valor: "59,99", qtd: 90 },
    {nome: "Kit 4 Pneus Aro 14 Pneu Barum 185 60R14 82H", imagem: "./imgs/carros2-10.png", valor_Desconto: "1.316,00", desconto: '10', valor: "1.184,40", qtd: 100 }
];

let container2 = document.getElementById("carrossel2Add");


//adicionar itens ao Carrossel 2 - Scroll
for(let i=0;i<dados.length;i++){
       
    let novaDiv2 = document.createElement('div');

    novaDiv2.innerHTML = `
    <a class="carroCard-ancora carroCard"
            href="https://www.carrefour.com.br/auth/login?client_id=vtex&redirect_uri=https%3A%2F%2Fvtexid.vtex.com.br%2FVtexIdAuthSiteKnockout%2FReceiveAuthorizationCode.ashx&state=eyJhbGciOiJFUzI1NiIsImtpZCI6IjM1NjcyQjg1Njc5QzU5MDYxOEU2M0NBMDc5NEQwN0UwNzM0NkE0N0EiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJBRTE1QTIwOEM4NEQ3MUJGN0QyOTI3MUFBQjNBNTA3QkIyOTQ1NUM0NkJFQjVBN0YzM0JDMDAzOTk4OEFFNUUzIiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImV4cCI6MTY0ODA1NzM0MywicHJvdmlkZXIiOiJDYXJyZWZvdXIiLCJlcnJvclVybCI6Imh0dHBzOi8vd3d3LmNhcnJlZm91ci5jb20uYnIvbG9naW4_cmV0dXJuVXJsPS8iLCJpYXQiOjE2NDgwNTY3NDMsImp0aSI6IjdjNDA1ZTdkLTUwYzItNGE5OS1iNzg0LTc1YWQyNDAwMzA1ZSJ9.4SgNdBgR0oAAuFhkEOxXpyeOslZ03tiuy9uaIJWudiqoBEtqg_35AHtKzVnDZ8c6Ne4re_6ktr3TAXeNvzzp9g">
            <div class="carroCard-imagens">
                <img class="carroCard-img" src=${dados[i].imagem} alt="">
                <img class="carroCard-coracao" src="./imgs/coração.png" alt="">
            </div>

            <p>${dados[i].nome}</p>
            <div>
                <div class="carroCard-desconto testeDesconto" id="card${i}Carro">
                    <p class="carroCard-taxado">R$ ${dados[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${dados[i].desconto}%</p>
                </div>
                <p class="carroCard-valor">R$ ${dados[i].valor}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
    </a>` 

    
    container2.appendChild(novaDiv2.lastChild);
            
}

/* let apagaDesconto=document.querySelectorAll(".testeDesconto");

for(let i=0; i<apagaDesconto.length;i++){
    if(novidades[i].desconto==''){
        document.getElementById("card"+i+"Carro").classList.add('visually-hidden');
    }
} */










let container21 = document.querySelector('#innerCards21');
for(let i=0; i<5;i++){

    let novaDiv21 = document.createElement('div');

    novaDiv21.innerHTML = `
    <div> <a class="carroCard-ancora carroCard"
            href="https://www.carrefour.com.br/auth/login?client_id=vtex&redirect_uri=https%3A%2F%2Fvtexid.vtex.com.br%2FVtexIdAuthSiteKnockout%2FReceiveAuthorizationCode.ashx&state=eyJhbGciOiJFUzI1NiIsImtpZCI6IjM1NjcyQjg1Njc5QzU5MDYxOEU2M0NBMDc5NEQwN0UwNzM0NkE0N0EiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJBRTE1QTIwOEM4NEQ3MUJGN0QyOTI3MUFBQjNBNTA3QkIyOTQ1NUM0NkJFQjVBN0YzM0JDMDAzOTk4OEFFNUUzIiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImV4cCI6MTY0ODA1NzM0MywicHJvdmlkZXIiOiJDYXJyZWZvdXIiLCJlcnJvclVybCI6Imh0dHBzOi8vd3d3LmNhcnJlZm91ci5jb20uYnIvbG9naW4_cmV0dXJuVXJsPS8iLCJpYXQiOjE2NDgwNTY3NDMsImp0aSI6IjdjNDA1ZTdkLTUwYzItNGE5OS1iNzg0LTc1YWQyNDAwMzA1ZSJ9.4SgNdBgR0oAAuFhkEOxXpyeOslZ03tiuy9uaIJWudiqoBEtqg_35AHtKzVnDZ8c6Ne4re_6ktr3TAXeNvzzp9g">
    
            <div class="carroCard-imagens">
    
                <img class="carroCard-img" src=${dados[i].imagem} alt="">
                <img class="carroCard-coracao" src="./imgs/coração.png" alt="">
    
            </div>
    
            <p>${dados[i].nome}</p>
            <div>
            
                <div class="carroCard-desconto testeDesconto1" id="cards${i}Carro">
                    <p class="carroCard-taxado">R$ ${dados[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${dados[i].desconto}%</p>
                </div>
            
                <p class="carroCard-valor">R$ ${dados[i].valor}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
        </a></div>`
               
        container21.appendChild(novaDiv21.lastChild);

}



let container22 = document.querySelector('#innerCards22');
for(let i=5; i<10;i++){

    let novaDiv22 = document.createElement('div');

    novaDiv22.innerHTML = `
    <div> <a class="carroCard-ancora carroCard"
            href="https://www.carrefour.com.br/auth/login?client_id=vtex&redirect_uri=https%3A%2F%2Fvtexid.vtex.com.br%2FVtexIdAuthSiteKnockout%2FReceiveAuthorizationCode.ashx&state=eyJhbGciOiJFUzI1NiIsImtpZCI6IjM1NjcyQjg1Njc5QzU5MDYxOEU2M0NBMDc5NEQwN0UwNzM0NkE0N0EiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJBRTE1QTIwOEM4NEQ3MUJGN0QyOTI3MUFBQjNBNTA3QkIyOTQ1NUM0NkJFQjVBN0YzM0JDMDAzOTk4OEFFNUUzIiwiaXNzIjoidG9rZW4tZW1pdHRlciIsImV4cCI6MTY0ODA1NzM0MywicHJvdmlkZXIiOiJDYXJyZWZvdXIiLCJlcnJvclVybCI6Imh0dHBzOi8vd3d3LmNhcnJlZm91ci5jb20uYnIvbG9naW4_cmV0dXJuVXJsPS8iLCJpYXQiOjE2NDgwNTY3NDMsImp0aSI6IjdjNDA1ZTdkLTUwYzItNGE5OS1iNzg0LTc1YWQyNDAwMzA1ZSJ9.4SgNdBgR0oAAuFhkEOxXpyeOslZ03tiuy9uaIJWudiqoBEtqg_35AHtKzVnDZ8c6Ne4re_6ktr3TAXeNvzzp9g">
    
            <div class="carroCard-imagens">
    
                <img class="carroCard-img" src=${dados[i].imagem} alt="">
                <img class="carroCard-coracao" src="./imgs/coração.png" alt="">
    
            </div>
    
            <p>${dados[i].nome}</p>
            <div>
           
                <div class="carroCard-desconto testeDesconto1" id="cards${i}Carro">
                    <p class="carroCard-taxado">R$ ${dados[i].valor_Desconto}</p>
                    <p class="carro-Card-porcentagem">${dados[i].desconto}%</p>
                </div>
            
                <p class="carroCard-valor">R$ ${dados[i].valor}</p>
                <p class="carroCard-paragrafo">em 1x no cartão ou boleto</p>
            </div>
        </a></div>`

        container22.appendChild(novaDiv22.lastChild);

}

/* let apagaDesconto2=document.querySelectorAll(".testeDesconto1");

for(let i=0; i<apagaDesconto2.length;i++){
    if(novidades[i].desconto==''){
        document.getElementById("cards"+i+"Carro").classList.add('visually-hidden');
    }
} */






