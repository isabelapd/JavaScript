const estoque = [
    { id: 2035, titulo: 'Harry Potter', autor: 'Maria Silva', quantidade: 12 },
    { id: 3547, titulo: 'Senhor dos Aneis', autor: 'José Silva', quantidade: 15 },
    { id: 4426, titulo: 'O Livro das Fadas', autor: 'Mario Santos', quantidade: 20 },
    { id: 9139, titulo: 'O Programador Pragmático', autor: 'João Lima', quantidade: 7 },
];

const adicionaLivro = (id, titulo, autor, quantidade) => {
    estoque.push({
        id,
        titulo,
        autor,
        quantidade
    })
};

adicionaLivro(3437, 'Codigo Limpo', 'Tio Bob', 18);
console.log(estoque);

const removeLivro = (idDoLivro) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro);
    if (existeIdNoEstoque) {
        for (let indice = 0; indice < estoque.length; indice++) {
            if (estoque[indice].id === idDoLivro) {
                console.log(`O livro de id ${idDoLivro} foi removido`)
                estoque.splice(indice, 1);
                break;
            }
        }
    }
    else {
        console.log(`O livro de id ${idDoLivro} não foi encontrado`)
    }
}

removeLivro(4426);
console.log(estoque);

const atualizaQuantidade = (idDoLivro, novaQuantidade) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro);
    if (existeIdNoEstoque) {
        for (let livro of estoque) {
            if (livro.id === idDoLivro) {
                livro.quantidade = novaQuantidade
                console.log(`A quantidade do livro ${livro.titulo} foi atualizada para ${novaQuantidade} `);
                break;
            }
        }

    }else {
        console.log(`O id ${idDoLivro} não foi localizado no estoque`)
    }

}

atualizaQuantidade(2035, 1200);
console.log(estoque);


const listarLivros = () => {
    if (estoque.length === 0) {
        console.log('O estoque esta vazio');
    }else{
        console.log(`O estoque possui ${estoque.length} títulos.`)
        for (let livro of estoque) {
            console.log(`
                ID: ${livro.id}
                Livro: ${livro.titulo}
                Autor: ${livro.autor}
                Quantidade: ${livro.quantidade}`)
        }
    }
}

listarLivros();

const executaEMostraLista = (acao, mostraLista) => {
    console.log('Vou executar')
    acao();
     console.log('executei')
    mostraLista();
}

executaEMostraLista(() => adicionaLivro(3437, 'Codigo Limpo', 'Tio Bob', 18),() => listarLivros());
