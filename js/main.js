$(document).ready(function () {
    checkScroll();
    checkForm();
    carouSel();
    ustawDate();
});

$(window).scroll(function () {
    checkScroll();
    checkForm();
});
//TRANSPARENTNAV
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("after-fix");
    } else {
        $('.navbar').removeClass("after-fix");
    }
}

function checkForm() {
    var startY = $('.formularz').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.formularz').addClass("faduj");
    } else {
        $('.formularz').removeClass("faduj");
    }
}

//KARUZELA
function carouSel() {
$('.carousel').carousel({
  interval: 2000
})
}

function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

function ustawDate() {

var today = new Date();
var year = today.getFullYear();

var rok = document.getElementById('main-footer');
rok.innerHTML = '<p>Copyright &copy;' + year + ' Adam Stasiun </p>';
}
