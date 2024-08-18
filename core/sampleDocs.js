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

var calculateVTA = function (price) {
  return (price / 100) * 20;
};

console.log("VTA is: /-" + calculateVTA(125));
