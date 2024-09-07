import campeoes from './dados.js';

function pesquisar(rota) {
    // Seleciona o elemento onde os campeões serão exibidos (div com id="resultados", por exemplo)
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpa os resultados anteriores

    // Filtra os campeões pela rota escolhida
    const campeoesFiltrados = campeoes.filter(campeao => campeao.rota === rota);

    // Cria elementos HTML para cada campeão e adiciona ao elemento resultados
    campeoesFiltrados.forEach(campeao => {
        const p = document.createElement('p');
        p.textContent = `${campeao.nome} - ${campeao.classe}`;
        resultados.appendChild(p);
    });
}

window.pesquisar = pesquisar;