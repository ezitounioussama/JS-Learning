function celsiusToFahrenheit(celsius) {
  var fahrenheit = (9 * celsius) / 5 + 32;
  return fahrenheit;
}

document.getElementById("convert").onclick = function () {
  var temperatureCelsius = parseFloat(document.getElementById("cel").value);

  if (temperatureCelsius === "") {
    alert("The temperature informed is invalid");
  } else {
    document.getElementById("fer").textContent =
      celsiusToFahrenheit(temperatureCelsius);
  }
};

// Second Solution
let node = document.createElement("li");

let num = document.getElementById("anos_copa");

for (let i = 2022; i < 2055; i+4) {
  
  let textNode = document.createTextNode(i);
  num.appendChild(node);
}
