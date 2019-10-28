/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  var timeSplit = timeString.split(":");
  var timeParse = parseInt(timeSplit[0], 10);
  if (timeParse < 12) {return "Good Morning";}
  else if (timeParse == 12 || timeParse <= 17) {return "Good Afternoon";}
  else if (timeParse > 17) {return "Good Evening"};
}

function displayMessage(string){
  let greeting = document.getElementById('greeting');
  greeting.innerText = string;
}