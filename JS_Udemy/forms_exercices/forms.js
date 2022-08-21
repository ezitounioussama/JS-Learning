// selected

document.getElementById("clickMe").onclick = function () {
  let selectField = document.getElementById("options");
  let selectOption = selectField.options.selectedIndex;
  let selectedValue = selectField.options[selectOption].innerHTML;
  document.getElementById("result").innerHTML = selectedValue;
};

// radioButton

document.getElementById("showMe").onclick = () => {
  let nameRadio = document.getElementsByName("gender");

  let radioSel;

  for (let i = 0; i < nameRadio.length; i++) {
    if (nameRadio[i].checked) {
      radioSel = nameRadio[i];
      document.getElementById("radioResult").innerHTML = radioSel.value;
    }
  }
};

// CheckBox

document.getElementById("show").onclick = () => {
  let nameCheck = document.getElementsByName("interest");
  document.getElementById("checkResult").innerHTML = "";

  for (let i = 0; i < nameCheck.length; i++) {
    if (nameCheck[i].checked) {
      document.getElementById("checkResult").innerHTML +=
        "<li>" + nameCheck[i].value + "</li>";
    }
  }
};
