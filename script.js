/* Fell free to visit my youtube channel for more updates,
https://www.youtube.com/channel/UCtVM2RthR4aC6o7dzySmExA
*/
console.log("Hi");
let loginButton = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");

const sendData = () => {
  console.log("Login clicked");
  const name = username.value;
  const pass = password.value;
  console.log(name);
  console.log(pass);
};

loginButton.addEventListener("click", sendData);
