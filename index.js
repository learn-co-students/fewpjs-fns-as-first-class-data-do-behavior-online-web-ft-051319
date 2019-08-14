/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  let timeArray = timeString.split(":");
  let time = parseInt(timeArray[0], 10) ;
  if (time < 12) {
    return "Good Morning";
  } else if (time > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon"; 
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(string){
  let greeting = document.getElementById('greeting');
  greeting.innerText = string;
}
