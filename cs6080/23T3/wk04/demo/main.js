const button = document.getElementById("fetch-btn");

const loadPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    // you can also predefine the styles of wrapper in styles.css as well
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.paddingTop = "30px";
    document.body.appendChild(wrapper);
    for (res of data.results) {
      const element = document.createElement("li");
      element.textContent = res.name;
      element.style.fontStyle = "italic";
      element.style.fontFamily = "Arial";
      wrapper.appendChild(element);
    }
  })
  .catch((error) => console.error(error));
}

button.addEventListener("click", loadPokemon);