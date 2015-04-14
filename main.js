$(document).on('ready', function() {
  var outerShell = $('<div class="outer-shell"></div>');
  var innerShell = $('<div class="inner-shell"></div>');
  var leftLabels = $('<div class="left-labels">AM<br/>PM</div>');
  var clockScreen = $('<div class="clock-screen"></div>');
  var indicator = $('<div class="indicator">.</div>');
  var clockText = $('<div class="clock-text">12: 17</div>');
  var frequenciesFM = $('<div class="fm-frequencies"><ul><li>FM</li><li>90.3</li><li>91.5</li><li>95.5</li><li>99.7</li><li>103.1</li><li>105.3</li><li>107.9</li><ul></div>');
  var frequenciesAM = $('<div class="am-frequencies"><ul><li>AM</li><li>600</li><li>850</li><li>1200</li><li>1470</li><li>1500</li><li>1600</li><li>1640</li><ul></div>');

  clockScreen.append(clockText).append(indicator);
  innerShell.append(leftLabels).append(clockScreen).append(frequenciesFM).append(frequenciesAM);
  outerShell.append(innerShell);
  $('.container').append(outerShell);


});