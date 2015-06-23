require(['jquery'], function($) {
  function updateFile() {
    var file = window.location.hash.replace('#', '');
    if (file === '')
      $('#iframe').attr('src', 'javascript-sdk/README.md.html');
    else
      $('#iframe').attr('src', 'javascript-sdk/lib/' + file + '.js.html');
  }

  $('#delta-menu').addClass('selected');
  updateFile();
  $(window).on('hashchange', function() {
    updateFile();
  });
});