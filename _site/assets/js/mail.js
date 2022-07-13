const button = document.querySelector("#email");
const input = document.querySelector("input");
const form = document.querySelector("form");
console.log("hello world");
console.log("hello world");
console.log("hello world");


form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('hello mail');
  let tempParams = {
    from_name: "owais khan",
    message: `${input.value} subscribed`
  };
  emailjs.send("service_cxs2chw","template_rou68ij", tempParams)
  .then(res => {
    if(res.status === 200) {
      input.value = '';
      window.location.href = "http://127.0.0.1:4000/thanks.html";
    }
    else console.log('Email not sent😞');
  });
//   window.location.replace("http://127.0.0.1:4000/thanks.html");
})