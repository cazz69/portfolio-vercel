// MENU //

const menu = document.querySelector(".nav-list");

function show(){
    if(menu.classList == 'nav-list'){
        menu.classList.add("active");
    }

    else{
        menu.classList.remove("active");
    }
}

function hid(){
    menu.classList.remove("active");
}

// HABILIDADES //

function html_tr(){
    document.getElementById("html_logo").src = "images/icons/html_icons/html_logo.png";
    document.getElementById("descricao_skill").innerHTML = "HTML<BR><BR>Linguagem de marcação para realizar <br>a criação de páginas web.";
}

function html(){
    document.getElementById("html_logo").src = "images/icons/html_icons/html_logo_initial.png";
    document.getElementById("descricao_skill").innerHTML = "/*Coloque o mouse sobre a imagem<br>para ver sua devida descrição.*/";
}
function css_tr(){
    document.getElementById("css_logo").src = "images/icons/css_icons/css_logo.png";
    document.getElementById("descricao_skill").innerHTML = "CSS<BR><BR>Linguagem de estilização utilizada <br> para formatar um página web.";
}

function css(){
    document.getElementById("css_logo").src = "images/icons/css_icons/css_logo_initial.png";
    document.getElementById("descricao_skill").innerHTML = "/*Coloque o mouse sobre a imagem<br>para ver sua devida descrição.*/";
}

function js_tr(){
    document.getElementById("js_logo").src = "images/icons/js_icons/js_logo.png";
    document.getElementById("descricao_skill").innerHTML = "JavaScript<BR><BR>Linguagem de programação criada<br>para operações mais complexas em<br>uma página web.";
}

function js(){
    document.getElementById("js_logo").src = "images/icons/js_icons/js_logo_initial.png";
    document.getElementById("descricao_skill").innerHTML = "/*Coloque o mouse sobre a imagem<br>para ver sua devida descrição.*/";
}

function c_tr(){
    document.getElementById("c_logo").src = "images/c_logo.png";
    document.getElementById("descricao_skill").innerHTML = "C++<BR><BR>Linguagem de programação sendo<br>utilizada em microcontroladores.";
}

function c(){
    document.getElementById("c_logo").src = "images/c_logo_initial.png";
    document.getElementById("descricao_skill").innerHTML = "/*Coloque o mouse sobre a imagem<br>para ver sua devida descrição.*/";
}

function py_tr(){
    document.getElementById("py_logo").src = "images/icons/py_icons/py_logo.png";
    document.getElementById("descricao_skill").innerHTML = "Python<BR><BR>Linguagem de programação feita <br> para automatizar processos repetitivos.";
}

function py(){
    document.getElementById("py_logo").src = "images/icons/py_icons/py_logo_initial.png";
    document.getElementById("descricao_skill").innerHTML = "/*Coloque o mouse sobre a imagem</br>para ver sua devida descrição.*/";
}

// PROJETOS //

function github_logo(){
    document.getElementById("github_logo").src = "images/icons/github_icons/github_logo_tr.png";
}

function github_logo_out(){
    document.getElementById("github_logo").src = "images/icons/github_icons/github_logo.png";
}

// ANIMACAO SCROLL //

window.sr = ScrollReveal({ reset: true });

sr.reveal('.ajustador-inicio', { 
    rotate: {x:0, y:80, z:0},
    duration: 1000 });

sr.reveal('.ajustador-sobre-mim', { 
    rotate: {x:0, y:80, z:0},
    duration: 1000 });

sr.reveal('.conhecimentos_title, .ajustador_conhecimentos', { 
    rotate: {x:0, y:80, z:0},
    duration: 1000 });

sr.reveal('.projetos_title, .container_projects, .github', { 
    rotate: {x:0, y:80, z:0},
    duration: 1000 });

    