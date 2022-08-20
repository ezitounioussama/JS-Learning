function zero_to_clock(number) {
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
}

setInterval(() => {
  var dateObj = new Date();
  let hoursJs = dateObj.getHours();

  let minutesJs = dateObj.getMinutes();

  let secondsJs = dateObj.getSeconds();

  document.getElementById("hours").innerHTML = zero_to_clock(hoursJs);
  document.getElementById("minutes").innerHTML = zero_to_clock(minutesJs);
  document.getElementById("seconds").innerHTML = zero_to_clock(secondsJs);
}, 1000);
