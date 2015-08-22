$(document).ready ->
  $(".popup-show").click ->
    $(".popup").show()
  $('.navbar').find('.circle').click ->
    $('.circle').removeClass('active')
    $(this).addClass('active')
  $('.slider').slick(
  	autoplay: true)
  



