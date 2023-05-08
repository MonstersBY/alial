const sliderBaner = new Swiper(".baner__swiper", {
    navigation: {
      nextEl: ".baner__btn-next",
      prevEl: ".baner__btn-prev",
    },
    pagination: {
      el: ".baner__swiper-pagination",
    },
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: rem(0),
    speed: 1500,
    breakpoints: {
      769: {
        slidesPerView: 1,
        spaceBetween: rem(0),
        speed: 1500,
      }
    },
});
sliderBaner.on('slideChange', function (x) {
  document.querySelector('.baner__swiper-slide-number').innerHTML = `<img src="./img/icon/slide-num/${(x.activeIndex+1)}.svg" alt="">`;
});

const sliderGallery = new Swiper(".gallery__swiper", {
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: rem(0),
  speed: 1500,
  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: rem(0),
      speed: 1500,
    }
  },
});
function addZero(num) {
  return (num > 9) ? num : '0' + num;
}

const sliderPartners = new Swiper(".partners__swiper", {
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 6,
  spaceBetween: rem(0),
  speed: 1500,
  breakpoints: {
    769: {
      slidesPerView: 5.9,
      spaceBetween: rem(3.1),
      speed: 1500,
    }
  },
});

const sliderProjects = new Swiper(".projects__swiper", {
  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev",
  },
  pagination: {
    el: ".projects__swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<span class="swiper-pagination-current">${current}</span><span class="swiper-pagination-total">${total}</span>`; 
    }
  },
  slidesPerView: 1,
  spaceBetween: rem(1),
  speed: 1500,
  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: rem(1),
      speed: 1500,
    }
  },
});
