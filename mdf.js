$(document).on('ready', function() {
  

  var outerShell = $('<div class="outer-shell"></div>');
  var innerShell = $('<div class="inner-shell"></div>');

  outerShell.append(innerShell);
  $('body').append(outerShell);
});