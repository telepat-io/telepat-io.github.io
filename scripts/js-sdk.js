require(['jquery'], function($) {
  $('#delta-menu').addClass('selected');
  frames[0].window.eval($(frames[0].document.getElementsByClassName("dir")[0]).addClass('open'));
});