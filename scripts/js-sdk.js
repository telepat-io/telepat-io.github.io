require(['jquery'], function($) {
  function updateFile() {
    var file = window.location.hash.replace('#', '');
    if (file === '')
      file = 'telepat';
    $('#iframe').attr('src', 'javascript-sdk/lib/' + file + '.js.html');
  }

  $('#delta-menu').addClass('selected');
  updateFile();
  $(window).on('hashchange', function() {
    updateFile();
  });
});