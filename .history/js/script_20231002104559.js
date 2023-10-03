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

perguntas.forEach(element => {
    element.addEventListener('click', (event) =>{
        const pergunta = event.currentTarget
        const controls = pergunta.getAttribute('aria-controls')
        const resposta = document.getElementById(controls)
        resposta.classList.toggle('ativa')
        if(resposta.classList.contains('ativa')){
            pergunta.setAttribute('aria-expanded', "true" )
        } else{
            pergunta.setAttribute('aria-expanded', "false" )
        }

    })
});

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens')

galeria.forEach(element => {
    element.addEventListener('click' , (e) =>{
        const img = e.currentTarget;
        galeriaContainer.prepend(img)
    })
});