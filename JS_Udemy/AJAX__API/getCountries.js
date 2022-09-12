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
  });
}

get_countries();
