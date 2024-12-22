
let a = document.querySelector('.topnav_links:first-child');
const navlinks = document.querySelectorAll('.topnav_links');

navlinks.forEach((navlink) => {
    navlink.addEventListener('mouseover', () => {
        a.classList.remove('border_show');
    });

    navlink.addEventListener('mouseout', () => {
        a.classList.add('border_show');
    });
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        document.querySelector('#top-bar').classList.add('navbar_scroll');
    } else {
        document.querySelector('#top-bar').classList.remove('navbar_scroll');
    }
});

let dropbtn = document.querySelector('.dropbtn');
let dropdown = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});
