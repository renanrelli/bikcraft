const links = document.querySelectorAll('.header-menu a')
const url = window.location
const href = ''

links.forEach(element => {
    href = element.href
    console.log(href);
});