$(document).ready ->
  $(".slider").slick(
    centerMode: true,
    slidesToShow: 3,
    centerPadding:'5px',
    autoplay: true
    )
  $(".slider-review").slick()
  options = offset: 650
  header = new Headhesive(".header",options)
  clock = $(".flip").FlipClock()
  clock.setCountdown(true)
  clock.setTime(19000)
  $('a[href*=#]').bind('click',  (e) ->
    e.preventDefault()
    target = $(this).attr("href")
    $('html,body').stop().animate(
      scrollTop: $(target).offset().top, 700, ->
        location.hash=target
        
      )
    false
    )



