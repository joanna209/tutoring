/**
 * A basic demonstration of web templates
 * 
 * See https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
 * for more info
 */
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

class PokeList extends HTMLElement {
  constructor() {
    super()
  }

  render(pokemon) {
    const template = document.getElementById("poke-list")
    const content = template?.content.cloneNode(true)
    const fetchBtn = content.querySelector("li.poke-li")
    fetchBtn.innerText = `name: ${pokemon.name}, weight: ${pokemon.weight}`
    this.appendChild(content)
  }

  connectedCallback() {
    this.render(pokemon)
  }
}

class FetchBtn extends HTMLElement {
  constructor() {
    super()
  }

  onClick() {
    const main = document.getElementById("main")
    getPokemon.then((pokemonDetails) => {
      const list = new PokeList()
      console.log(pokemonDetails)
      pokemonDetails.forEach((pokemon) => {
        list.render(pokemon)
        main.appendChild(list)
      })
    })
  }

  render() {
    const template = document.getElementById("fetch-button")
    const content = template?.content.cloneNode(true)
    const fetchBtn = content.querySelector("button.fetch-btn")
    fetchBtn.innerText = "Click me"
    fetchBtn.addEventListener("click", this.onClick)
    this.appendChild(content)
  }

  connectedCallback() {
    console.log('element has loaded')
    this.render()
  }
}

customElements.define("fetch-button", FetchBtn)
customElements.define("poke-list", PokeList)