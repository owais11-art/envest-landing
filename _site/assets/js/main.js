const button = document.querySelector("#email");
const input = document.querySelector("input");
const form = document.querySelector("form");
console.log("hello ");

function sendEmail(e) {
  e.preventDefault();
  Email.send({
    SecureToken : "6eb85316-cb8c-41bb-989a-12bd8bd752ef",
    To : input.value,
    From : "owaiszahoor79@gmail.com",
    Subject : "Welcome to Envest",
    Body : "We are happy to see you here."
}).then(
  message => console.log(message)
);
}

button.addEventListener("click", (e) => sendEmail(e));
