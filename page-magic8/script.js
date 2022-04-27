
/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/
function getRandomIntInclusive(min, max) {

  // I want to look into ways of type checking arguments for functions, but felt it wasn't needed for this project since this in a function internal to the program

  return Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + min;
}

/* Write a function that handles the magic 8-ball being clicked. Here are the steps:

   - Create an array containing at least 5 possible answers as strings.
   - Generate a random array index by calling 
       getRandomIntInclusive function.
   - Call 'makeAnswerAppear' using the random
       answer you selected.
   - (Level-up) Prevent your code from selecting the 
       same answer multiple times in a row 
       (loops could be required).
*/
function answerQuestion() {

  // define answer array
  let answerChoices = ['Yes', 'No','Maybe','I am not sure','Rephrase the question','Are you sure you want to know?'];

  // assign random int var
  let randomAnswer = getRandomIntInclusive(0,(answerChoices.length-1));

  // grab current text of 8 ball
  let currentText = document.getElementById("answer-text").textContent;
  console.log(currentText);

  // compare current text with text that is about to be assigned
  // if they are the same increment one forward in array
  if (answerChoices[randomAnswer] === document.getElementById("answer-text").textContent){
    //debug code                                                                           
    /*
    console.log(`current answer = ${currentText}
    selected answer is also = ${answerChoices[randomAnswer]} 
    shifting selected forward`);
    */

    randomAnswer++;

    // if the number of the randomAnswer is equal to the length of the array after being incremented, set to 0 so you do not call an unassigned val in array
    if (randomAnswer === answerChoices.length){
      randomAnswer = 0;
    }
  }

  //While loop implementation of the level up
  /*
  while (answerChoices[randomAnswer] === document.getElementById("answer-text").textContent) {
    console.log(`current answer = ${currentText}
    selected answer is also = ${answerChoices[randomAnswer]} 
    shifting selected forward`);
    randomAnswer = getRandomIntInclusive(0,(answerChoices.length-1));
  }                                                                                        */                                                           

  makeAnswerAppear(answerChoices[randomAnswer]);
}
