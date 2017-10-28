// // Crystal Collector Game!
// // Variables

// var wins = 0;
// var loses = 0;
// var counter = 0;
// var scores = 0;
// var targetNum = [];
// var crystalValue = [];
// var randomNum;
// var crystalPink;
// var crystalYellow;
// var crystalBlue;
// var crystalGreen;
// var counter = 0;



// // Function for game reset


// targetNum = (Math.floor(Math.random() * 121) + 19);
// console.log(targetNum);

// function valueGenerator () {
// 	for (var i = 0; i < 5; i++) {
// 		randomNum = [Math.floor(Math.random() * 12) + 1];
// 		crystalValue.push(randomNum);
// 	}
// 		console.log(crystalValue);
// }

// function gameStarter () {



// 	valueGenerator();

// 	//Assign the 'crystalValue' to each image
// 	crystalPink = crystalValue [0];
// 	crystalGreen = crystalValue [1];
// 	crystalBlue = crystalValue [2];
// 	crystalYellow = crystalValue [3];

// 	score = 0;
// 	wins = 0;
// 	loses = 0;

// 	$("#counter").html(couter);
// 	$("#wins").html(wins);
// 	$("loses").html(loses);
// 	$("#userscore").html(scores);

// }
// console.log(gameStarter);

// function gameWins () {
// 	wins === 3;
// 	alert ("You win!");
// 	gameStarter();

// }


// if (targetNum === counter) {
// 	wins++;
// 	valueGenerator();


// }


$(document).ready(function(){
	var wins = 0;
	var loses = 0;
	var scores = 0; //120 - 19 = 101
	var targetNum = (Math.floor(Math.random() * 101) + 19);
	var crystals = [];

	$("#wins").html("<p>Wins:" + wins + "</p>");
	$("#loses").html("<p>Loses: " + loses + "</p>");
	$("#counter").html("<p>Target Scores: " + targetNum + "</p>");
	$("#userscore").html("<p>User Scores: " + scores + "</p>");

	var pink = (Math.floor(Math.random() * 11) + 1);
	var blue = (Math.floor(Math.random() * 11) + 1);
	var yellow = (Math.floor(Math.random() * 11) + 1);
	var green = (Math.floor(Math.random() * 11) + 1);

	crystals.push(pink);
	crystals.push(blue);
	crystals.push(yellow);
	crystals.push(green);


	function reset(){
		targetNum = (Math.floor(Math.random() * 101) + 19);
		scores = 0;
		$("#counter").html("<p>Target Scores: " + targetNum + "</p>");
		$("#userscore").html("<p>User Scores: " + scores + "</p>");

	}

	//alert (crystals);

	// [ 11 , 5 ,4 ,3 ]

	$("#crystal-1").on("click", function() {
		alert (crystals[0]);
		scores += crystals[0];//  scores = scores + crystals[0]
		$("#userscore").html("<p>User Scores: " + scores + "</p>");
		if(scores == targetNum){
			wins++;
			$("#wins").html("<p>Wins:" + wins + "</p>");
			reset()
		}
		else if(scores > targetNum){
			loses++;
			$("#loses").html("<p>Loses: " + loses + "</p>");
			reset()

		}
	})

	$("#crystal-2").on("click", function() {
		alert (crystals[1]);
		scores += crystals[1];
		$("#userscore").html("<p>User Scores: " + scores + "</p>");
		if(scores == targetNum){
			wins++;
			$("#wins").html("<p>Wins:" + wins + "</p>");
			reset()
}
		else if(scores > targetNum){
			loses++;
			$("#loses").html("<p>Loses: " + loses + "</p>");
			reset()
}
	})

	$("#crystal-3").on("click", function() {
		alert (crystals[2]);
		scores += crystals[2];
		$("#userscore").html("<p>User Scores: " + scores + "</p>");
		if(scores == targetNum){
			wins++;
			$("#wins").html("<p>Wins:" + wins + "</p>");
			reset()
}
		else if(scores > targetNum){
			loses++;
			$("#loses").html("<p>Loses: " + loses + "</p>");
			reset()
}
	})

	$("#crystal-4").on("click", function() {
		alert (crystals[3]);
		scores += crystals[3];
		$("#userscore").html("<p>User Scores: " + scores + "</p>");
		if(scores == targetNum){
			wins++;
			$("#wins").html("<p>Wins:" + wins + "</p>");
			reset()
}
		else if(scores > targetNum){
			loses++;
			$("#loses").html("<p>Loses: " + loses + "</p>");
			reset()
}
	})



});














