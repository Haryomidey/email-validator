const email = document.querySelector("input");
const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");
const btn = document.querySelector(".submit");
const errorMessage = document.querySelector("p");

let regX = /^([a-zA-Z0-9\. -]+)@([a-zA-Z0-9-]+).([a-z]{2,3})$/;

email.addEventListener("keyup", () => {
    if (email.value.match(regX)) {
        email.style.borderColor = "rgb(4, 209, 82)";
        icon2.classList.add('icon-active');
        icon1.classList.remove('icon-active');
        errorMessage.style.display = "none";
        btn.style.display = "block";
    }
    else {
        email.style.borderColor = "#e74c3c";
        icon1.classList.add('icon-active');
        icon2.classList.remove('icon-active');
        errorMessage.style.display = "block";
        btn.style.display = "none";
    }
    if (email.value == "") {
        email.style.borderColor = "rgb(172, 168, 168)";
        icon1.style.display = "none";
        icon2.style.display = "none";
        errorMessage.style.display = "none";

    }
})


const container = document.querySelector(".container")
const wrapper = document.querySelector(".wrapper");
const okBtn = document.querySelector(".ok-btn");
btn.addEventListener("click", () => {
    container.classList.add("container-active");
    wrapper.classList.add("wrapper-active");
})
okBtn.addEventListener("click", () => {
    container.classList.remove("container-active");
    wrapper.classList.remove("wrapper-active");
})