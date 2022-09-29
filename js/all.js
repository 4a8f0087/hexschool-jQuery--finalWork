$(document).ready(function() {
  
  /*下拉選單*/
  $('.dropdown').mouseenter(function(event) {

  event.preventDefault();

  $('.dropdown').toggleClass('active');
  $('.dropdownOpen').slideToggle(500);
    })

  $(".menu[href$='.caret-down']").addClass('fa-solid fa-caret-down');

  /*top按鈕回到最上面*/
  $('.top a').click(function(event){

  event.preventDefault();

  $('html,body').animate({
  scrollTop: 0
  }, 650);
    });

  });

  /*Swiper 輪播*/
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    autoplay: {
    delay: 1500,
    },
    effect: 'flip',
    flipEffect: {
    slideShadows: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });
