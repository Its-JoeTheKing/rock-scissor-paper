var arr = ["r", "p", "s"];
var score = 0;
var comScore = 0;
var choices = ["<div class='rock'><img style='z-index: 1;' src='images/icon-rock.svg'></div>", "<div class='paper'><img style='z-index: 1;' src='images/icon-paper.svg'></div>","<div class='sciss'><img style='z-index: 1;' src='images/icon-scissors.svg'></div>"];
const getWinner = (p1, p2) => {
	if (p1 === p2)
		return (0);
	if ((p1 === arr[0] && p2 === arr[1]) || (p1 === arr[1] && p2 === arr[2]) || (p1 === arr[2] && p2 === arr[0])) {
		return 2;
	} else {
		return 1;
	}
}
const play = (action) => {
	var t1 = 0;
	var t2 = 0;
	var msg;
	var	act1 = action;
	var act2 = arr[Math.floor(Math.random() * 3)];
	for (let i = 0; i < arr.length; i++) {
		if (act1 === arr[i])
			t1 = i;
		if (act2 === arr[i])
			t2 = i;
	}
	var winner = getWinner(act1, act2);
	document.getElementById("cont").style.display = "none"
	document.getElementById("red").style.display = "grid"
	document.getElementById("p1").innerHTML = choices[t1]
	document.getElementById("p2").innerHTML = choices[t2]
	if (winner===1)
	{
		msg = "YOU WON";
		score++;
		document.getElementById("score").innerText = score;
		document.getElementById("p1").children[0].className += " winner"; 
	}
	else if (winner===2)
	{
		msg = "YOU LOST";
		comScore++;
		document.getElementById("com-score").innerText = comScore;
		document.getElementById("p2").children[0].className += " winner"; 
	}
	else
		msg = "TIE";
	document.getElementById("board").innerText = msg;
}

const replay = () => {
	document.getElementById("cont").style.display = "flex"
	document.getElementById("red").style.display = "none"
}

const openModal = () => {
	document.getElementById("over-mob").style.display = "flex";
}
const closeModal = () => {
	document.getElementById("over-mob").style.display = "none";
}