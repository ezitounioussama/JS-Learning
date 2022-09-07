// change css classes

$("#hide").click(function () {
  $(".tag").hide();
});

$("#unhide").click(function () {
  $(".tag").css("display", "flex");
});

// change paragraph or word or every html element content like (innerHTML) .html()

let par = $("#paragraph").html();

$("#paragraph").html("new paragraph");

// return the text without the html element .text()

let txt = $("#paragraph_two").text();

console.log(txt);

// return the attribute .attr()

let link = $("#link").attr("target");
$("#link").attr("href", "https://www.udemy.com"); //this to change the href attr

let link_two = $("#link").attr("href");
console.log(
  "the target is : " + link + " / " + "the link in this a tag is :" + link_two
);

// change the imaage

$("#change").click(function () {
  let img = $("#image").attr(
    "src",
    "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png"
  );
});

// empty or remove or hide an element  .empty() .remove() .hide()

// $("#test").empty();
// $("#test").remove();
// $("#test").hide();

//  values .val()

let myName = $("#name").val("kirito");

myName = $("#name").val();

console.log(myName);

// work with selectBox option:selected || .val()
$("#options").change(function () {
  let options = $("#options option:selected").text();
  console.log(options);
});

// work with radioButtons

$(":radio").change(function () {
  let radio = $("input[name='question']:checked").parent("label").text();

  console.log(radio);
});

// work with checkBox

// $("input[name='interest']").change(function () {
//   let checkedVal = $("input[name='interest']:checked");

//   let checkArray = [];
//   $.each(checkedVal, function (index, value) {
//     console.log($(value).parent("span").text().replace(/\s/g, ""));
//   });

//   // $.each(checkedVal, function (index, value) {
//   //   checkArray.push($(value).parent("span").text().replace(/\s/g, ""));
//   // });
//   // console.log(checkArray);
// });

// work with syles .addClass() .removeClass() .toggleClass()

$("#addC").click(function () {
  $("#exemple_p").addClass("has-text-center");
});
$("#removeC").click(function () {
  $("#exemple_p").removeClass("has-text-center");
});

$("#toggleC").click(function () {
  $("#exemple_p").toggleClass("has-text-center");
});
