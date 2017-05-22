console.log(peopleArray);

$(onReady);

var arrayIndex = 0;
var count = arrayIndex;
var total = peopleArray.length;

function updateText() {
  $('.personData').text(peopleArray[arrayIndex].name + ": " + peopleArray[arrayIndex].weirdThing);
  $('#counter').text((arrayIndex + 1) + ' of ' + total);
}

//Previous button
var buttonPrevious = function() {
  console.log('previous button clicked');
  arrayIndex--;
  console.log(arrayIndex);
  if (arrayIndex < 0) {
    arrayIndex = peopleArray.length -1;
  }
  updateText();
};

function onReady() {
  $('.personData').text(peopleArray[0].name + ": " + peopleArray[0].weirdThing);
  $('#counter').text((count + 1) + ' of ' + total);
  //making the buttons work upon clicking them
  $('.next').on('click', buttonNext);
  $('.previous').on('click', buttonPrevious);


  function buttonNext() {
    console.log('next button clicked');
    // check if arrayIndex is about to be greater than peopleArray.length
    // out of bounds = peopleArray.length
    // if so, reset to beginning of list
    arrayIndex++;
    if (arrayIndex <= peopleArray.length -1) {
      //nothing needs to be done
    }  else {
      arrayIndex = 0;
    }
    console.log(arrayIndex);
    updateText();
  }
}
