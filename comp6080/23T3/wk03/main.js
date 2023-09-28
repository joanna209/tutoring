const email = document.getElementById("name");
const password = document.getElementById("password");
const output = document.getElementById("output");
const login = document.getElementById("login-button");

const validate = () => {
  if (!email.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
    output.textContent = "Please enter a valid email";
    return;
  } else if (password.value.length < 3 || password.value.length > 50) {
    output.textContent = "Please enter a valid password";
    return;
  }
  const element = document.createElement("h2");
  element.textContent = "silence";
  document.body.append(element);
  localStorage.setItem("token", "steven");
  console.log(localStorage.getItem("token"));
  // localStorage.removeItem("token");
  return;
}

login.addEventListener("click", validate);
