window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    let windowPosition = window.scrollY > 0;
    navbar.classList.toggle('scrolling-active', windowPosition);
})
// Open Menu Items
document.addEventListener('click', (event) => { 
  const target =event.target
  if(target.classList.contains('header') ) {
    const block=document.querySelector(target.dataset.target)
    block.classList.toggle('display')
  }
})
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
document.getElementById("openup").addEventListener("click", () =>
    document.querySelector(".menu").classList.toggle("show")
  );