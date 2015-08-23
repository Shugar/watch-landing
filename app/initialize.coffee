$(document).ready ->
  Parse.initialize('WD4SCqCV1MsggPivlA2FvNuwHym2lIWxNhpAmQxu','bgN3ACqo9x6mmfPdtaKUoSvBVw5PFSeMucjiNx8H')
  $(".popup-show").click ->
    $(".popup").show()
  $('.navbar').find('.circle').click ->
    $('.circle').removeClass('active')
    $(this).addClass('active')
  $('.slider').slick(
    autoplay: true)
  clock = $('.timer').FlipClock()
  clock.setTime(15000)
  clock.setCountdown(true)
  $('.button').click -> 
    a = $('#name').val()
    b = $('#numb').val()
    c = $('#email').val()
    Parse.Cloud.run 'sendmail',{
      target: 'once182@mail.ru'
      originator: 'clock-landing@mail.ru'
      subject: 'Заявка на получение скидкидки'
      text: "Имя: #{a}, Номер: #{b}, Email: #{c}"},
      success: (success) -> 
        return console.log(success)
      error: (error) ->
        return console.log(error)

      



