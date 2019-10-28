/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const timeSplit = timeString.split(":")
  const hours = timeSplit[0]

  if (hours < 12)
    return "Good Morning";
  else if (hours >= 12 && hours <= 17)
    return "Good Afternoon";
  else if (hours >= 17 && hours <= 24)
    return "Good Evening";

}

function displayMessage(greet) {
  const greeting = document.getElementById('greeting')
  greeting.innerText = greet
}