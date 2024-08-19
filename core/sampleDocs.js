var object = {
  name: "prabha",
  age: 24,
  specifications: {
    size: "180cm",
    weight: 75,
  },
  address: "hyd",
};

var myFunction = function () {
  console.log(object);
};

var calculateVTA = function (price, currency) {
  var VTA = 20;
  if (currency === "dollars") {
    return "$" + (price / 100) * VTA + " " + currency;
  } else if (currency === "euros") {
    return "E" + (price / 100) * VTA + " " + currency;
  } else {
    return "/-" + (price / 100) * VTA + " " + currency;
  }
};

console.log("VTA is: " + calculateVTA(125, "dollars"));
console.log("VTA is: " + calculateVTA(125, "rupees"));
