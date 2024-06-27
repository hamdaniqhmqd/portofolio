// navbar fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const tombolToTop = document.querySelector('#tombol-keatas')
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    tombolToTop.classList.remove('hidden');
    tombolToTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    tombolToTop.classList.add('hidden');
    tombolToTop.classList.remove('flex');
  }
}

// hamburger
const hamburger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('humberger-active');
  navMenu.classList.toggle('hidden');
})

// klik luar hamburger
window.addEventListener('click', function (e) {
  if(!hamburger.contains(e.target) && !navMenu.contains(e.target)){
    hamburger.classList.remove('humberger-active');
    navMenu.classList.add('hidden');
  }
});

// dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
    moon.classList.remove('hidden');
    sun.classList.add('hidden');
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
    moon.classList.add('hidden');
    sun.classList.remove('hidden');
  }
})

// toggle dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
  moon.classList.remove('hidden');
  sun.classList.add('hidden');
} else {
  darkToggle.checked = false;
}