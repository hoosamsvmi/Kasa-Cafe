if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

const nav = document.querySelectorAll("[navigation]");
nav.forEach((btn) => {
  btn.addEventListener("click", function () {
    const sectionid = btn.getAttribute("navigation");
    const targetsection = document.getElementById(sectionid);
    targetsection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
