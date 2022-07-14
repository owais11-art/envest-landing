const input = document.querySelector("#mail");
const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const phone = document.querySelector("#mobile");
const message = document.querySelector("#msg");
const form = document.querySelector("form");

const setError = (element, errorMessage) => {
  element.parentElement.style.borderBottom = '1px solid orangered';
  element.parentElement.nextElementSibling.textContent = errorMessage;
  element.classList.add('error');
}

const formValidation = () => {
  const emailValidator = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
  if(input.value){
    if (!emailValidator.test(input.value)) {
      setError(input, 'Invalid Email');
      return false;
    };
  }else {
    setError(input, 'Cannot be Empty');
    return false;
  }

  if(phone.value){
    const isNum = phone.value.split('').some(val => !Number.isInteger(parseInt(val)));
    if(isNum) {
      setError(phone, 'input must be digits');
      return false;
    }
    if(phone.value.length !== 10){
      setError(phone, 'should be 10 digits');
      return false;
    }
  }else {
    setError(phone, 'Cannot be Empty');
    return false;
  }
  return true;
};

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const validate = formValidation();
    if(validate){
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
    }
  });
}
