function check(){
	
	var born = document.quiz.born.value; 
	var bornwhere = document.quiz.bornwhere.value; 
	var uni = document.quiz.uni.value; 
	var type = document.quiz.type.value; 
	var title = document.quiz.title.value; 
	var wife = document.quiz.wife.value; 
	var die = document.quiz.die.value; 
	var correct = 0; 
	
	if (born =="1919")  { 
	correct++; 
	} 
	
	if (bornwhere =="Holland")  { 
	correct++; 
	} 
	
	if (uni =="Rotterdam")  { 
	correct++; 
	} 
	
	if (type =="Surrealism")  { 
	correct++; 
	} 
	
	if (title =="Goedsul")  { 
	correct++; 
	} 
	
	if (wife =="Ellen Lorien")  { 
	correct++; 
	} 
	
	if (die =="1998")  { 
	correct++; 
	} 
	
var messages = ["Yeet! Not bad.", "Pass", "Yargh, go read some Wikipedia."]; 
	
	var range; 
	
	if (correct < 1) { 
	range = 2; 
	} 
	
	if (correct > 2 && correct < 5) {
		score = 1; 
	} 
 
    if (correct > 6) { 
	score = 0; 
	} 
	
	document.getElementById("check").innerHTML = messages(range); 

//document.getElementById("after_submit").style.visibility = "visible"; 
document.getElementById("number_correct").innerHTML = "Your score is " + correct + "."; 
	
	console.log("Test")
}