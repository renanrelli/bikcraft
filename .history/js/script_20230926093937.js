const links = document.querySelectorAll('.header-menu a')
const url = window.location
let href;

links.forEach(element => {
    href = element.href
    console.log(href);
});