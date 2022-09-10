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
  fetch(
    "https://38c6-2405-8540-0-20d8-19b8-e8d5-80fd-7713.ngrok.io/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // your expected POST request payload goes here
        username: name,
        password: pass,
      }),
    }
  )
    .then(res => res.json())
    .then(data => {
      // enter you logic when the fetch is successful
      console.log(data);
    })
    .catch(error => {
      // enter your logic for when there is an error (ex. error toast)
      console.log(error);
    });
};

loginButton.addEventListener("click", sendData);
