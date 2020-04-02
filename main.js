const form = document.getElementById("userForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const eaddress = document.getElementById("eaddress");
const pword = document.getElementById("pword");
//ERRORS
const firstError = document.getElementById("firstError");
const lastError = document.getElementById("lastError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

//FORM VALIDATION: Error messages

//First name error
form.addEventListener("submit", e => {
  let firstMessage = [];
  if (fname.value === "" || fname.value === null) {
    firstMessage.push("First name cannot be empty");
    fname.style.border = "2px solid red";
  }
  if (firstMessage.length > 0) {
    e.preventDefault();
    firstError.innerText = firstMessage.join("");
    firstError.classList.add("error");
  }
  //Last name error
  let lastMessage = [];
  if (lname.value === "" || lname.value === null) {
    lastMessage.push("Last name cannot be empty");
    lname.style.border = "2px solid red";
  }
  if (lastMessage.length > 0) {
    e.preventDefault();
    lastError.innerText = lastMessage.join("");
    lastError.classList.add("error");
  }
  //Email error
  let emailMessage = [];
  if (eaddress.value === "" || eaddress.value === null) {
    emailMessage.push("Looks like this is not an email");
    eaddress.style.border = "2px solid red";
  }
  if (emailMessage.length > 0) {
    e.preventDefault();
    emailError.innerText = emailMessage.join("");
    emailError.classList.add("error");
  }
  //Password error
  let passMessage = [];
  if (pword.value === "" || pword.value === null) {
    passMessage.push("Password cannot be empty");
    pword.style.border = "2px solid red";
  }
  if (passMessage.length > 0) {
    e.preventDefault();
    passError.innerText = passMessage.join("");
    passError.classList.add("error");
  }
});
