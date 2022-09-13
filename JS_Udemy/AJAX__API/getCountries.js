// // API OF COUNTRIES

function get_countries() {
  $.ajax({
    url: "https://restcountries.com/v2/all",
    type: "GET",
    dataType: "json",
    success: function (data) {
      populate_countries(data);
      if (localStorage.selectedCountry) {
        $("#countries").val(localStorage.selectedCountry);
        var countryName = $("#countries option:selected").text();
        get_holidays(localStorage.selectedCountry, countryName);
      }
    },
    error: function () {
      console.log("Error in the request");
    },
  });
}

// function to push countries from the json file to the select element in html

function populate_countries(countries) {
  for (var a = 0; a < countries.length; a++) {
    var countryOption =
      "<option value='" +
      countries[a].alpha3Code +
      "'>" +
      countries[a].name +
      "</option>";
    document.getElementById("countries").innerHTML += countryOption;
  }
  // stock the value of the option selected in the local storage
  $("#countries").change(function () {
    localStorage.setItem("selectedCountry", $("#countries").val());
    var countryName = $("#countries option:selected").text();
    get_holidays($("#countries").val(), countryName);
  });
}

get_countries();

// holiday API https://holidayapi.com/v1/holidays?pretty&key=206ddac1-5a07-4310-b28d-03204536d606&country=MA&year=2021

function get_holidays(countryCode, countryName) {
  $("#countryName").text("");
  $("#year").text("");
  $("#holidayList").html("");
  let previousYear = new Date().getFullYear() - 1;
  $.ajax({
    url:
      "https://holidayapi.com/v1/holidays?pretty&key=" +
      "206ddac1-5a07-4310-b28d-03204536d606" +
      "&country=" +
      countryCode +
      "&year=" +
      previousYear,
    type: "GET",
    dataType: "json",
    success: function (data) {
      let holidays = data.holidays;
      $("#countryName").text(countryName);
      $("#year").text(previousYear);
      $("#holidayList").html("");
      for (var a = 0; a < holidays.length; a++) {
        if (holidays[a].public) {
          var listItem = "<li>";
          listItem += holidays[a].date + " - " + holidays[a].name;
          listItem += "</li>";

          $("#holidayList").append(listItem);
        }
      }
    },
    error: function () {
      console.log("Error in the request");
    },
  });
}
