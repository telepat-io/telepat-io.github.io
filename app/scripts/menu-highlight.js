require(['jquery', 'stickUp'], function($, stickUp) {
  $('.sidebar-nav.second').stickUp({
    topMargin: 20
  });

  var sections = {},
    _height  = $(window).height(),
    i        = 0;

  // Grab positions of our sections 
  $('.section').each(function(){
    sections[this.id] = $(this).offset().top + 100;
  });

  function updateScroll(self) {
    var pos = self.scrollTop();
    for(i in sections){
      if(sections[i] > pos && sections[i] < pos + _height) {
        //console.log(i);
        $('.sidebar-nav.second .selected').removeClass('selected');
        $('a[href$="#'+i+'"]').addClass('selected');
        return;
      }  
    }
  }

  $(document).scroll(function(){
    updateScroll($(this));
  });

  updateScroll($(document));

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 50
      }, 200, 'swing', function () {
          window.location.hash = target;
      });
  });
});