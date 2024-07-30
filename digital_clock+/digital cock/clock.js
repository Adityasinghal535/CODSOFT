// scripts.js

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the time string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the time
    timeElement.textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the clock
updateTime();
