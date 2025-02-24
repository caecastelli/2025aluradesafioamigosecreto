alert ("Começar o Sorteio!");

let listaDeAmigos = [];

//Função para acionar os nomes no sorteio

function adicionarAmigo(){
    let nomeSorteio = document.getElementById('amigo').value;
    //Alerta de Campo Vazio
        if (nomeSorteio === ""){  
        alert ("Insira um nome válido, por favor!");
     }
    //Capturar o dado de entrada
    listaDeAmigos.push(nomeSorteio);
    document.getElementById('amigo').value= "";
    //Impressão dos nomes
    console.log(`Lista dos amigos:${listaDeAmigos}`);
    exibirListaNaTela();
}

// Função para imprimir os nomes do sorteio

function exibirListaNaTela(){
    let listaHTML = document.querySelector('#listaAmigos');
        listaHTML.innerHTML = "";

    listaDeAmigos.forEach((amigo) => {
    let li = document.createElement('li');
    li.textContent = amigo;
    listaHTML.appendChild(li);
    });
}

// Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página

function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        console.log("Lista Vazia");
    } 
        console.log("Função acionada!");
        const quantidade = listaDeAmigos.length;
        console.log(quantidade);
        const numeroaleatorio = Math.floor(Math.random() * quantidade);
        let nomesorteado = document.getElementById('resultado');
        nomesorteado.innerHTML = "Nome Sorteado: " + listaDeAmigos[numeroaleatorio];
}