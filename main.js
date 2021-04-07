// nav scroll
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if(scroll >= 80) {
        $('.navBar').addClass('sticky');
    } else {
        $('.navBar').removeClass('sticky');
    }
});
//  tipkajuci naslov u headeru
const naslov = "Full Stack Web Developer";
let i =0;
const simulacijaKucanja = () => {
    if (i < naslov.length ) {
        document.querySelector('.tipkajuciNaslov').innerHTML += naslov.charAt(i);
        i++
        setTimeout(simulacijaKucanja, 150);
    }
};
simulacijaKucanja();
// hamburger meni
function toggleDropdown() {
    let navbarToggle = document.getElementById('navbar-toggle');
    if (navbarToggle.className === 'topNav') {
        navbarToggle.className += ' responsive'
    } else {
        navbarToggle.className = 'topNav'
    }
}