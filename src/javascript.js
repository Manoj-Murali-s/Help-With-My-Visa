// for slider testimonial 
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      640: {
        centeredSlides: true,
        slidesPerView: 1,
      },
      1024: {
        centeredSlides: false,
        slidesPerView: 3,
      },
      3000: {
        centeredSlides: false,
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button',
    },
  })
})
// for drop down 

document.addEventListener("alpine:init", () => {
  Alpine.data("select", () => ({
      open: false,
      country: "",

      toggle() {
          this.open = !this.open;
      },

      setCountry(val) {
          this.country = val;
          this.open = false;
      },
  }));
});