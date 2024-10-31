// initSwiper();
// window.addEventListener('resize', initSwiper);

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   updateOnWindowResize: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//     // Default parameters
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       enabled: true,
//     },
//     320: {
//       slidesPerView: 1.5,
//       enabled: true,
//     },
    
//     540: {
//       slidesPerView: 2.5,
//       enabled: true,
//     },

//     768: {
//       enabled: false,
//     },
//   }
// });


function initSwiper() {
  if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
        // Default parameters

    breakpoints: {
      0: {
        slidesPerView: 1,
        enabled: true,
      },
      320: {
        slidesPerView: 1.5,
        enabled: true,
      },
      
      540: {
        slidesPerView: 2.5,
        enabled: true,
      }
    }
  });
  }  
}

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper); 

// else {
  //   swiper.destroy(deleteInstance, cleanStyles);
  // }