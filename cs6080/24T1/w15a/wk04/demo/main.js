const button = document.getElementById("fetch-btn")

// recursively fetch pokemon and their details
const getPokemon = new Promise((resolve, reject) => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((resp) => resp.json())
    .then((pokemons) => {
      Promise.all(pokemons.results.map((pokemon) => 
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((res) => res.json())
      )).then((pokemon) => resolve(pokemon))
    })
})

const displayPokemon = (pokemonDetails) => {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  // you can also predefine the styles of wrapper in styles.css as well
  // i.e. wrapper.classList.add("wrapper")
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.paddingTop = "30px";
  document.body.appendChild(wrapper);

  for (const pokemon of pokemonDetails) {
    const element = document.createElement("li");
    element.textContent = pokemon.name + ", weight: " + pokemon.weight;
    element.style.fontStyle = "italic";
    element.style.fontFamily = "Arial";
    wrapper.appendChild(element);
  }
}

const fetchPokemon = () => {
  getPokemon.then((pokemonDetails) => {
    console.log(pokemonDetails);
    displayPokemon(pokemonDetails);
  });
}

button.addEventListener("click", fetchPokemon)