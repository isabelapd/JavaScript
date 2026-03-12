/* Crie um sistema simples para gerenciar o estoque de uma livraria. O sistema deve permitir adicionar livros ao estoque, 
remover livros, atualizar a quantidade de livros e listar todos os livros disponíveis.*/


/* 1.Defina um array de objetos para armazenar os livros no estoque */

/* Cada livro deve ser representado por um objeto com propriedades titulo, autor e quantidade */

/* 2.Crie funções para gerenciar o estoque */
const estoque = [
    {id: 2035, titulo: 'Harry Potter', autor: 'Maria Silva', quantidade: 10},
    {id: 3021, titulo: 'Senhor dos Anéis', autor: 'José Souza', quantidade: 13},
    {id: 2116, titulo: 'A Sultil Arte de Ligar o Foda-se', autor: 'Mark Manson', quantidade: 18},
    {id: 1321, titulo: 'Seja Bem Vindo', autor: 'Maria Alves', quantidade: 20},
];

/* adicionarLivro(titulo, autor, quantidade) - Adiciona um novo livro ao estoque */
const adicionaLivro = (id, titulo, autor, quantidade) => {
    estoque.push({
        id,
        titulo,
        autor,
        quantidade
    });
}

adicionaLivro(1821,'Ser Humano', 'Leo Magalhaes', 17);


/* removerLivro(titulo) - Remove um livro do estoque pelo título */
const removeLivro = (idDoLivro) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
    if(existeIdNoEstoque) {
        for(let indice = 0; indice < estoque.length; indice++) {
            if(estoque[indice].id === idDoLivro) {
                console.log(`O livro de id ${idDoLivro} foi removido`);
                estoque.splice(indice, 1);
                break;
            }
        }
    }
    else {
    console.log(`O livro de id ${idDoLivro} não foi encontrado`);  
    }
}    
removeLivro(2035);


/* atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade de um livro no estoque */
const atualizaQuantidade = (idDoLivro, novaQuantidade) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
    if(existeIdNoEstoque) {
        for (let livro of estoque) {
            if(livro.id === idDoLivro) {
                livro.quantidade = novaQuantidade;
                console.log(`A quantidade do Livro ${livro.titulo} foi atualizada para ${novaQuantidade}`);
                break;
            }
        } 
    } else {
    console.log(`O id ${idDoLivro} não foi localizado no estoque`)
    }
}

atualizaQuantidade(2116, 83);


/* listarLivros() - Lista todos os livros no estoque */

const listarLivros = () => {
    if(estoque.lenght === 0) {
        console.log('O estoque está vazio')
    } else {
        console.log(`O estoque possui ${estoque.length} títulos.`)
        for (let livro of estoque) {
            console.log(`ID: ${livro.id}
            Livro: ${livro.titulo}
            Autor: ${livro.autor}
            Quantidade: ${livro.quantidade}
            `)
        }
    }
}


const executaEMostraLista = (acao, mostraLista) => {
    console.log('Vou executar');
    acao();
    console.log('executei');
    mostraLista();
}

// executaEMostraLista(() => adicionaLivro(1821,'Ser Humano', 'Leo Magalhaes', 17), () => listarLivros())

executaEMostraLista(() => adicionaLivro(1821,'Ser Humano', 'Leo Magalhaes', 17),listarLivros)
