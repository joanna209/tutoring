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

/**
 * Create a new PokeList component that extends from 
 * `HTMLElement` class
 */
class PokeList extends HTMLElement {
  constructor() {
    super()
  }

  /**
   * A method that tells the browser how we should render the
   * PokeList component
   * 
   * @param {array} pokemon 
   */
  render(pokemon) {
    const template = document.getElementById("poke-list")
    const content = template?.content.cloneNode(true)
    const list = content.querySelector("li.poke-li")
    list.textContent = pokemon.name + ", weight: " + pokemon.weight
    list.style.fontFamily = "Arial"
    list.style.fontStyle = "italic"
    this.appendChild(content)
  }

  /**
   * Called each time PokeList is added to the document
   * 
   * Note: it is recommend to implement a custom element setup
   * in a separate callback rather than in the `connectedCallback`
   * constructor
   */
  connectedCallback() {
    if (this.pokemon) this.render(pokemon)
  }
}

/**
 * Create a new fetch button component that extends from 
 * `HTMLElement` class
 */
class FetchButton extends HTMLElement {
  constructor() {
    super()
  }

  // .then() version
  onClick() {
    const main = document.getElementById("main")
    console.log("Custom element clicked")
    getPokemon.then((pokemonDetails) => {
      console.log(pokemonDetails)
      const pokeList = new PokeList()
      pokemonDetails.forEach((pokemon) => {
        pokeList.render(pokemon)
        main.appendChild(pokeList)
      })
    });
  }

  // async / await version
  // async onClick() {
  //   const main = document.getElementById("main")
  //   console.log("Custom element clicked")
  //   const pokemonDetails = await getPokemon
  //   const pokeList = new PokeList()
  //   pokemonDetails.forEach((pokemon) => {
  //     pokeList.render(pokemon)
  //     main.appendChild(pokeList)
  //   })
  // }

  /**
   * A method that tells the browser how we should render the
   * fetchBtn component
   */
  render() {
    const template = document.getElementById("fetch-button")
    const content = template?.content.cloneNode(true)
    const fetchBtn = content.querySelector("button.fetch-btn")
    fetchBtn.addEventListener("click", this.onClick)
    fetchBtn.textContent = "Click me"
    this.appendChild(content)
  }

  /**
   * Called each time fetchButton is added to the document
   * 
   * Note: it is recommend to implement a custom element setup
   * in a separate callback rather than in the `connectedCallback`
   * constructor
   */
  connectedCallback() {
    console.log("Custom element added to page.")
    this.render()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`)
  }
}

/** Register HTML elements `fetch-button` and `poke-list` to be usable from the browser */
customElements.define("fetch-button", FetchButton)
customElements.define("poke-list", PokeList)