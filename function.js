var someFunction = function (a,b) { 

	var t = (a*b);

	if (t > 100) {
		alert ("buy buy buy ")
	} else {
		alert ( " sell sell sell ")
	}

	console.log(t)
};

var playBox = function(a,b) {
	alert('woo, box!');
}

$("#doSomething").click(function() {

  var ay = parseInt($('#base').val()); 
  var bee = parseInt($('#amount').val());

  //       find the radio
  //               with a name gametype
  //                             that is checked
  //                                      grab its value
  var gameType = $('radio[name=gametype]:checked').val();

  switch(gameType) {
  	case 'straight':
  		playStraight();
  		break;
  	case 'box':
  		playBox(ay, bee);
  		break;
  	case 'combo':
  		playCombo();
  		break;
  	default:
  		alert('Select a game type!');
  		break;
  }
});
