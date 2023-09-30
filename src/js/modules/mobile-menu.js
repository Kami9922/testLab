// const navBtn = document.querySelector('.mobile-icon');
// const menuList = document.querySelector('.header__mobile-menu');

// navBtn.onclick = function () {
//   navBtn.classList.toggle('mobile-icon--active');
//   menuList.classList.toggle('header__mobile-menu--active');
//   document.body.classList.toggle('no-scroll');
// };
import jQuery from 'jquery';

jQuery(function () {
  jQuery('.mobile-icon').on('click', function () {
    jQuery('.mobile-icon').toggleClass('mobile-icon--active');
    jQuery('.header__mobile-menu').toggleClass('header__mobile-menu--active');
    jQuery('body').toggleClass('no-scroll');
  });
});
