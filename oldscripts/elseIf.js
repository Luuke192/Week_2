// var passing = 50;

// var grade = Math.floor((Math.random() * (100 - 50 + 1) + 50));

// if (grade >= 90) {
//   console.log("Congratulations! You are passing with an A!");
// } else if(grade >= 80) {
//   console.log("Keep it up! You have a B!");
// } else if(grade >= 70) {
//   console.log("Try harder next time but good job staying at a C average.");
// } else if(grade >= 60) {
//   console.log("You still passed but you need to improve on a D.");
// } else if(grade <= 59) {
//   console.log("You need to work a lot harder on your grade. You have failed with an F.");
// } 

var timesWeBeatPatriotsLastSeason = 1;
var timesTheyBeatUs = 2;

if (timesWeBeatPatriotsLastSeason > timesTheyBeatUs) {
	console.log("We are just better at football.");
} else if (timesTheyBeatUs > timesWeBeatPatriotsLastSeason) {
	console.log("Yea, well Andrew Luck was hurt.");
} else if (timesWeBeatPatriotsLastSeason == timesTheyBeatUs) {
	console.log("They were really lucky.");
} else {
	console.log("Patriots just cheat.")
}