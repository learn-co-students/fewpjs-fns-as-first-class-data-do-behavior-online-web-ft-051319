/* Given Code, don't edit */
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString){
  let timeSplit = timeString.split(":")
  let time = parseInt(timeSplit[0], 10)
  if(time < 12){
    return "Good Morning"
  } else if(time > 17){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(string){
  let greeting = document.getElementById('greeting')
  greeting.innerText = string
}
