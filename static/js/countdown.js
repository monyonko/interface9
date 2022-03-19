

// Set the date we're counting down to
const eventDate = new Date("Oct 10, 2022 08:00:00").getTime();

// Update count each sec
let x = setInterval(function() {
    //Today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = eventDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("display").innerHTML = days + "d : " + hours + "h : "
  + minutes + "m : " + seconds + "s" ;  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

