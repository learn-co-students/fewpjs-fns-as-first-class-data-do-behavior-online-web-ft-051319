/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

function displayMessage(message){
  document.getElementById("greeting").innerText = message;
}

/* Write your implementation of greet() */
function greet(str_time){
  let time = parseInt(str_time, 10);
  if (time < 12){
    return "Good Morning";
  }else if (time >= 12 && time < 17){
    return "Good Afternoon";
  }else{
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
