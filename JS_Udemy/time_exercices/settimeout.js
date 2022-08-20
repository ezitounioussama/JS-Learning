// test 1

// console.log("Message 1");

// window.setTimeout(() => {
//   console.log("Message 2");
// }, 3000);

// Exercice One (Loader Time)

document.getElementById("show-loader").onclick = () => {
  document.getElementById("spinner-loader").style.display = "block";

  setTimeout(() => {
    document.getElementById("spinner-loader").style.display = "none";
  }, 4000);
};
