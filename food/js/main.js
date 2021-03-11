const slidesBreakfast =document.querySelectorAll('.slide-breakfast');
const slidesPasta =document.querySelectorAll('.slide-pasta');
const slidesPizza =document.querySelectorAll('.slide-pizza');
const slidesSandwich =document.querySelectorAll('.slide-sandwich');
const auto = true;
const intervalTime =2000;
let slideInterval;


const nextSlide = () => {
    // Get current class
    const currentBreakfast = document.querySelector('.current-breakfast');
    const currentPasta = document.querySelector('.current-pasta');
    const currentPizza = document.querySelector('.current-pizza');
    const currentSandwich = document.querySelector('.current-sandwich');

    // Remove current class
    currentBreakfast.classList.remove('current-breakfast');
    currentPasta.classList.remove('current-pasta');
    currentPizza.classList.remove('current-pizza');
    currentSandwich.classList.remove('current-sandwich');
    // Check for next slide
    if (currentBreakfast.nextElementSibling || currentPasta.nextElementSibling || currentPizza.nextElementSibling || currentSandwich.nextElementSibling) {
      // Add current to next sibling
      currentBreakfast.nextElementSibling.classList.add('current-breakfast');
      currentPasta.nextElementSibling.classList.add('current-pasta');
      currentPizza.nextElementSibling.classList.add('current-pizza');
      currentSandwich.nextElementSibling.classList.add('current-sandwich');
    } else {
      // Add current to start
      slidesBreakfast[0].classList.add('current-breakfast');
      slidesPasta[0].classList.add('current-pasta');
      slidesPizza[0].classList.add('current-pizza');
      slidesSandwich[0].classList.add('current-sandwich');
    }
    setTimeout(() => {
      currentBreakfast.classList.remove('current-breakfast');
      currentPasta.classList.remove('current-pasta');
      currentPizza.classList.remove('current-pizza');
      currentSandwich.classList.remove('current-sandwich');
  });
  };
  if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }
//Modal for contacts
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
      }
});
//Fixed navbar
window.addEventListener('scroll', () => {
  let navbar = document.querySelector('.navbar');
  let windowPosition = window.scrollY > 0;
  navbar.classList.toggle('scrolling-active', windowPosition);
})
//menu open on small
document.getElementById("openup").addEventListener("click", () =>
    document.querySelector(".menu").classList.toggle("show")
  );
