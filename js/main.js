const breakpoint = window.matchMedia('(max-width: 1019px)');

const initSwiper = () => {
  if (breakpoint.matches) {
    const swiper = new Swiper('.advantages-swiper', {
      navigation: {
        nextEl: '.advantages__button-next',
        prevEl: '.advantages__button-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 25,
        },

        700: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 25,
        },
      },
      pagination: {
        el: '.advantages__pagination',
      },
    })
    window.addEventListener('resize', () => {
      if (!breakpoint.matches) {
        swiper.destroy(true, true);
      }
    })
  }
};

const initSwiperOnResize = () => {
  window.addEventListener('resize', () => {
    if (breakpoint.matches) {
      const swiper = new Swiper('.advantages-swiper', {
        navigation: {
          nextEl: '.advantages__button-next',
          prevEl: '.advantages__button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 25,
          },

          700: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 25,
          },
        },
        pagination: {
          el: '.advantages__pagination',
        },
      });
      window.addEventListener('resize', () => {
        if (!breakpoint.matches) {
          swiper.destroy(true, true);
        }
      })
    }
  })
}

const initSwiperAchievements = () => {
  const achievementSwiper = new Swiper('.achievement-swiper', {
    navigation: {
      nextEl: '.achievement__button-next',
      prevEl: '.achievement__button-prev',
    },

    breakpoints: {
      700: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 26,
      },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 25,
      },
    },
    pagination: {
      el: '.achievement__pagination',
    },
  });

  return achievementSwiper;
};

const video = document.querySelector('.about__video');
const iframeBlock = video.querySelector('[data-video-container]');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);
  return iframe;
};

const playVideo = () => {
  if (video && iframeBlock) {
    video.style.display = 'block';
    video.style.frameborder = 0;
    const newIframe = createIframe(iframeBlock);
    iframeBlock.append(newIframe);
  }
};

initSwiper();
initSwiperOnResize();
initSwiperAchievements();
playVideo()