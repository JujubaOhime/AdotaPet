$(window).scroll(function() {
    if ($(this).scrollTop()>100)
     {
        $('#icon-scroll').fadeOut(500);
     }
    else
     {
      $('#icon-scroll').fadeIn(500);
     }
 });

 $(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })


$('document').ready(function(){
    $('#inputCpf').mask('000.000.000-00');
    $('#inputRG').mask("99.999.999-9");
    $("#inputTel").mask("(00) 0000-00009")

    $("#formRegister").validate({
      rules: {  
        inputConfirmPassword : {
					equalTo : "#inputPassword"
        },
        inputCpf :{
          minlength : '14'
        },
        inputRg :{
          minlength : '12'
        }
        
      }
    });
});