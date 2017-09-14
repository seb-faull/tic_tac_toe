var player1 = 0;
var player2 = 0;
var playerone = 'X';
var playertwo = 'O';
var turn1 = 'Player 1 turn';
var turn2 = 'Player 2 turn';
var winner = '';
var win = false;
var playedComboX = [];
var playedComboO = [];
var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

$('.tile').one('click', function (event) {		// <---------- Fire the event just once and then die!

	$(this).addClass('purple');

	if (player1 <= player2) {
		$(this).html(playerone);
		$(this).addClass('fontSize');
		$('.player-turn h1').html(turn2);
		player1++;
		var $tile = $('.tile');
		var d = $(this).attr('id');
		playedComboX.push(parseInt(d));
		checkWins();

	} else {
		$(this).html(playertwo);
		$(this).addClass('fontSize');
		$('.player-turn h1').html(turn1);
		player2++;
		var $tile = $('.tile');
		var c = $(this).attr('id');
		playedComboO.push(parseInt(c));
		checkWins();
	}
});

function checkWins() {
	for (var i = 0; i < winningCombos.length; i++) {

		if ($(playedComboX).not(winningCombos[i]).length === 0 && $(winningCombos[i]).not(playedComboX).length === 0) {
			win = true;
			winner = 'Player 1';
			setWinner (winner);
			console.log('player 1 wins');
		// if((winningCombos[i][0] == playedComboX[0]) && (winningCombos[i][1] == playedComboX[1]) && (winningCombos[i][2] == playedComboX[2])) {
  //           alert("Congrats, you have won!");
  //           return true;
  //       }
  //       return false;
    } else if ($(playedComboO).not(winningCombos[i]).length === 0 && $(winningCombos[i]).not(playedComboO).length === 0) {
			win = true;
			winner = 'Player 2';
			setWinner (winner);
			console.log('player 2 wins');
    }
}

}

function setWinner (win) {
	$('#header').html(win + ' Wins the Game!');
}




