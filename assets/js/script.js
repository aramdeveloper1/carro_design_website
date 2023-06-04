'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
// const favorite = document.getElementById('heart-favorite');
const icon = document.querySelector('.ion-icon');
const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})

// let fav = true;
// favorite.addEventListener('click', function () {
//   if (!fav) {
//     favorite.style.backgroundColor = 'red';
//   }
// })

// // gets a reference to the heartDOm
// const heartDOM = document.querySelector('#heart-favorite');
// // initialized like to false when user hasnt selected
// let liked = false;

// // create a onclick listener
// heartDOM.addEventListener('click', function () {
//   // check if liked
//   liked = !liked; // toggle the like ( flipping the variable)

//   // this is what we clicked on

//   if (liked) {
//     // remove empty heart if liked and add the full heart
//     icon.classList.remove('far');
//     icon.classList.add('fas', 'pulse');
//   } else {
//     // remove full heart if unliked and add empty heart
//     icon.classList.remove('fas');
//     icon.classList.add('far');
//   }
// })


