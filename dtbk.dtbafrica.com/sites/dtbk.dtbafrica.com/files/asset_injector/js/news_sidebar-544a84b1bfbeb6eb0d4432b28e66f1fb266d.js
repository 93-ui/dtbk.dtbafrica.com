$(document).ready(function() { 
  var article = $('.field--name-field-article-number').text(); 
  $('.views-field-field-article-number .field-content').each(function(){
    if($(this).text() === article){
      $(this).parent().closest('li').addClass('viewed');
    };
  })
});
