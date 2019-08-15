/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const fkdate = "1/1/2019 ";
  const noonDate = new Date(fkdate + "12:00");
  const fivePmDate = new Date(fkdate + "17:00");
  const noonHours = noonDate.getHours();
  const fivePmHours = fivePmDate.getHours();

  const timeDate = new Date(fkdate + time);
  const timeHours = timeDate.getHours();
  const timeMins = timeDate.getMinutes();

  if (timeHours < noonHours) {
    return ("Good Morning");
  }
  else if (noonHours < timeHours && timeHours < fivePmHours) {
    return ("Good Afternoon");
  }
  else {
    return ("Good Evening");
  }
}

function displayMessage(greetingString) {
  let displayText = document.querySelector("h1#greeting");
  displayText.innerText = greetingString;
}