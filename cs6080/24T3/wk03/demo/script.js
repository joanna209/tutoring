const forms = document.forms[0];
const name = forms.elements['name'];
const order = forms.elements['order'];
const locationVal = forms.elements['location'];
const submitBtn = document.getElementById("submit-btn");
const output = document.getElementById("output");
const resetBtn = document.getElementById("reset-btn");

submitBtn.addEventListener("click", (event) => {
  if (name.value.length < 3 || name.value.length > 50) {
    output.textContent = "Name is less than 3 characters or more than 50 characters";
  } else if (order.value.length < 3 || order.value.length > 50) {
    output.textContent = "Order is less than 3 characters or more than 50 characters";
  }
  event.preventDefault(); // this prevents refreshing the page so you can see your output :) 
  output.textContent = `${name.value} has submitted an order at ${new Date().toLocaleDateString()} for ${order.value} for pick up at ${locationVal.value}`;
});

resetBtn.addEventListener("click", () => {
  forms.reset();
  output.textContent = "";
})