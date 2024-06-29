function speedDetector() {
    let speed = prompt("Enter car speed:");
    speed = parseInt(speed);
  
    if (speed < 70) {
      console.log("Ok");
    } else {
      let demeritPoints = Math.floor((speed - 70) / 5);
      if (demeritPoints > 12) {   // Check if points exceed limit
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  
  speedDetector();