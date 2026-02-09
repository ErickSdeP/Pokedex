const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function poke_html(pokemon) {
    return `
        <li class="pokemonVerde">
            <span class="numero">#001</span>
            <span class="nome">${pokemon.name}</span>
            <div class="detalhes">
                <ol>
                    <li class="tiposV">Grama</li>
                    <li class="tiposV">Venenoso</li>
                </ol>
                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokeList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json()) //função resumida
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokeList.innerHTML += poke_html(pokemon)
        }
    })
    .catch((error) => console.error(error))
