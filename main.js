var player1 = 0;
var player2 = 0;
var playerone = 'x'
var playertwo = 'o'

$('.tile').one('click', function (event) {		// <---------- Fire the event just once and then die!

	$(this).addClass('purple');

	if (player1 <= player2) {
		// $(this).addClass('red');
		$(this).html(playerone);
		$(this).addClass('fontSize');
		player1++;
		var $tile = $('.tile');
		console.log($tile);
		// $(this).html("X");
	} else {
		// $(this).addClass('blue');
		$(this).html(playertwo);
		$(this).addClass('fontSize');
		player2++;
		var $tile = $('.tile');
		// $(this).html("O");
	}
});