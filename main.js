
  $(document).ready(function(){

    $('.total').click(function(){
      $(this).toggleClass('on');
      $('header .second_menubar').toggleClass('on');
    });

    var origin_menu_coment_color;
    var origin_lang_color;
    var origin_lang_border;
    var $top = $('#topbutton');
    var $menu = $('header .menu nav ul');
    var $menu_coment = $menu.find('li a');
    var $lang = $('header .language a');
    var $back_color = $('header .background_color');
    var duration = 400;
    var $snb = $('.contents #snb li a');

    $(window).scroll(function(){
      var height = $(document).scrollTop();
      if(height!=0){
        $top.addClass('visible');
        $back_color.addClass('shadowy');
        $menu_coment.css('color','#042e6f');
        $lang.css('color','#042e6f');
        $lang.css('border','1px solid #042e6f');
        $back_color.css('opacity','1');
        origin_menu_coment_color = '#042e6f';
        origin_lang_color = '#042e6f';
        origin_lang_border = '1px solid #042e6f';
      }else if(height==0){
        $top.removeClass('visible')
        $back_color.removeClass('shadow');
        $menu_coment.css('color','#f2f2f2');
        $lang.css('color','#f2f2f2');
        $lang.css('border','1px solid #f2f2f2');
        $back_color.css('opacity','0.3');
        origin_menu_coment_color = '#f2f2f2';
        origin_lang_color = '#f2f2f2';
        origin_lang_border = '1px solid #f2f2f2';
      }
    });

    window.onload = function(){
      var height = $(document).scrollTop();
      if(height!=0){
        $top.addClass('visible');
        $menu_coment.css('color','#042e6f');
        $lang.css('color','#042e6f');
        $lang.css('border','1px solid #042e6f');
        $back_color.css('opacity','1');
        origin_menu_coment_color = '#042e6f';
        origin_lang_color = '#042e6f';
        origin_lang_border = '1px solid #042e6f';
      }else if(height==0){
        $top.removeClass('visible')
        $menu_coment.css('color','#f2f2f2');
        $lang.css('color','#f2f2f2');
        $lang.css('border','1px solid #f2f2f2');
        $back_color.css('opacity','0.3');
        origin_menu_coment_color = '#f2f2f2';
        origin_lang_color = '#f2f2f2';
        origin_lang_border = '1px solid #f2f2f2';
      }
    }

    $('#topbutton a').click( function(){
      $('html, body').stop().animate({scrollTop:0},400);
      return false;
    });



    $menu.on('mouseover', function(){
      $menu_coment.css('color','#042e6f');
      $lang.css('color','#042e6f');
      $lang.css('border','1px solid #042e6f');
      $back_color.stop().animate({opacity:0.8, height:'300px'},duration);
    });

    $menu.on('mouseout', function(){
      $menu_coment.css('color',origin_menu_coment_color);
      $lang.css('color',origin_lang_color);
      $lang.css('border',origin_lang_border);
      $back_color.stop().animate({opacity:0.3, height:'50px'},duration);
    });



  });
