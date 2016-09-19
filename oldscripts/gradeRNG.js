var passing = 50;

var grade = Math.floor((Math.random() * (50 - 25 + 1) + 25));

if (grade >= passing) {
  console.log("Congratulations! You are passing with a " + grade + "%!");
} else {
  console.log("I'm sorry. You have failed the class with a " + grade + "%.");
}

