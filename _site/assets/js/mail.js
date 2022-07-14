const input = document.querySelector("#mail");
const fName = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const phone = document.querySelector("#mobile");
const message = document.querySelector("#msg");
const form = document.querySelector("form");

input.addEventListener("change", (e) => {
  formValidation(e.target);
});

phone.addEventListener("change", (e) => {
  formValidation(e.target);
});

const setError = (element, errorMessage) => {
  element.parentElement.style.borderBottom = "1px solid orangered";
  if (
    !element.parentElement.nextElementSibling.firstElementChild
      .firstElementChild
  ) {
    const i = document.createElement("i");
    i.classList.add("bi", "bi-exclamation-octagon-fill");
    i.style.color = "orangered";
    console.log(i);
    element.parentElement.nextElementSibling.firstElementChild.append(i);
    element.parentElement.nextElementSibling.lastElementChild.textContent =
      errorMessage;
  } else
    element.parentElement.nextElementSibling.lastElementChild.textContent =
      errorMessage;
  element.classList.add("error");
};

const resetError = (element) => {
  element.parentElement.style.borderBottom = "1px solid #959EAC";
  if (
    element.parentElement.nextElementSibling.firstElementChild.firstElementChild
  ) {
    element.parentElement.nextElementSibling.firstElementChild.remove(
      element.parentElement.nextElementSibling.firstElementChild
        .firstElementChild
    );
  }
  element.parentElement.nextElementSibling.firstElementChild.textContent &&
    (element.parentElement.nextElementSibling.firstElementChild.textContent =
      "");
};

const emailValidation = (value, element) => {
  const emailValidator = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  if (value) {
    if (!emailValidator.test(value)) {
      setError(element, "Invalid Email");
      return false;
    } else {
      resetError(element);
      return true;
    }
  } else {
    setError(element, "Cannot be Empty");
    return false;
  }
};

const phoneValidation = (phone) => {
  const length = phone.value.length;
  let slicedValue;
  if(length === 13){
    slicedValue = phone.value.slice(3);
  }else if(length === 12){
    slicedValue = phone.value.slice(2);
  }else{
    slicedValue = phone.value;
  }
  if (slicedValue) {
    const isNum = slicedValue
      .split("")
      .some((val) => !Number.isInteger(parseInt(val)));
    if (isNum) {
      setError(phone, "input must be digits");
      return false;
    } else if(phone.value < 10){
      setError(phone, 'Should be 10 digits');
      return false;
    } else {
      resetError(phone);
      return true;
    }
  } else {
    setError(phone, "Cannot be Empty");
    return false;
  }
};

const formValidation = (target = null) => {
  let emailValidate, phoneValidate;
  if (!target) {
    emailValidate = emailValidation(input.value, input);
    phoneValidate = phoneValidation(phone);
  } else if (target && target === input) {
    emailValidate = emailValidation(input.value, input);
  } else if (target && target === phone) {
    phoneValidate = phoneValidation(phone);
  }

  if (emailValidate && phoneValidate) return true;

  return false;
};

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const validate = formValidation();
    if (validate) {
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
