
// Declaração das variaves dos elementos do DOM

const body = document.querySelector("body");
const conteiner = document.querySelector(".conteiner");
const modalMenu = document.querySelector(".modalMenu");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const iconeMenu = document.querySelector("#iconeMenu");
const iconeLua = document.querySelector("#iconeLua");
const iconeSol = document.querySelector("#iconeSol");
const iconeLogo = document.querySelector("#iconeLogo");
const iconeClose = document.querySelector("#iconeClose");
const LinksMenu = document.querySelector(".links");
const theme = document.querySelector(".theme");
const preDefinicao = document.querySelectorAll("*");
const texto = ", eu sou o SousaDev.";
const Div = document.querySelector("#efeitoDig");

// variaveis de base para uso nas funcionalidades

let loop;                   //variavel do intervalo que vai ser definido na função de efeito de digitação typing()

let iterador = 0;           //variavel que vai iterar na função typing()  

let themeWhite = false;     //tema que esta definido no momento


// Eventos no DOM

iconeMenu.addEventListener("click", abrirMenu);
theme.addEventListener("click", mudarTema);
iconeClose.addEventListener("click", fecharMenu);
window.addEventListener("resize", fecharMenuRedimensionar);


// Funçoes

// Função para abrir o modal menu em telas menores

function abrirMenu() {
    
    modalMenu.style.display = "flex";
    iconeMenu.style.display = "none";

    if(!themeWhite){
        iconeSol.style.display = "none";
    }else {
        iconeLua.style.display = "none";
    }
    
}

// Função que fecha o menu de dispositivos menores se a janela for redimensionada

function fecharMenuRedimensionar(){
    
    if(window.getComputedStyle(LinksMenu).display === "flex"){
        fecharMenu();
    }
}

// Função fechar menu das telas menores

function fecharMenu() {

    modalMenu.style.display = "none";
    iconeMenu.style.display = "flex";

    if(!themeWhite){
        iconeSol.style.display = "flex";
    }else {
        iconeLua.style.display = "flex";
    }
}

// Função para mudar o tema e as cores dos elementos de acordo com o tema escolhido

function mudarTema() {

    if(!themeWhite){        //verificando a variavel booleana do tema

        body.style.background = "url('img/7063.jpg') repeat fixed";     //mudando o background da pagina

        preDefinicao.forEach((elemento)=>{      //percorrendo todos os elemntos e mudando a cor
            elemento.style.color = "black"
        });

        Div.style.color = "lightseagreen";
        iconeLua.style.display = "flex";
        iconeSol.style.display = "none";
        themeWhite = true;

    }else {

        body.style.background = "url('img/182428240217.jpg') repeat fixed center center";       //mudando o background da pagina
        
        preDefinicao.forEach((elemento)=>{         //percorrendo todos os elemntos e mudando a cor
            elemento.style.color = "white"
        });

        Div.style.color = "lightseagreen";
        iconeLua.style.display = "none";
        iconeSol.style.display = "flex";
        themeWhite = false;

    }
}

// Função typing que vai dar o efeito de digitação na tela inicial

function typing() {

    Div.textContent = texto.slice(0,iterador);
    iterador++;

    if(iterador > texto.length){        //quando o iterador for maior que a string e reseta o valor
        iterador = 0;
    }
}

loop = setInterval(typing,100);         //loop para a função typing ficar rodando

setTimeout(()=>{                        //definindo um tempo para limpr o intervalo, para que ele nao rode toda hora
    clearInterval(loop);
    Div.textContent = texto;
}, 6500)