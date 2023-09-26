const links = document.querySelectorAll('.header-menu a')
const url = window.location.href
console.log(url);
let href;

links.forEach(element => {
    href = element.href
    if(url.includes(href)){
        element.classList.add('ativo')
    }
});