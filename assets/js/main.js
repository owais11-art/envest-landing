const button = document.querySelector('#email');
const input = document.querySelector('input');
const form = document.querySelector('form')
console.log('hello ')

function sendEmail(e){
    e.preventDefault();
    Email.send({
        SecureToken : "690cd0aa-3c0c-41ed-98bf-27f4a58628b3",
        To : 'owaiszahoor79@gmail.com',
        From : "khanovais650@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => console.log(message)
    );
}

form.addEventListener('submit', e => sendEmail(e));