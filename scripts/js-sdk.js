require(['jquery'], function($) {
  function updateFile() {
    var file = window.location.hash.replace('#', '');
    if (file === '')
      $('#iframe').attr('src', 'http://docs.telepat.io/telepat-js/README.md.html');
    else
      $('#iframe').attr('src', 'http://docs.telepat.io/telepat-js/lib/' + file + '.js.html');
  }

  $('#epsilon-menu').addClass('selected');
  updateFile();
  $(window).on('hashchange', function() {
    updateFile();
  });
});