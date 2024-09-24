const burger2 = document.getElementById('burger2');
const navLinks = document.querySelector('.nav-links'); 

burger2.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger2.classList.toggle('active');
});