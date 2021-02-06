function updateCross()
{
	var val1 = $('#val1').val().replace(',', '.')*1;
	var val2 = $('#val2').val().replace(',', '.')*1;
	var val3 = $('#val3').val().replace(',', '.')*1;
	
	var val =  val3 * val2 / val1;
	val = number_format(val, $('#option_decimals').val(), '.', ' ');
	$('#value-display').text(val);
	
	$('#detail').text(val3+' x '+val2+' / '+val1+' = '+val);
	
	
	
	$('#value-display').toggle('highlight', '#cc0000').toggle('highlight');
}

function resetCross()
{
	$('#val1').val(1);
	$('#val2').val(1);
	$('#val3').val(1);
	
	updateCross();
}

function number_format (number, decimals, decPoint, thousandsSep) 
{ 
	  //  discuss at: http://locutus.io/php/number_format/
	  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
	  var n = !isFinite(+number) ? 0 : +number
	  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
	  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
	  var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
	  var s = ''

	  var toFixedFix = function (n, prec) {
	    var k = Math.pow(10, prec);
	    return '' + (Math.round(n * k) / k).toFixed(prec);
	  }

	  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
	  if (s[0].length > 3) {
	    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
	  }
	  if ((s[1] || '').length < prec) {
	    s[1] = s[1] || ''
	    s[1] += new Array(prec - s[1].length + 1).join('0')
	  }

	  return s.join(dec)
}
