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