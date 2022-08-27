var shipments = {
  standard: {
    leadTime: 7,
    fee: 2,
  },
  express: {
    leadTime: 3,
    fee: 4.5,
  },
};

let order_Date = document.getElementById("order_date");
let delevery_Date = document.getElementById("delivery_date");
let deleveryFee = document.getElementById("delivery_fee");

document.getElementById("shipments").onchange = () => {
  let selectedOption = document.getElementById("shipments").value;
  let leadTime = shipments[selectedOption].leadTime;
  let fee = shipments[selectedOption].fee;

  let orderDate = new Date();
  let deleveryDate = new Date(orderDate.getTime() + 86400000 * leadTime);
  orderDate = orderDate.toISOString().slice(0, 10);
  deleveryDate = deleveryDate.toISOString().slice(0, 10);

  order_Date.innerHTML = orderDate;
  delevery_Date.innerHTML = deleveryDate;
  deleveryFee.innerHTML = fee;
};



