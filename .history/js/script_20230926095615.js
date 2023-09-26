const links = document.querySelectorAll('.header-menu a')
const url = window.location.href
let href;

links.forEach(element => {
    href = element.href
    if(url.includes(href)){
        element.classList.add('ativo')
    }
});

const parametros = new URLSearchParams(location.search)
parametros.forEach(element => {
    const parametro = document.getElementById(element)
    console.log(element);
});