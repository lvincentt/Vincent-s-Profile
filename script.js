const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu')

hamburger.addEventListener('click', function() { 
    navMenu.classList.toggle('hidden');
});