function livro(nome,ano,autor){
    let nomeLivro = nome.toUpperCase()
    let idadeLivro = 2023 - ano;
    let frase = `${nome} por ${autor}`

    return{
        nomeLivro,
        idadeLivro,
        frase
    }
}

livro('livro teste', 1945, 'autor teste')