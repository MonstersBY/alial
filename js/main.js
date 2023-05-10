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
})
sliderBaner.on('slideChange', function (x) {
  document.querySelector('.baner__swiper-slide-number').innerHTML = `<img src="./img/icon/slide-num/${(x.activeIndex+1)}.svg" alt="">`
})

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
})
function addZero(num) {
  return (num > 9) ? num : '0' + num
}

const sliderPartners = new Swiper(".partners__swiper", {
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
  },
  allowTouchMove: false,
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

burgerBtn.addEventListener('click', () => {
  header.classList.toggle('active')
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
    mob: true,
  },
  {
    id: 5,
    top: 31.5,
    left: 108,
  },
  {
    id: 6,
    top: 40.5,
    left: 135.6,
    mob: true,
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

// const worldList = document.querySelector('.world__list')
// for (let i = 0; i < worldProject.length; i++) {
//   const card = document.createElement('div')
//   if (worldProject[i].mob) card.classList.add('mob')
//   card.classList.add('world__item')
//   card.innerHTML = `
//     <a href="#" class="world__name">Нефтяной завод переработки нефти</a>
//     <div class="world__circle">
//         <div class="world__circle-center"></div>
//     </div>
//   `
//   card.style.top = worldProject[i].top + 'rem'
//   card.style.left = worldProject[i].left + 'rem'
//   worldList.append(card);
// }

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
