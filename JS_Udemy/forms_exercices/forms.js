// selected

document.getElementById("clickMe").onclick = function () {
  let selectField = document.getElementById("options");
  let selectOption = selectField.options.selectedIndex;
  let selectedValue = selectField.options[selectOption].innerHTML;
  document.getElementById("result").innerHTML = selectedValue;
};
