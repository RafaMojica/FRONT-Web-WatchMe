const appearMenu = () => {
  const iconOpen = document.querySelector("#icon-menu");
  const iconClose = document.querySelector("#icon-close");
  const menu = document.querySelector(".navbar-menu");

  menu.classList.toggle("open");
  iconOpen.classList.toggle("appear");
  iconClose.classList.toggle("appear");
};

export default appearMenu
