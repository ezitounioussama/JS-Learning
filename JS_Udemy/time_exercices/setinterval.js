//test 1

var count = 0;
let timeInterval = window.setInterval(function () {
  console.log(count);
  count++;
  if (count >= 8) {
    clearInterval(timeInterval);
  }
}, 1000);
