const name = document.getElementById("name");
const locationVal = document.getElementById("location");
const order = document.getElementById("order");
const submitBtn = document.getElementById("submit-btn");

const validate = () => {
  if (name.value.length < 3 || name.value.length > 50) {
    output.textContent = "Please input a valid name";
    return false;
  } else if (order.value.length < 3 || order.value.length > 50) {
    output.textContent = "Please input a valid order";
    return false;
  }
  output.textContent = `${name.value} has submitted an order at ${new Date().toLocaleDateString()} for ${order.value} for pickup at ${locationVal.value}`
  return true;
}

submitBtn.addEventListener("click", validate);