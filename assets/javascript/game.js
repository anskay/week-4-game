

$(document).ready(function() {
		var win = 0; 
		var loss = 0; 

		var score = 0;
		var number = Math.ceil((Math.random() *101) + 19);
		var red =Math.ceil((Math.random() *11)+1);
		var blue =Math.ceil((Math.random() *11)+1);
		var yellow =Math.ceil((Math.random()*11)+1);
		var purple =Math.ceil((Math.random()*11)+1);
			console.log(number);
			console.log(red);
			console.log(blue);
			console.log(yellow);
			console.log(purple);

		function assign(){
		$("#number").html(number);


		$("#red").click(function() {
			refresh(red);
		});
		$("#blue").click(function() {
			refresh(blue);
		});
		$("#yellow").click(function() {
			refresh(yellow);
		});
		$("#purple").click(function() {
			refresh(purple);
		});
};


		function refresh(crystal) {
		 	score += crystal;
		 	$("#score").empty();
		 	$("#score").append(score);

		 	if (score > number) {
		 		loss++;
		 		$("#loss").html(loss);
		 		alert("You Lose");
		 		reset();
		 		assign();
		 	} else if (score === number) {
		 		win++;
		 		$("#win").html(win);
		 		alert("You Win");
		 		reset();
		 		assign();
		 	};
		 };


		function reset (){
		score = 0;
		$('#score').text(0);
		number = Math.ceil((Math.random() *101) + 19);
		red =Math.ceil((Math.random() *11)+1);
		blue =Math.ceil((Math.random() *11)+1);
		yellow =Math.ceil((Math.random()*11)+1);
		purple =Math.ceil((Math.random()*11)+1);
		 };

		 assign();

		 $('#reload').on('click', function(){
		 	location.reload();
		 });

});







