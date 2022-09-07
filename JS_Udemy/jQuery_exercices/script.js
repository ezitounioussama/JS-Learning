// change css classes

$("#hide").click(function () {
  $(".tag").hide();
});

$("#unhide").click(function () {
  $(".tag").css("display", "flex");
});

// change paragraph or word or every html element content like (innerHTML)

let par = $("#paragraph").html();

$("#paragraph").html("new paragraph");

// return the text without the html element

let txt = $("paragraph_two").text();

console.log(txt);
