wow = new WOW();
wow.init();
$(document).ready(function(e) {

$('#video-icon').on('click',function(e){
e.preventDefault();
$('.video-popup').css('display','flex');
$('.iframe-src').slideDown();
});
$('.video-popup').on('click',function(e){
var $target = e.target.nodeName;
var video_src = $(this).find('iframe').attr('src');
if($target != 'IFRAME'){
$('.video-popup').fadeOut();
$('.iframe-src').slideUp();
$('.video-popup iframe').attr('src'," ");
$('.video-popup iframe').attr('src',video_src);
}
});

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

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal, button, and close elements
    var modal = document.getElementById('myModal');
    var openModalBtn = document.querySelectorAll('openModalBtn');
    var closeModalBtn = document.querySelector('.close');

    // Open the modal when the button is clicked
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle sign-up button click
    var signUpBtn = document.getElementById('signUpBtn');
    signUpBtn.addEventListener('click', function() {
        alert('Sign Up functionality to be implemented.');
    });
});
