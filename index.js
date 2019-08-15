import { SSL_OP_CIPHER_SERVER_PREFERENCE } from "constants";

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let hour = 0;

  if (time.length == 4){
    hour = time[0];
  }else{
    hour = time.slice(0,2)
  }
  if (hour < 12){
    return "Good Morning";
  }else if (hour > 17){
    return "Good Evening";
  }else{
    return "Good Afternon"
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(statement){
  alert(statement);
}
