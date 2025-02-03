wow = new WOW();
wow.init();

$(document).ready(function(e) {

    $('.slider').bxSlider({
    pager: false
    });
    });


$(window).on("scroll",function () {

var bodyScroll = $(window).scrollTop(),
navbar = $(".navbar");

if(bodyScroll > 50){
$('.navbar-logo img').attr('src','images/logo-black.png');
navbar.addClass("nav-scroll");

}else{
$('.navbar-logo img').attr('src','images/logo.png');
navbar.removeClass("nav-scroll");
}

});
$(window).on("load",function (){
var bodyScroll = $(window).scrollTop(),
navbar = $(".navbar");

if(bodyScroll > 50){
$('.navbar-logo img').attr('src','images/logo-black.png');
navbar.addClass("nav-scroll");
}else{
$('.navbar-logo img').attr('src','images/logo-white.png');
navbar.removeClass("nav-scroll");
}

$.scrollIt({

easing: 'swing',      // the easing function for animation
scrollTime: 900,       // how long (in ms) the animation takes
activeClass: 'active', // class given to the active nav element
onPageChange: null,    // function(pageIndex) that is called when page is changed
topOffset: -63
});
});


//Auto-Slider
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider-item');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Auto-slide every 5 seconds (5000 milliseconds)
    setInterval(nextSlide, 3000);
});

document.getElementById('moreButton').addEventListener('click', function () {
    var hiddenFAQs = document.getElementById('hiddenFAQs');
    
    if (hiddenFAQs.style.display === 'none' || hiddenFAQs.style.display === '') {
        hiddenFAQs.style.display = 'flex';
        hiddenFAQs.style.flexWrap = 'wrap';
        this.textContent = 'Less';
    } else {
        hiddenFAQs.style.display = 'none';
        this.textContent = 'More';
    }
});


//Modal Handler
document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and close elements
    var modal = document.getElementById('myModal');
    var closeModalBtn = document.querySelector('.close');

    // Get all buttons with the class 'openModalBtn'
    var openModalBtns = document.querySelectorAll('.openModalBtn');

    // Loop through all buttons and attach the event listener
    openModalBtns.forEach(function (button) {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle sign-up button click
    var signUpBtn = document.getElementById('signUpBtn');
    signUpBtn.addEventListener('click', function () {
        alert('Sign Up functionality to be implemented.');
    });
});
