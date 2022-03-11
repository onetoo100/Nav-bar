const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  /* added toggle on button to add X in style */
  btn.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    /* nav.scrollHeight is according to the menu's height */
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
});
