let navbar = document.querySelector('.navbar')
let btn = document.querySelector('#list-btn')

btn.onclick = () =>{
    navbar.classList.toggle('active')
}


var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });