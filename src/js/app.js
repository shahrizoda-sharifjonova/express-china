import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".comments__swiper", {
  grabCursor: true,
  // loop: true,
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".comments__button-next",
    prevEl: ".comments__button-prev",
  },
  pagination: {
    el: ".comments__pagination",
    clickable: true,
  },
  breakpoints:{
    1400:{
      spaceBetween: 30,
      slidesPerView: 4,
    },
    992:{
      slidesPerView: 3,
    }, 
    768:{
      slidesPerView: 2,
    }
  }
});

new Swiper(".videos__swiper", {
  grabCursor: true,
  // loop: true,
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".videos__button-next",
    prevEl: ".videos__button-prev",
  },
  pagination: {
    el: ".videos__pagination",
    clickable: true,
  },
  breakpoints:{
    1400:{
      spaceBetween: 30,
      slidesPerView: 4,
    },
    992:{
      slidesPerView: 3,
    }, 
    768:{
      slidesPerView: 2,
    }
  }
});
new Swiper(".photos__swiper", {
  grabCursor: true,
  // loop: true,
  modules: [Navigation,Pagination],
  slidesPerView: "auto",
  navigation: {
    nextEl: ".photos__button-next",
    prevEl: ".photos__button-prev",
  },
  breakpoints:{
    1200:{
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});
new Swiper(".delivery__swiper", {
  grabCursor: true,
  // loop: true,
  modules: [Pagination],
  slidesPerView:1,
  spaceBetween: 30,
  pagination: {
    el: ".delivery__pagination",
    clickable: true,
  },
  breakpoints:{
    992:{
      slidesPerView:3,
    },
    768:{
      slidesPerView:2,
    }
  }
});

const menu = document.querySelectorAll(".menu");
const headerList = document.querySelector(".header__list");
const  body = document.querySelector('body');
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  menu.forEach(btn => {
    btn.classList.toggle("active");
  })
  headerList.classList.toggle("active");
  body.classList.toggle("hidden");
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

document.querySelectorAll('.services__button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.services__button').forEach(btn2 => {
      btn2.classList.remove('active')
    })
    btn.classList.add('active')
    const tar = btn.getAttribute('data-target');
    document.querySelectorAll('.services__wrapper').forEach(item => {
      item.classList.remove('active')
    })
    document.querySelector(`#${tar}`).classList.add('active');
  })
})