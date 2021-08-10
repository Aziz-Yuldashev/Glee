$(function () {

  $('.detalis-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.detalis-tabs__top-item').removeClass('detalis-tabs__top-item--active');
    $(this).addClass('detalis-tabs__top-item--active');

    $('.detalis-tabs__content-item').removeClass('detalis-tabs__content-item--active');
    $($(this).attr('href')).addClass('detalis-tabs__content-item--active');

  });

  $('.commetnts__item').on('click', function(t){
    t.preventDefault();
    $('.commetnts__item').removeClass('commetnts__item--active');
    $(this).addClass('commetnts__item--active');
  })

  

  $('.detalis-item__thumb').slick({
    asNavFor: '.detalis-item__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    

  });

  $('.detalis-item__big').slick({
    asNavFor: '.detalis-item__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.1,
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000

  });

  
  $('.related__items').slick({
    dots: false,
    arrows:  true,
    prevArrow: '<button type="button" class="slick-next slick-prev"><img src="images/slider/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-next--active"><img src="images/slider/arrow-right.svg" alt=""></button>',
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
    
  });
  
  $('.slick-next').on('click', function(q){
    q.preventDefault();
    $('.slick-next').removeClass('slick-next--active');
    $(this).addClass('slick-next--active');


  });
  
  

  $(".star, .filter-recent__star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px",
   

  });

  $(".shop-content__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px",
  });

  $(".detalis-item__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px",

  });

  $('.detalis-item__num').styler({

  }); 

  

  var Mixer = mixitup('.products__content');
  var Mixer = mixitup('.design__content');

});