// EVENT KEYUP

$("input[name='fullName']").keyup(function () {
  $("input[name='fullName']").val() == ""
    ? $("#submit").hide()
    : $("#submit").show();
});

// Effect to hide/show something

$("#hide").click(function () {
  $(this).hide(900, () => {
    $("#text-hidden").show();
  });
});

$("#close").click(function () {
  $("#alert_sec").hide(1000, () => {
    $("#alert_sec").show();
  });
});

// there are many effects here just place .sildeToggle() with what you want from this
// toggle()
// fadeToggle()
// fadeTo(duration , opacity) === $(selector).fadeTo(duration, opacity);

// there's more effect you know GOOGLE

$("#toggle").click(function () {
  $("#menu").slideToggle(1000);
});

// Animation Square
// just imagine you can add every style you one to animate except COLORS
// NOTE : IF A STYLE WITH "-" NOT WORKING JUST CREATE IT WITH CAMELCASE
// THIS SHIT IS SOOOO FUCKING GOOD

$("#square").click(function () {
  $(this).animate({ height: "+=100px" }, 600);

  $(this).animate({ width: "+=100px" }, 200);
  $(this).animate({ borderRadius: "20px" });
});
