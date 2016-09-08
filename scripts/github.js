/*jshint loopfunc: true */

require(['jquery', 'cookie', 'ace/lib/ace/ace'], function($, Cookies, ace) {
  $('pre code').each(function() {
    var $this = $(this),
        $code = $this.html();

    $this.css('visibility', 'visible');
    var editor = ace.edit(this);
    editor.setTheme("ace/lib/ace/theme/monokai");
    editor.setOption("maxLines", 50);
    editor.setOption("readOnly", true);
    editor.getSession().setMode("ace/lib/ace/mode/javascript");
    editor.getSession().setUseWrapMode(true);
    editor.setShowPrintMargin(false);
  });

  if(!Cookies.get('authenticated')) {
    $('pre code').each(function() {
      $(this).parent().append('<div class="code-overlay"><div class="login-button"><i class="fa fa-github" aria-hidden="true"></i> <span>Login with GitHub to view source</span></div></div>');
    });
    $('.login-button').click(function() {
      window.open("https://github.com/login/oauth/authorize?client_id=3d8b7fe111b6c387c261&scope=user:email", "GitHub Login", "width=800,height=550,top=150,left=300");
    });
  }
});
