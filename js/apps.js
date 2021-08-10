let hamburger = document.getElementById('ham');
let bar = document.getElementById('mainbar');
let nav_responsive = document.getElementById('nav_responsive')


hamburger.addEventListener('click', function (e) {

    hamburger.classList.toggle('open')
    bar.classList.toggle('bar_mini');

    nav_responsive.classList.toggle('nav_responsive_open')
})