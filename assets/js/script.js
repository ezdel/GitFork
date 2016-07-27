
///////////////////////////// Jemma's JS Code below//////////////////////////////////

var ObiWan = {
	name: 'Obi-Wan Kenobi',
	HP: 150,
	counter: 8,
	attack: 6

}
var Yoda ={
	name: 'Yoda',
	HP: 200,
	counter: 9,
	attack: 6
}
var Vader ={
	name: 'Darth Vader',
	HP: 180,
	counter: 10,
	attack: 8
}
var Maul ={
	HP: 160,
	counter: 8,
	attack: 10
}

var isMainChosen = false;
var main, defender;
function chooseCharacter(clicked_id){

	if(isMainChosen === false){
		main = document.getElementById(clicked_id);
		$('#main_character_container').append(main);
		$('#instructions').html("Select your Opponent!");
		isMainChosen = true;
		return isMainChosen;
	}
	else{
		Defender = document.getElementById(clicked_id);
		$('#defender').append(Defender);
		$('#instructions').html("Click the attack button to defeat your opponent!");
	}
}

$(".character").click(chooseCharacter())

// some attack/counter function
// function attack(player){
// 	while(Defender.HP !== 0){
// 		Defender.HP -= Main.attack;
// 		Main.HP -= Defender.counter;
// 		Main.attack = Main.attack*2;
//		$('# the main character's score div).html(Main.HP);
//		$('# the defender's score div).html(Defender.HP);
// 	}
// some if code: if no defender selected: $('#instructions').html("No enemy here.");
// }


// if else statemest after results
// if (Defender.HP === 0){
// $('#instructions').html("Select another Opponent");
// }
// else{
// 	$('#instructions').html("GAME OVER");
// }

// function reset{
// 	isMainChosen = false;
//	Main = '';
//	Defender = '';
// }