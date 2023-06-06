import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelectorAll(".menu");
const headerList = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  menu.forEach(btn => {
    btn.classList.toggle("active");
  })
  headerList.classList.toggle("active");
};

menu.forEach(btn => {
  btn.onclick = menuToggle;
})

window.onclick = (e) => {
  if (
    menuOpened && (
      menu.forEach(btn => {
        !e.composedPath().includes(btn)
      })
    ) && !e.composedPath().includes(headerList)
  )
    menuToggle();
};