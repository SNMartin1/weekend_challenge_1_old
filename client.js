console.log(peopleArray);

$(onReady);

var arrayIndex = 0;
var count =arrayIndex +1;
var total =peopleArray.length;

function onReady() {
 $('.personData').text(peopleArray[0].name + ": " + peopleArray[0].weirdThing);
 $('#counter').text(count + ' of ' + total);
 //making the buttons work upon clicking them
 $('.next').on('click', buttonNext);
 $('.previous').on('click', buttonPrevious);


function buttonNext(){
 console.log('next button clicked');
 // check if arrayIndex is about to be greater than peopleArray.length
 // out of bounds = peopleArray.length
 // if so, reset to beginning of list
 //if (arrayIndex >= peopleArray.length + 1) {
 arrayIndex++;
 $('.personData').text(peopleArray[arrayIndex].name + ": " + peopleArray[arrayIndex].weirdThing);
 }

function buttonPrevious(){
console.log('previous button clicked');
arrayIndex--;
$('.personData').text(peopleArray[arrayIndex].name + ": " + peopleArray[arrayIndex].weirdThing);
}

//function incrementArray() {
 //$('.personData').text(arrayIndex + 1);
//}
}
