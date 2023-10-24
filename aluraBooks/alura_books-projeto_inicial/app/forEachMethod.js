const tabelaLivros = document.getElementById("livros")
const elementoLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function showBooksOnScreen(listaDeLivros){
    elementoLivrosDisponiveis.innerHTML = ''
    tabelaLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        tabelaLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}

/*function verificarDisponibilidade(livro){
    if(livro.quantidade > 0){
        return 'livro__imagens'
    }else{
        return 'livro__imagens indisponivel'
    }
}*/