$(document).ready ->
  $(".slider").slick(
    centerMode: true,
    slidesToShow: 3,
    centerPadding:'5px',
    autoplay: true
    )
  options = offset: 600
  header = new Headhesive(".header",options)