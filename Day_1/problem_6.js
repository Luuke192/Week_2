var counter = 0;

while (counter < 20) {
    counter++
    if (counter <= 5) {
        console.log("Very Low Number: " + counter);
    } else if (counter == 6 || counter <= 10) {
        console.log("Low Number: " + counter);
    } else if (counter == 11 || counter <=15) {
        console.log("High Number: " + counter);
    } else {
        console.log("Very High Number: " + counter);
    } 
}