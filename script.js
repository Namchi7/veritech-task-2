const closeMobileNav = () => {
  const mobileNav = document.querySelector("#mobile-nav");
  const mobileNavBg = document.querySelector("#mobile-nav-bg-close");

  mobileNav.style.display = "none";
  mobileNavBg.style.display = "none";
};

const openMobileNav = () => {
  const mobileNav = document.querySelector("#mobile-nav");
  const mobileNavBg = document.querySelector("#mobile-nav-bg-close");

  mobileNav.style.display = "flex";
  mobileNavBg.style.display = "flex";
};

document.querySelector("#menu-open").addEventListener("click", () => {
  openMobileNav();
});

document.querySelector("#menu-close").addEventListener("click", () => {
  closeMobileNav();
});

document.querySelector("#mobile-nav-bg-close").addEventListener("click", () => {
  closeMobileNav();
});

document.querySelectorAll("#nav-links").forEach((item) => {
  item.addEventListener("click", () => {
    closeMobileNav();
  });
});
