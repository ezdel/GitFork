var obiWan = {
	name: 'Obi-Wan Kenobi',
	hp: 150,
	counter: 8,
	attack: 6,
	// img: assets/images/obiwan.jpg
}
var yoda ={
	name: 'Yoda',
	hp: 200,
	counter: 9,
	attack: 6,
	// img_url: assets/images
}
var vader ={
	name: 'Darth Vader',
	hp: 180,
	counter: 10,
	attack: 8,
	// img_url: assets/images
}
var maul ={
	name: 'Darth Maul',
	hp: 160,
	counter: 8,
	attack: 10,
	// img_url: assets/images
}


var character1 = document.getElementById('obiButton');
$(character1).append(obiWan.name +  '<br><img src="assets/images/obiwan.jpg" height="150px" width="150px"> <br>' + obiWan.hp);

var character2 = document.getElementById('yodaButton');
$(character2).append(yoda.name +  '<br><img src="assets/images/yoda.jpg" height="150px" width="150px"> <br>' + yoda.hp);

var character3 = document.getElementById('vaderButton');
$(character3).append(vader.name +  '<br><img src="assets/images/vader.jpg" height="150px" width="150px"> <br>' + vader.hp);

var character4 = document.getElementById('maulButton');
$(character4).append(maul.name +  '<br><img src="assets/images/maul.jpg" height="150px" width="150px"> <br>' + maul.hp);

//var main, defender, mainID, defenderID;
//var isMainChosen = false;

function chooseCharacter(){
	$('#mainCharacterContainer').on("click",function(){

		if($('#mainCharacterContainer').length === 0){
			$('#mainCharacterContainer').append(this);
			$('#instructions').html("Select your Opponent!");
			mainID = this.id;
		}
		else{
			$('#defenderCharacterContainer').append(defender);
			$('#instructions').html("Click the attack button to defeat your opponent!");
			defenderID = this.id;
		}
	});
}

// if(isMainChosen === false){
// 	if(clicked_id === 'obiButton'){
// 		character1 = clicked_id;
// 		$('#mainCharacterContainer').append(character1);
// 		$('#instructions').html("Select your Opponent!");
// 		isMainChosen = true;
// 		return isMainChosen;

// 	}
// 	else if(clicked_id === 'yodaButton'){
// 		character2 = clicked_id;
// 		$('#mainCharacterContainer').append(character2);
// 		$('#instructions').html("Select your Opponent!");
// 		isMainChosen = true;
// 		return isMainChosen;
// 	}

// 	else if(clicked_id === 'vaderButton'){
// 		character3 = clicked_id;
// 		$('#mainCharacterContainer').append(character3);
// 		$('#instructions').html("Select your Opponent!");
// 		isMainChosen = true;
// 		return isMainChosen;
// 	}
// 	else(clicked_id === 'maulButton'){
// 		character3 = clicked_id;
// 		$('#mainCharacterContainer').append(character4);
// 		$('#instructions').html("Select your Opponent!");
// 		isMainChosen = true;
// 		return isMainChosen;
// 	}
// }
// 	else{
// 		if(clicked_id === 'obiButton'){
// 			character1 = clicked_id;
// 			$('#defenderCharacterContainer').append(character1);
// 			$('#instructions').html("Click the attack button to defeat your opponent!");
			

// 		}
// 		else if(clicked_id === 'yodaButton'){
// 			character2 = clicked_id;
// 			$('#defenderCharacterContainer').append(character1);
// 			$('#instructions').html("Click the attack button to defeat your opponent!");
// 		}
// 		else if(clicked_id === 'vaderButton'){
// 			character3 = clicked_id;
// 			$('#defenderCharacterContainer').append(character1);
// 			$('#instructions').html("Click the attack button to defeat your opponent!");
			
// 		}
// 		else(clicked_id === 'maulButton'){
// 			character3 = clicked_id;
// 			$('#defenderCharacterContainer').append(character1);
// 			$('#instructions').html("Click the attack button to defeat your opponent!");
			
// 		}	
// 	}
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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
