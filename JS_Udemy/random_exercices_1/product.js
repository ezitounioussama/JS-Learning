var PRODUCTS = {
  p1: {
    name: "product 1",
    price: "450",
    currency: "US$",
    imageUrl: "/random_exercices_1/product1.jpg",
  },
  p2: {
    name: "product 2",
    price: "869",
    currency: "EUR",
    imageUrl: "/random_exercices_1/product2.jpg",
  },
  p3: {
    name: "product 3",
    price: "519",
    currency: "US$",
    imageUrl: "/random_exercices_1/product3.jpg",
  },
};

let selectedVal = document.getElementsByName("product");

for (let i = 0; i < selectedVal.length; i++) {
  selectedVal[i].onchange = () => {
    for (let j = 0; j < selectedVal.length; j++) {
      if (selectedVal[j].checked) {
        let vals = selectedVal[j].value;
        document.getElementById("product_name").innerHTML = PRODUCTS[vals].name;
        document.getElementById("product_price").innerHTML =
          PRODUCTS[vals].currency + " " + PRODUCTS[vals].price;
        document.getElementById("product_image").src = PRODUCTS[vals].imageUrl;
      }
    }
  };
}
