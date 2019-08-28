/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(datestr) {


  var hour = parseInt(datestr.split(':')[0]);
  // var min = datestr.slice(3,5);
  if (hour < 12) {
    return "Good Morning"
  }
  else if (hour > 12 && hour < 17){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }


}
/* Write your implementation of displayMessage() */

function displayMessage(greeting) {
  var greetingNode=document.querySelector('#greeting');
  greetingNode.innerText = greeting;
}
