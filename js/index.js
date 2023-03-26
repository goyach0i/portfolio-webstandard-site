// 탭메뉴
const $tab_list = $('.tab_menu');

$tab_list.find('ul ul').hide();
$tab_list.find('li.active > ul').show();

const tabMenu = (event) => {
  event.preventDefault();
  console.log(event);
  $(event.target)
    .next('ul')
    .show()
    .parent('li')
    .addClass('active')
    .siblings('li')
    .removeClass('active')
    .find('>ul')
    .hide();
};
$tab_list.find('ul>li>a').click(tabMenu);

// 배너 슬라이드
$('.ban').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
});

// 갤러리
$('.gallery_img').slick({
  arrows: false,
  fade: true,
  pauseOnHover: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 200,
  slidesToShow: 1,
});

$('.play').click(() => {
  $('.gallery_img').slick('slickPlay');
});
$('.pause').click(() => {
  $('.gallery_img').slick('slickPause');
});
$('.prev').click(() => {
  $('.gallery_img').slick('slickPrev');
});
$('.next').click(() => {
  $('.gallery_img').slick('slickNext');
});

// 전체 메뉴
$('.tit .btn').click((event) => {
  event.preventDefault();
  $('#cont_nav').slideToggle(400);
  $(event.target).toggleClass('on');
});

// layer 팝업
$(window).load(() => {
  $('body').css('background', 'rgba(0,0,0,0.6)');
  $('#layer').css('display', 'block');
  $('#wrap').css('pointer-events', 'none');
});

$('.layer').click((event) => {
  event.preventDefault();
  $('#layer').slideDown();
  $('body').css('background', 'rgba(0,0,0,0.6)');
  $('#wrap').css('pointer-events', 'none');
  $('#wrap').css('opacity', '0.3');
});
$('#layer .close').click((event) => {
  event.preventDefault();
  $('#layer').slideUp();
  $('body').css('background', '');
  $('#wrap').css('pointer-events', '');
  $('#wrap').css('opacity', '1');
});

// window 팝업
$('.window').click((event) => {
  event.preventDefault();
  window.open(
    './src/popup.html',
    'popup01',
    'width=800, height=560, top=50, left=100, scrollbars=0, toolbar=0,menubar=0',
  );
});
