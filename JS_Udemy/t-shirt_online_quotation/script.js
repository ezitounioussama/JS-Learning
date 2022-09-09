var products = {
  White: {
    Plain: {
      unit_price: 5.12,
      photo: "v-white.jpg",
    },
    Printed: {
      unit_price: 8.95,
      photo: "v-white-personalized.jpg",
    },
  },

  Colored: {
    Plain: {
      unit_price: 6.04,
      photo: "v-color.jpg",
    },
    Printed: {
      unit_price: 9.47,
      photo: "v-color-personalized.png",
    },
  },
};

// Solution:

$(document).change(function () {
  let colorRadio = "";
  let styleRadio = "";
  let qualityRadio = "";
  let quantity = "";
  colorRadio = $("input[name='radio-color']:checked")
    .parent("label")
    .text()
    .replace(/\s/g, "");

  styleRadio = $("input[name='style']:checked")
    .parent("label")
    .text()
    .replace(/\s/g, "");

  qualityRadio = $("input[name='quality']:checked")
    .parent("label")
    .text()
    .replace(/\s/g, "");

  quantity = $("#quantity").val();

  let result_color = $("#result-color").html(colorRadio).text();
  let result_style = $("#result-style").html(styleRadio).text();
  let result_quality = $("#result-quality").html(qualityRadio).text();
  let result_quantity = $("#result-quantity").html(quantity).text();

  let price = $("#price").val();
  let final_image = products[result_color][result_style].photo;
  let new_price = products[result_color][result_style].unit_price;

  $("#product_image").attr("src", "img/" + final_image);

  if (result_quality === "Basic(150g/m2)") {
    $("#price").html(
      Math.floor((new_price *= 1.12) * result_quantity) + " US$"
    );
  } else if (result_quality === "High(190g/m2)") {
    $("#price").html(Math.floor(new_price * result_quantity) + " US$");
  }
});
