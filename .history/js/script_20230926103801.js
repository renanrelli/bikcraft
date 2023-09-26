const links = document.querySelectorAll('.header-menu a')
const url = window.location.href
let href;

links.forEach(element => {
    href = element.href
    if(url.includes(href)){
        element.classList.add('ativo')
    }
});

// Parametros na URL
const parametros = new URLSearchParams(location.search)
parametros.forEach(element => {
    const parametro = document.getElementById(element)
    if(parametro){
        parametro.checked = true;
    }
});

//Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button')
console.log(perguntas);