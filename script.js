// toggle class active
const navbarnav = document.querySelector('.navbar-nav');
const menuIcon = document.querySelector('#hamburger-menu'); // ganti ke id baru

// ketika menu diklik
menuIcon.onclick = (e) => {
    e.preventDefault();
    navbarnav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function (e) {
if (!menuIcon.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove('active');
    }
});


