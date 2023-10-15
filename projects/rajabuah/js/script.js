// Toggle class active
const navbarNav = document.querySelector('.Navbar-nav');
// ketika fruit menu di klik 
document.querySelector('#fruit-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const fruit = document.querySelector('#fruit-menu');

document.addEventListener('click', function (e) {
    if (!fruit.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

