var sliderBaner = new Swiper(".baner__swiper", {
  loop: false,
  effect: 'fade',
  slidesPerView: 1,
  freeMode: true,
  slideActiveClass: 'active',
  loopedSlides: 8,
  autoplay: {
      delay: 8000,
      disableOnInteraction: false
  },
  speed: 0,
  // loopedSlides: 6,
  pagination: {
      el: ".baner__swiper-pagination",
  },
  navigation: {
      nextEl: ".baner__btn-next",
      prevEl: ".baner__btn-prev",
  },
});
$('.baner__swiper-slide-number').children('img').addClass('active')
sliderBaner.on('slideChange', function (x) {
  document.querySelector('.baner__swiper-slide-number').innerHTML = `<img src="./img/icon/slide-num/${(x.activeIndex+1)}.svg" alt="">`
  setTimeout(()=>{
    $('.baner__swiper-slide-number').children('img').addClass('active')
  }, 1)
})
if (document.querySelector('.main-slider')) {
  setTimeout(() => { mainSlider.update() }, 100)
}

const sliderGallery = new Swiper(".gallery__swiper", {
  navigation: {
    nextEl: ".gallery__btn-next",
    prevEl: ".gallery__btn-prev",
  },
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
})
function addZero(num) {
  return (num > 9) ? num : '0' + num
}

const sliderPartners = new Swiper(".partners__swiper", {
  autoplay: {
    delay: 5000,
  },
  allowTouchMove: false,
  slidesPerView: 2.5,
  spaceBetween: rem(1.9),
  speed: 1500,
  breakpoints: {
    769: {
      slidesPerView: 5.9,
      spaceBetween: rem(3.1),
      speed: 1500,
    }
  },
})

const sliderProjects = new Swiper(".projects__swiper", {
  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev",
  },
  pagination: {
    el: ".projects__swiper-pagination",
    type: "custom",
    renderCustom: customPag,
  },
  allowTouchMove: false,
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
})

const sliderLicenses = new Swiper(".licenses__swiper", {
  navigation: {
    nextEl: ".licenses__btn-next",
    prevEl: ".licenses__btn-prev",
  },
  pagination: {
    el: ".licenses__swiper-pagination",
    type: "custom",
    renderCustom: customPag,
  },
  allowTouchMove: false,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: rem(2),
  speed: 1500,
  breakpoints: {
    769: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: rem(3.1),
      speed: 1500,
    }
  },
})

function customPag(swiper, current, total) {
  return `<span class="swiper-pagination-current">${current}</span><span class="swiper-pagination-total">${total}</span>`
}

const header = document.querySelector('header')
const burgerBtn = header.querySelector('.header__burger')
const lines = document.querySelector('.lines')

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('active')
})
lines.addEventListener('click', () => {
  if (header.classList.length == 2) header.classList.toggle('active')
})

const worldProject = [
  {
    id: 1,
    top: 17.4,
    left: 37.5,
  },
  {
    id: 2,
    top: 31.5,
    left: 29,
  },
  {
    id: 3,
    top: 39.7,
    left: 51,
  },
  {
    id: 4,
    top: 17.3,
    left: 135.6,
    mob: {
      top: 27.3,
      left: 29.6,
    },
  },
  {
    id: 5,
    top: 31.5,
    left: 108,
    mob: {
      top: 50.5,
      left: 20,
    },
  },
  {
    id: 6,
    top: 40.5,
    left: 135.6,
    mob: {
      top: 76.5,
      left: 17.6,
    },
  },
  {
    id: 7,
    top: 41.5,
    left: 95.4,
  },
  {
    id: 8,
    top: 57.3,
    left: 87,
  },
]

const worldList = document.querySelector('.world__list')
const ScreenSize = window.innerWidth;
for (let i = 0; i < worldProject.length; i++) {
  console.log(window.innerWidth)
  if (ScreenSize <= 768) {
    if(worldProject[i].mob) {
      createWorldItem(worldProject[i].mob)
    }
  } else {
    createWorldItem(worldProject[i])
  }
}

function createWorldItem (item) {
  const card = document.createElement('div')
  card.classList.add('world__item')
  card.innerHTML = `
    <a href="#" class="world__name">Нефтяной завод переработки нефти</a>
    <div class="world__circle">
        <div class="world__circle-center"></div>
    </div>
  `
  card.style.top = item.top + 'rem'
  card.style.left = item.left + 'rem'
  worldList.append(card);
}

const lang = document.querySelector('.header__language')
const langBox = lang.querySelector('.header__language-box')
const langListBox = lang.querySelectorAll('.header__language-list-box')
langBox.addEventListener('click', () => {
  lang.classList.toggle('open')
})

langListBox.forEach((btn) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < 2; i++) {
      langBox.append(btn.children[0])
      btn.append(langBox.children[0])
    }
    lang.classList.remove('open')
  });
});

wow = new WOW({
  boxClass:     'wow',
  animateClass: 'animate__animated',
  offset:       100,
  mobile:       true,
  live:         true
})
wow.init();