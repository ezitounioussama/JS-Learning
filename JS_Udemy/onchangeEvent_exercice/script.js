// Onchange Select

document.getElementById("education_level").onchange = function () {
  let selectField = document.getElementById("education_level");
  let selectOption = selectField.options.selectedIndex;
  let selectedValue = selectField.options[selectOption].innerHTML;
  document.getElementById("result").innerHTML = selectedValue;
};

// Onchange CheckBox
let nameCheck = document.getElementsByName("meal");

for (let i = 0; i < nameCheck.length; i++) {
  nameCheck[i].onclick = () => {
    document.getElementById("checkResult").innerHTML = "";
    for (let j = 0; j < nameCheck.length; j++) {
      if (nameCheck[j].checked) {
        document.getElementById("checkResult").innerHTML +=
          nameCheck[j].value + "&nbsp" + "&nbsp";
      }
    }
  };
}
