// var name = "Luke"

// function hello(name) {
//     console.log("Hello " + name);
// }
// hello("Jane");
// hello(name);

// function world() {
//     console.log("Hello world!");
// }
// world();



// function myFunction(a , b) {
//     return a + b;
// }

// console.log(myFunction(5,6));



// function isEven(num) {
//     //After this number is divided by two. Will be even
//     return num % 2 == 0;
// }
// var result = isEven(47);
//                 //If       Else
// console.log(result ? "Even" : "Odd");




// function smallerNum(num1, num2) {
//     return num1 < num2;
// }
// var answer = smallerNum(20,19);

// console.log(answer ? "Smaller" : "Larger");





function average(array) {
    //Holds sum of arrays!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var totalArray = 0;
    //Adds all values from array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for ( var i = 0; i < array.length; i++){
        totalArray = totalArray + array[i];
    }
    //Divide sum by amount of numbers in array!!!!!!!!!!!!!!!!!!!!!
    return totalArray / array.length
}
var arrayNumbers = [70,80,90,100,85];

var mean = average(arrayNumbers);

console.log(mean);










// var ken = "Kentucky"

// var reverse = "";

// for (var i = ken.length -1;i >= 0; i--){
//     reverse = reverse + ken[i];
// }
// console.log(reverse);








// var numbers = [8,6,7,5,3,0,9];
// console.log(numbers.sort());