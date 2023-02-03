$(function () {

  $('.slider-carousel').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  });


  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.slider-menu__arrow-next',
      prevEl: '.slider-menu__arrow-pref'
    },

    // pagination: {
    //   el: '.slider-menu__numbers-item',
    //   clickable: true,
    // },

    scrollbar: {
      el: '.slider-menu__progress',

      draggable: true,
    },

  });

})


$('.section-bestworks__bottom-btn').on('click', function () {
  const btn = $(this);
  console.log(btn);

  $.ajax({
    url: '../date.html',
    type: 'GET',
    beforeSend: function () {
      btn.attr('disabled', true);
    },
    success: function (responce) {
      setTimeout(function () {
        btn.attr('disabled', false);
        $('.section-bestworks__items').before(responce);
      }, 100);
    },
    error: function () {
      console.log('Error!');

    }
  });

});


