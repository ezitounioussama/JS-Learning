// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});

//about section {BOX-TABS}

let aboutUs = {
  Mission:
    "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",

  Vision:
    "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",

  Values:
    "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>",
};

let space = `
`;

let selectedColor = "#1F2937";
let unselectedColor = "#eeeeee";

let tabs = document.getElementsByClassName("single-tab");
let tabBox = document.getElementById("box-text");
for (let a = 0; a < tabs.length; a++) {
  tabs[a].onclick = function () {
    var clickedValue = this.innerHTML.replace(/\s/g, "");

    tabBox.innerHTML = aboutUs[clickedValue];

    for (let b = 0; b < tabs.length; b++) {
      tabs[b].style["background-color"] = unselectedColor;
      tabs[b].style["color"] = unselectedColor;
    }
    this.style["background-color"] = selectedColor;
  };
}
