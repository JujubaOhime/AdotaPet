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
    $("#inputTel").mask("(00) 0000-00009");
    $("#inputCep").mask("00000-000");


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
        },
        inputUF :{
          maxlength : '2'
        },
        checkbox :{
          required : true
        },

      }
    });

  function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    $("#inputDistrict").val("");
    $("#inputCity").val("");
    $("#inputUF").val("");
  }

  $("#inputCep").blur(function() {
    var cep = $(this).val().replace(/\D/g, '');
    if (cep != ""){

      $("#inputDistrict").val("...");
      $("#inputCity").val("...");
      $("#inputUF").val("...");

      //Consulta o webservice viacep.com.br/
      $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

          if (!("erro" in dados)) {
              //Atualiza os campos com os valores da consulta.
              $("#inputDistrict").val(dados.bairro);
              $("#inputCity").val(dados.localidade);
              $("#inputUF").val(dados.uf);
          } //end if.
          else {
              //CEP pesquisado não foi encontrado.
              limpa_formulário_cep();
              alert("CEP não encontrado.");
          }
      });
    }
    else{
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
    }
  });
});