$(document).ready ->
  $(".slider").slick(
    centerMode: true,
    slidesToShow: 3,
    centerPadding:'5px',
    autoplay: true
    )
  options = offset: 600
  header = new Headhesive(".header",options)
  $('a[href*=#]').bind('click',  (e) ->
    e.preventDefault()
    target = $(this).attr("href")
    $('html,body').stop().animate(
      scrollTop: $(target).offset().top, 700, ->
        location.hash=target
        
      )
    false
    )



