/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let hoursmins=time.split(":")
  let ans=parseInt(hoursmins[0],10)*60+parseInt(hoursmins[1],10)
  if (ans < 12*60){
    return "Good Morning"
  } else if (12*60<=ans && ans<17*60){
    return "Good Afternoon"
  } else{
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  const greeting = document.getElementById('greeting')
  greeting.innerText = string
}
