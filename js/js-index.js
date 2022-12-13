const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  }

const aboutToggle  = document.querySelector("#toggle-button-about");
const aboutContent = document.querySelector("#content-about");

aboutToggle.addEventListener("click", function() {
  aboutContent.classList.toggle("is-hidden");
  aboutToggle.classList.toggle("toggle-about-left");

  aboutContent.classList.toggle("animateIn");
  aboutContent.classList.toggle("animateOut");
  
  setTimeout(function() {
    aboutContent.classList.remove("animateIn");
    aboutContent.classList.remove("animateOut");
  }, 500);
});