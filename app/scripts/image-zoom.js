
require(['jquery'], function($) {
  // $('#main-content img').wrap('<span style="display:inline-block"></span>')
  //   .css('display', 'block')
  //   .parent()
  //   .zoom();
  $('#main-content img').hover(function() {
    $(this).addClass('transition');
  }, function() {
    $(this).removeClass('transition');
  });
});
