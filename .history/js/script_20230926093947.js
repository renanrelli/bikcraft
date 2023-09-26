const links = document.querySelectorAll('.header-menu a')
const url = window.location
console.log(url);
let href;

links.forEach(element => {
    href = element.href
    console.log(href);
});