// if (!customElements.get("swiper-logo-bar")) {
//     customElements.define(
//       "swiper-logo-bar",
//       class SwiperLogoSlider extends HTMLElement {
//         constructor() {
//           super();

//           var slider = this.swiper;
//           this.sectionId = this.dataset.sectionId;
//           this.slideshow = "#LogoSlider-" + this.sectionId;

//           document.addEventListener("DOMContentLoaded", () => {
//             this.initSwiper();
//           });

//           // Listen for window resize events
//           var _this = this;
//           window.addEventListener("resize", () => {
//             _this.initSwiper();
//             _this.destroySwiper();
//           });
//         }

//         initSwiper() {
//           const slider = this.querySelector("#LogoSlider-" + this.sectionId);
//           this.swiper = new Swiper(slider, {
//             slidesPerView: 1,
//             spaceBetween: 0,
//             grabCursor: false,
//             keyboard: {
//               enabled: true,
//             },
//             allowTouchMove: true,
//             preventInteractionOnTransition: false,
//             // Responsive breakpoints
//             breakpoints: {
//               // when window width is >= 640px
//               641: {
//                 slidesPerView: 2,
//                 spaceBetween: 30,
//               },
//               1008: {
//                 slidesPerView: 2,
//                 spaceBetween: 50,
//               },
//               1200: {
//                 slidesPerView: 3,
//                 spaceBetween: 50,
//               },
//             },
//             scrollbar: {
//               el: ".swiper-scrollbar",
//               dragSize: "auto",
//             },
//           });
//         }

//         destroySwiper() {
//           if (window.innerWidth > 768 && this.swiper !== null) {
//             this.swiper.destroy();
//             this.swiper = null;
//           }
//         }
//       }
//     );
//   }

if (!customElements.get("swiper-logo-bar")) {
  customElements.define(
    "swiper-logo-bar",
    class SwiperLogoSlider extends HTMLElement {
      constructor() {
        super();
        const swiper = new Swiper(".swiper", {
          // Default parameters
          slidesPerView: 1,
          spaceBetween: 0,
          // Responsive breakpoints
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
          },
          pagination: false,
        });
      }
    }
  );
}
