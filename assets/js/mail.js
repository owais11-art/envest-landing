const input = document.querySelector("#mail");
const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const phone = document.querySelector("#mobile");
const message = document.querySelector("#msg");
const form = document.querySelector("form");

if(form){
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let tempParams = {
      from_name: "owais khan",
      message: `${fName.value} ${lName.value} subscribed`,
    };
    emailjs
      .send("service_cxs2chw", "template_rou68ij", tempParams)
      .then((res) => {
        if (res.status === 200) {
          input.value = "";
          fName.value = "";
          lName.value = "";
          phone.value = "";
          message.value = "";
          window.location.href += "/thanks.html";
        } else console.log("Email not sent😞");
      });
  });
}
