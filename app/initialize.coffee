$(document).ready ->
  Parse.initialize('WD4SCqCV1MsggPivlA2FvNuwHym2lIWxNhpAmQxu','bgN3ACqo9x6mmfPdtaKUoSvBVw5PFSeMucjiNx8H')
  $('.popup').hide()
  $('.popup2').hide()



  $('.popup-close').click ->
    $('.popup').hide()
    $('.popup2').hide()


  $(".popup-show").click ->
    $(".popup").show()


  $('.navbar').find('.circle').click ->
    $('.circle').removeClass('active')
    $(this).addClass('active')


  $('.slider').slick(
    autoplay: true
    dots: true)


  $('.slider-review').slick(
    autoplay: true)

  
  header = new Headhesive('.footer',offset:500)


  $(".fanc").fancybox()


  $('a[href*=#]').bind('click',  (e) ->
    e.preventDefault()
    target = $(this).attr("href")
    $('html,body').stop().animate(
      scrollTop: $(target).offset().top, 700, ->
        location.hash=target     
      )
    false
    )


  $('.send').click -> 
    a = $('#name').val()
    b = $('#numb').val()
    c = $('#email').val()
    Parse.Cloud.run 'sendmail',{
      target: 'once182@mail.ru'
      originator: 'clock-landing@mail.ru'
      subject: 'Заявка на получение скидки'
      text: "Имя: #{a}, Номер: #{b}, Email: #{c}"},
      success: (success) -> 
        return console.log(success)
      error: (error) ->
        return console.log(error)
    $('.popup2').show()


  $('.send2').click -> 
    a = $('#name2').val()
    b = $('#numb2').val()
    c = $('#email2').val()
    Parse.Cloud.run 'sendmail',{
      target: 'once182@mail.ru'
      originator: 'clock-landing@mail.ru'
      subject: 'Заявка на получение скидки'
      text: "Имя: #{a}, Номер: #{b}, Email: #{c}"},
      success: (success) -> 
        return console.log(success)
      error: (error) ->
        return console.log(error)
    $('.popup2').show()

      
  $('.timer').countdown({until: '+4h 26m 25s'})

