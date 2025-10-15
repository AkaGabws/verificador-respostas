document.addEventListener('DOMContentLoaded', () => {
    // URL da nossa função serverless que criaremos no próximo passo
    const apiUrl = 'URL_DA_SUA_FUNCAO_VIRA_AQUI';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('lista-nomes');
            const paragrafo = document.querySelector('p');

            // Limpa a mensagem "Carregando..."
            paragrafo.style.display = 'none';
            lista.innerHTML = ''; // Limpa a lista para garantir

            // Para cada pessoa na lista de dados, cria um item na lista do HTML
            data.forEach(pessoa => {
                const item = document.createElement('li');
                item.textContent = pessoa.nome; // Supondo que a API retorne um objeto com a chave "nome"
                lista.appendChild(item);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            const paragrafo = document.querySelector('p');
            paragrafo.textContent = 'Não foi possível carregar a lista. Tente novamente mais tarde.';
        });
});