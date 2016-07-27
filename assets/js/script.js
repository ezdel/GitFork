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

// function for selecting characters
var isMainChosen = false;
var main, defender, mainID, defenderID;
$('.charButton').on('click', function () {
   if (isMainChosen === false) {
   		$('#mainCharacterContainer').append(this);
   		$('#instructions').html("Select your Opponent!");
   		isMainChosen = true;
   		return isMainChosen;
   		mainID = this.id;
} 	
	else {
		$('#defenderCharacterContainer').append(this);
		$('#instructions').html("Click the attack button to defeat your opponent!");
		defenderID = this.id;
	}

	main = linkCharacter(mainID);
	defender = linkCharacter(defenderID);
});

function linkCharacter(id) {

    var objChar;

    switch (id) {
        case "character1":
            objChar = character1;
            break;
        case "character2":
            objChar = character2;
            break;
        case "character3":
            objChar = character3;
            break;
        case "character4":
            objChar = character4;
            break;
    }

    return objChar;
}

// function for when attach button is clicked
$('.btn btn-danger btn-sm').on('click', function(){
	while(defender.hp !== 0){
		defender.hp -= main.attack;
		main.hp -= defender.counter;
		main.attack = main.attack*2;
	}
	console.log(main.attack);

});



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
