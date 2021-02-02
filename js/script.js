new Swiper('.slider', {
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  pagination: {
    el: '.swiper-pagination-phone',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return (
        '<span class="slider-pagination-current">' +
        ('0' + current).slice(-2) +
        '</span>' +
        '<span class="slider-pagination-slice">' +
        '/' +
        '</span>' +
        '<span class="slider-pagination-total">' +
        ('0' + total).slice(-2) +
        '</span>'
      );
    },
  },

  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: false,
  renderCustom: function (swiper, current, total) {
    return current + ' / ' + total;
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  speed: 450,

  autoHeight: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      touchRatio: 2,
    },
    993: {
      touchRatio: 0,
    },
  },
});
new Swiper('.slider-blog-container', {
  scrollbar: {
    el: '.slider-blog-scrollbar',
    draggable: true,
  },
  touchRatio: 1.75,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 52,

  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    450: {
      spaceBetween: 25,
    },
    600: {
      spaceBetween: 35,
    },
    993: {
      spaceBetween: 52,
    },
  },
});
$(document).ready(function () {
  $('.burger').click(function (event) {
    $('.burger, .menu__list').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.slider-item__title-left, .slider-item__title-right').click(function (
    event
  ) {
    $(this).toggleClass('active1').nextAll().slideToggle(300);
    if ($('.swiper-wrapper').hasClass('one')) {
      $('.slider-item__title-left, .slider-item__title-right')
        .not($(this))
        .removeClass('active1');
      $(
        '.slider-item__text-left, .slider-item__list-left, .slider-item__techno-wrapper'
      )
        .not($(this).nextAll())

        .slideUp(300);
    }
  });
});

// let coffee__box = document.getElementById('.box-coffee-line').offsetHeight;
// let element = { getElementById('.box-coffee-line') };
// let width =  getComputedStyle(element).width;
// let r = 360 - (180 / Math.PI) * Math.atan2(1.1);
// console.log(r, width);
