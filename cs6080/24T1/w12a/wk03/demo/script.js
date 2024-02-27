// grabbing elements from the index.html
const form = document.forms[0];
const name = form.elements["name"];
const locationVal = form.elements["location"];
const order = form.elements["order"];
const submitBtn = document.getElementById("submit-btn");
const output = document.getElementById("output");

// serverside logic
const validate = () => {
  if (name.value.length < 3 || name.value.length > 50) {
    output.textContent = "Please input a valid name";
    return false;
  } else if (order.value.length < 3 || order.value.length > 50) {
    output.textContent = "Please input a valid order";
    return false;
  }
  return true;
}

const submitOrder = () => {
  output.textContent = `${name.value} has submitted an order at ${new Date().toLocaleDateString()} for ${order.value} for pickup at ${locationVal.value}`
}

// event listeners
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (validate()) submitOrder();
});