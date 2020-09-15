
  $('body').on("click", function(event) {

    var el = $(event.target);
    var node = $(event.target).attr('id');

    if(String(node)=== String('slideout-btn') || el.parents('.slideout-toggle').length){
      $("#slideout-btn").toggleClass('js-slideout-toggle--fixed-open');
      $('.slideout-menu').fadeToggle( "fast", "linear" );
      
    }else if(el.parents('.slideout').length){
    }else{
      $("#slideout-btn").removeClass('js-slideout-toggle--fixed-open');

      $('.slideout-menu').hide( "fast", "linear" );
    }
});

$('.slideout ul.clearfix.menu li.menu-item--expanded > a').click(function(e){
      e.preventDefault();
      $(this).next("ul").fadeToggle( "fast", "linear" );
      $(this).parent().siblings().find('ul').fadeOut(150);
      $(this).toggleClass('open-nav');
      $(this).parent().siblings().find('a').removeClass("open-nav");
});


$('.slideout ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded a').click(function(e){
  $('.slideout ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded a').not(this).removeClass("open-menu");
  $('.slideout ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded a').not(this).removeClass("open-nav");
      $('.slideout ul.clearfix.menu li.menu-item--expanded ul.menu li.menu-item--expanded ul.menu').each( function() {
          if($(this).is(':visible'))
            {     
                 $(this).hide();
            }
      });
      $(this).toggleClass('open-menu');
      $(this).next("ul").show(); 

});