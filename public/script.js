let apiUrl = "https://pokeapi.co/api/v2/pokemon/"

// Get Element from HTML
let input = document.querySelector('.pokemon-input')
let pokemonName = document.querySelector('.pokemon-name')
let pokemonImage = document.querySelector('.pokemon-image')
let pokemonMove = document.querySelector('.pokemon-move')
let pokemonAbility = document.querySelector('.pokemon-ability')
let pokemonType = document.querySelector('.pokemon-type')

// Get Pokemon Data
function getPokemonData() {
    // Get input value from ID
    axios.get(apiUrl + input.value)
    .then(function(response) {
        pokemonName.innerHTML = response.data.forms[0].name;
        pokemonMove.innerHTML = response.data.moves[0].move.name;
        pokemonAbility.innerHTML = response.data.abilities[0].ability.name;
        pokemonType.innerHTML = response.data.types[0].type.name;
        pokemonImage.src = response.data.sprites.front_default;
    })
    .catch(function(error) {
        pokemonName.innerHTML = "An error has occurred."
        pokemonImage.src = ""
    })
}

let button = document.querySelector('.pokemon-button')

// When button has an event
button.addEventListener("click", getPokemonData);

// Show when press the button
function showDiv() {
   document.getElementById('pokemonName').style.display = "block";
}