const button = document.querySelector("#email");
const input = document.querySelector("input");
const form = document.querySelector("form");
console.log("hello ");

function sendEmail(e) {
  e.preventDefault();
  Email.send({
    SecureToken : "6eb85316-cb8c-41bb-989a-12bd8bd752ef",
    To : 'khanovais650@gmail.com',
    From : "owaiszahoor79@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => console.log(message)
);
}

button.addEventListener("click", (e) => sendEmail(e));
