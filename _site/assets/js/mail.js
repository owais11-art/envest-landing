const input = document.querySelector("input");
const form = document.querySelector("form");


form.addEventListener('submit', e => {
  e.preventDefault();
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
})