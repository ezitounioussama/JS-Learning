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

let start = 2022;
let num = document.getElementById("anos_copa");

while (start <= 2055) {
  num.innerHTML += "<li>" + start + "</li>";
  start += 4;
}

// Third Solution

document.getElementById("calc").onclick = function () {
  let totalClass = 20;
  let gradeOne = parseFloat(document.getElementById("GradeOne").value);
  let gradeTwo = parseFloat(document.getElementById("GradeTwo").value);
  let absences = document.getElementById("absences").value;

  if (gradeOne == "" || gradeTwo == "" || absences == "") {
    alert("student fails");
  } else {
    let average = (gradeOne + gradeTwo) / 2;
    console.log(average);
    let presence = (totalClass - absences) / totalClass;
    let result;
    if (average < 6.5 && presence < 0.7) {
      result =
        "this student has failed because of insufficient grade or too many abscences";
    } else if (average < 6.5) {
      result = "this student has failed because of insufficient grade";
    } else if (presence < 0.7) {
      result = "this student has failed because of too many absences";
    } else {
      result = "this student has been approved";
    }
    let finalResult = document.getElementById("result");

    finalResult.innerHTML = result;
  }
};

// Forth Solution
var sales = [
  {
    student: "Jason Gomes",
    date: "10/06/2018",
    amount: 34.99,
    refundRequested: null,
  },

  {
    student: "Carlos Blue",
    date: "10/06/2018",
    amount: 29.99,
    refundRequested: null,
  },

  {
    student: "Martin Heyes",
    date: "11/06/2018",
    amount: 39.99,
    refundRequested: "13/06/2018",
  },

  {
    student: "Isabella Hopkins",
    date: "11/06/2018",
    amount: 29.99,
    refundRequested: null,
  },

  {
    student: "Andrew Walt",
    date: "12/06/2018",
    amount: 34.99,
    refundRequested: null,
  },
];

let course_sales = document.getElementById("course_sales");
let totalSale = 0;
for (let s = 0; s < sales.length; s++) {
  let sale = sales[s];

  if (!sale.refundRequested) {
    let line = "<tr>";
    line += "<td>" + sale.student + "</td>";
    line += "<td>" + sale.date + "</td>";
    line += "<td>" + sale.amount.toString() + "</td>";
    line += "</tr>";
    course_sales.innerHTML += line;

    totalSale += sale.amount;
  }
}
document.getElementById("total_sold").innerHTML += totalSale;
