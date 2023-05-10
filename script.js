function startTimer() {
    // Get the user input from the text input element
    let userInput = document.getElementById("timer-input").value;
    
    // Parse the input into hours, minutes, and seconds
    let timeArray = userInput.split(":");
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);
  
    // Convert the time to seconds
    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  
    // Get the current time in milliseconds
    let currentTime = new Date().getTime();
  
    // Calculate the time the timer should stop
    let stopTime = currentTime + (totalSeconds * 1000);
  
    // Update the timer display every second
    let timer = setInterval(function() {
      // Calculate the remaining time in seconds
      let remainingTime = Math.floor((stopTime - new Date().getTime()) / 1000);
  
      if (remainingTime < 0) {
        // Stop the timer when the time is up
        clearInterval(timer);
        document.getElementById("timer-display").innerHTML = "Time's up!";
      } else {
        // Format the remaining time as HH:MM:SS
        let formattedTime = formatTime(remainingTime);
        document.getElementById("timer-display").innerHTML = formattedTime;
      }
    }, 1000);
  }
  
  function formatTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = Math.floor(totalSeconds % 60);
  
    // Add leading zeros to the numbers if necessary
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
  
    return `${hours}:${minutes}:${seconds}`;
  }
  