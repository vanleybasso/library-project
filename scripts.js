// Exemplo de dados dos livros (simulando um banco de dados)
const livros = [
    { id: 1, titulo: "Dom Quixote", autor: "Miguel de Cervantes", disponivel: true },
    { id: 2, titulo: "1984", autor: "George Orwell", disponivel: true },
    { id: 3, titulo: "A Revolução dos Bichos", autor: "George Orwell", disponivel: false },
    { id: 4, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", disponivel: true },
    { id: 5, titulo: "A Metamorfose", autor: "Franz Kafka", disponivel: true }
];

// Função para exibir os livros na página
function exibirLivros() {
    const livrosSection = document.getElementById('livros');

    livros.forEach(livro => {
        const livroDiv = document.createElement('div');
        livroDiv.classList.add('livro');

        livroDiv.innerHTML = `
            <h2>${livro.titulo}</h2>
            <p>Autor: ${livro.autor}</p>
            <p>${livro.disponivel ? 'Disponível' : 'Indisponível'}</p>
            <button class="botao-reserva" onclick="reservarLivro(${livro.id})">Reservar</button>
        `;

        livrosSection.appendChild(livroDiv);
    });
}

// Função para reservar um livro
function reservarLivro(id) {
    const livro = livros.find(l => l.id === id);

    if (livro && livro.disponivel) {
        alert(`Você reservou o livro "${livro.titulo}" de ${livro.autor}.`);
        livro.disponivel = false; // Simulação de reserva
        atualizarLivros(); // Atualiza a lista de livros após a reserva
    } else {
        alert('Este livro não está disponível para reserva.');
    }
}

// Função para atualizar a lista de livros após a reserva
function atualizarLivros() {
    const livrosSection = document.getElementById('livros');
    livrosSection.innerHTML = '';
    exibirLivros();
}

// Ao carregar a página, exibir os livros
window.onload = exibirLivros;
