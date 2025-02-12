const hamburger = document.getElementById('hamburger-1');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', ()=>{
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
