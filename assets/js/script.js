
///////////////////////////// Jemma's JS Code below//////////////////////////////////
var characters = {
	obiWan: {
		displayName: 'Obi-Wan Kenobi',
		js_name: 'obiWan',
		hp: 150,
		counter: function(enemy) {
			enemy.hp -= 5;
		},
		attack: function(enemy) {
			enemy.hp -= 6;
		},
		img_url: "assets/images/obiwan.jpg"
	},
	yoda: {
		displayName: 'Yoda',
		js_name: 'yoda',
		hp: 200,
		counter: function(enemy) {
			enemy.hp -= 4;
		},
		attack: function(enemy) {
			enemy.hp -= 6;
		},
		img_url: "assets/images/yoda.jpg"
	},
	vader: {
		displayname: 'Darth Vader',
		js_name: 'vader',
		hp: 180,
		counter: function(enemy) {
			enemy.hp -= 4;
		},
		attack: function(enemy) {
			enemy.hp -= 8;
		},
		img_url: "assets/images/vader.jpg"
	},
	maul: {
		displayname: 'Darth Maul',
		js_name: 'maul',
		hp: 160,
		counter: function(enemy) {
			enemy.hp -= 8;
		},
		attack: function(enemy) {
			enemy.hp -= 10;
		},
		img_url: "assets/images/maul.jpg"
	}
}

var defenderArray = [];

var isAttackerChosen = false;
var isDefenderChosen = false;

var $attacker, $defender, $attackerContainer, $defenderContainer;

function attackOpponent(attacker, defender) {

	defenderArray.push(defender);

	if (attacker.hp > 0 && defender.hp > 0) {

		attacker.attack(defender);
		$("#defender_container").html(displayCharacter(defender.js_name, defender.displayName, defender.img_url, defender.hp));

		defender.counter(attacker);
		$("#attacker_container").html(displayCharacter(attacker.js_name, attacker.displayName, attacker.img_url, attacker.hp));

		if (attacker.hp <= 0) {
			$("#attacker_container").html("Sorry, you were defeated :(");
		}

		if (defender.hp <= 0) {

			$("#defender_container").html("Congratulations, you've defeated your opponent!");

			isDefenderChosen = false;

			$(".main_character_initialize").on("click", function(){
				chooseCharacter($(this));
			});

		}
	}
}



function chooseCharacter(clickedElement){
	if (isAttackerChosen === false){
		$attacker = $(clickedElement);
		$attacker.removeClass("col-sm-3");
		$attackerContainer = $("<div id='attacker_container' class='col-sm-4'>");
		$attackerContainer.append($attacker);
		$("#fight_container").append($attackerContainer);
		// Prevent anyone from clicking on the element again
		$attacker.off( "click");


		var $instructions = $("<div id='instructions' class='col-sm-3'>");
		$instructions.html("Select your Opponent!");
		$("#fight_container").append($instructions);
		isAttackerChosen = true;

	} else {
		if (isDefenderChosen === false) {
			$defender = $(clickedElement);
			$defender.removeClass("col-sm-3");
			$defenderContainer = $("<div id='defender_container' class='col-sm-4'>");
			$defenderContainer.append($defender);
			$("#fight_container").append($defenderContainer);
			$defender.off( "click");

			$('#instructions').html("<h1>Click the attack button to defeat your opponent!</h1> <button id='attack_button'>ATTACK</button>");

			$("#attack_button").on("click", function(){
				var $defenderObj = characters[$defender.children().attr("id")];
				var $attackerObj = characters[$attacker.children().attr("id")];
				attackOpponent($attackerObj, $defenderObj);
			});

			isDefenderChosen = true;
		}
	}
}

function initializeGame() {

	// Creates divs in main character area based on number of properties/objects in characters objects
	for (var i = 1; i <= Object.keys(characters).length; i++) {
		var $columnContainer =  $("<div id=container_" + i + " class='col-sm-3 main_character_initialize'>");
		$("#game_container").append($columnContainer);
	}

	// refactor at some point. This seems ripe for a loop
	var first = displayCharacter(characters.obiWan.js_name, characters.obiWan.displayName, characters.obiWan.img_url, characters.obiWan.hp);
	var second = displayCharacter(characters.yoda.js_name, characters.yoda.displayName, characters.yoda.img_url, characters.yoda.hp);
	var third = displayCharacter(characters.vader.js_name, characters.vader.displayName, characters.vader.img_url, characters.vader.hp);
	var fourth = displayCharacter(characters.maul.js_name, characters.maul.displayName, characters.maul.img_url, characters.maul.hp);

	$("#container_1").append(first);
	$("#container_2").append(second);
	$("#container_3").append(third);
	$("#container_4").append(fourth);
}

function displayCharacter(theJsName, display_Name, img_url, hp) {
	var $charDiv = $("<div id=" + theJsName + " data-name=" + theJsName + ">");
	var $charHeader = $("<h1 id=header_" + theJsName + ">" + display_Name + "</h1>");
	var $charImage = $("<img id=img_" + theJsName + " class='img-responsive' src=" + img_url + ">");
	var $charHealth = $("<div id=" + theJsName + "_health class='health_display'>" + hp +"</div>");

	$charDiv.append($charHeader).append($charImage).append($charHealth);
    
    return $charDiv;
}

initializeGame();

// event listeners
$(".main_character_initialize").on("click", function(){
	chooseCharacter($(this));
});
