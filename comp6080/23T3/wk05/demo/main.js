const button = document.getElementById("fetch-btn");

// promise version
// const loadPokemon = () => {
//   fetch('https://pokeapi.co/api/v2/pokemon', {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => 
//     // console.log('response', response);
//     response.json()
//   ).then((data) => {
//     console.log(data);
//     const wrapper = document.createElement("div");
//     wrapper.className = "wrapper";
//     wrapper.style.display = "flex";
//     wrapper.style.flexDirection = "column";
//     wrapper.style.justifyContent = "center";
//     wrapper.style.alignItems = "center";
//     wrapper.style.paddingTop = "30px";
//     document.body.appendChild(wrapper);
//     for (res of data.results) {
//       const element = document.createElement("li");
//       element.textContent = res.name;
//       element.style.fontStyle = "italic";
//       element.style.fontFamily = "Arial";
//       wrapper.appendChild(element);
//     }
//   })
//   .catch((error) => console.error(error));
// }

// async / await version
// const loadPokemon = async () => {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     const data = await response.json();
//     console.log(data.results);
//     const wrapper = document.createElement("div");
//     wrapper.className = "wrapper";
//     wrapper.style.display = "flex";
//     wrapper.style.flexDirection = "column";
//     wrapper.style.paddingTop = "30px";
//     document.body.appendChild(wrapper);
//     for (res of data.results) {
//       const element = document.createElement("li");
//       element.textContent = res.name;
//       element.style.fontStyle = "italic";
//       element.style.fontFamily = "Arial";
//       wrapper.appendChild(element);
//     }
//   } else {
//     console.error('Failed to fetch pokemon');
//   }
// }

// async / await version with bootstrap
const loadPokemon = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data.results);
    const wrapper = document.createElement("div");
    wrapper.className = "d-flex flex-column justify-content-center align-items-center pt-30";
    document.body.appendChild(wrapper);
    for (res of data.results) {
      const element = document.createElement("li");
      element.textContent = res.name;
      element.className = "fst-italic text-danger";
      wrapper.appendChild(element);
    }
  } else {
    console.error('Failed to fetch pokemon');
  }
}

button.addEventListener("click", loadPokemon);