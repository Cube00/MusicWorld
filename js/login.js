const loginBt1 = document.querySelector(".pop-up-login1");
const loginBt2 = document.querySelector(".pop-up-login2");
const lg1 = document.querySelector("#log-in-1");
const lg2 = document.querySelector("#log-in-2");
const headCont = document.querySelector(".head-main-content");

loginBt1.addEventListener("click", () => {
  if (!lg1.classList.contains("active")) {
    lg1.classList.add("active");
    document.querySelector(".log-in").classList.add("log-act");
    document.querySelector(".sing-up").classList.remove("sing-up-act");
  } else {
    lg1.classList.remove("active");
    document.querySelector(".log-in").classList.remove("log-act");
  }
  if (lg2.classList.contains("active")) {
    lg2.classList.remove("active");
  }
});
loginBt2.addEventListener("click", () => {
  if (!lg2.classList.contains("active")) {
    lg2.classList.add("active");
    document.querySelector(".sing-up").classList.add("sing-up-act");
    document.querySelector(".log-in").classList.remove("log-act");
  } else {
    lg2.classList.remove("active");
    document.querySelector(".sing-up").classList.remove("sing-up-act");
  }
  if (lg1.classList.contains("active")) {
    lg1.classList.remove("active");
  }
});
