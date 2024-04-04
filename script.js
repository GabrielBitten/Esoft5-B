const urlParams = new URLSearchParams(window.location.search);

const evolucao= urlParams.get('evolucao');

if (evolucao) {
    const header = document.getElementById('header');
    switch (evolucao) {
        case 'squirtle':
            header.querySelector('h1').textContent = 'Squirtle';
            break;
        case 'wartortle':
            header.querySelector('h1').textContent = 'Wartortle';
            break;
        case 'blastoise':
            header.querySelector('h1').textContent = 'Blastoise';
            break;
        default:
            header.querySelector('h1').textContent = 'Pokémon Desconhecido';
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
        .then(response => response.json())
        .then(data => {
            console.log('Dados do Pokémon:', data);
      
            const pokemonImage = document.getElementById('pokemonImage');
            pokemonImage.innerHTML = `<img src="${data.sprites.other['official-artwork'].front_default}" alt="${evolucao}">`;
        })
        .catch(error => console.error('Erro ao recuperar os dados:', error));
}
