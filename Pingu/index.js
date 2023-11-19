function cadastrarNome() {
    let novoNome = document.getElementById('nomeInput').value;

    if (novoNome.trim() === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    let nomes = JSON.parse(localStorage.getItem('nomes')) || [];
    nomes.push(novoNome);
    localStorage.setItem('nomes', JSON.stringify(nomes));

    // Redireciona para a página de boas-vindas
    window.location.href = 'Pages/inicil.html';
}