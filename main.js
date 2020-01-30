
  $(document).ready(function(){

    var origin_menu_coment_color;
    var origin_lang_color;
    var origin_lang_border;

    $(window).scroll(function(){
      var height = $(document).scrollTop();
      if(height!=0){
        $menu_coment.css('color','#042e6f');
        $lang.css('color','#042e6f');
        $lang.css('border','1px solid #042e6f');
        $back_color.css('opacity','1');
        origin_menu_coment_color = '#042e6f';
        origin_lang_color = '#042e6f';
        origin_lang_border = '1px solid #042e6f';
      }else if(height==0){
        $menu_coment.css('color','#f2f2f2');
        $lang.css('color','#f2f2f2');
        $lang.css('border','1px solid #f2f2f2');
        $back_color.css('opacity','0.3');
        origin_menu_coment_color = '#f2f2f2';
        origin_lang_color = '#f2f2f2';
        origin_lang_border = '1px solid #f2f2f2';
      }
    })

    var $menu = $('header .menu nav ul');
    var $menu_coment = $menu.find('li a');
    var $lang = $('header .language a');
    var $back_color = $('header .background_color');
    var duration = 400;

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
