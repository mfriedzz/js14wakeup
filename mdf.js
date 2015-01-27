$(document).on('ready', function() {
  

  var outerShell = $('<div class="outer-shell"></div>');
  var innerShell = $('<div class="inner-shell"></div>');

  

  var leftAM = $('<div class="leftAM"><label>Left AM White</label></div>');
  var leftPM = $('<div class="leftPM"><label>Left FM White</label></div>');
  var autoLabels = $('<div class="autoLabels"><label>autolabels white</label></div>');

  //var clockScreen = $('<div class="clockScreen"><label>CLOCKSCREEN dark red</label></div>');
  var clockScreen = $(this).datetimeEntry({datetimeFormat: 'D/O/Y H:Ma'});
  var clockAM = $('<div class="clockam"><label>AM red</label></div>');
  var clockPM = $('<div class="clockPM"><label>PM red</label></div>');
  var clockText = $('<div class="clockText"><label>CLOCKText</label></div>');
  var bottomAM = $('<div class="bottomAM"><label>Bottom AM White</label></div>');
  var bottomFM = $('<div class="bottomFM"><label>Bottom PM White</label></div>');
  var bottomAMfreq = $('<div class="bottomAMfreq"><label>Bottom AM Freq White</label></div>');
  var bottomFMfreq = $('<div class="bottomFMfreq"><label>Bottom PM Freq White</label></div>')

  
  var clock = function() {
  	outerShell.append(innerShell);
  	$('body').append(outerShell);


  		innerShell
  				.append(leftAM)
  				.append(leftPM)
  				.append(autoLabels)
  				.append(clockScreen);


  		outerShell
  				.append(clockAM)
  				.append(clockPM)
  				.append(clockText)
  				.append(bottomAM)
  				.append(bottomFM)
  				.append(bottomAMfreq)
  				.append(bottomFMfreq);


  	$('.container').append(outerShell);

 };
 clock();
});