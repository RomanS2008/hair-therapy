function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let element = document.querySelectorAll('.promo_wrapper');
let st = document.querySelectorAll('.about_wrapper_item');
let nd = document.querySelectorAll('.about_wrapper_item');
let rd = document.querySelectorAll('.about__wrapper__item__wrapper__item');
for (let elm of element) {
    observer.observe(elm);
}
for (let s of st) {
    observer.observe(s);
}
for (let n of nd) {
    observer.observe(n);
}
for (let it of rd) {
    observer.observe(it);
}

$('#slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 9000,
  prevArrow: '<button type="button" class="result_wrapper_slick-prev"><img src="../icons/arrow_left.png"></button>',
  nextArrow: '<button type="button" class="result_wrapper_slick-next"><img src="../icons/arrow_right.png"></button>'
});

let hamb = document.querySelector('.header_hamburger'),
  li = document.querySelector('.header_list')

hamb.addEventListener('click', () => {
  hamb.classList.toggle('header_hamburger_active')
  li.classList.toggle('header_list_active')
})