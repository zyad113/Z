document.getElementById('year').textContent = new Date().getFullYear();

const toggleMenu = () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
};