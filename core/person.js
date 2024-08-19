var persons = [
  {
    name: "prabha",
    age: 24,
    specifications: {
      size: "180cm",
      weight: 75,
    },
    address: "hyd",
  },
  {
    name: "sudha",
    age: 28,
    specifications: {
      size: "180cm",
      weight: 75,
    },
    address: "atp",
  },
  {
    name: "veera",
    age: 30,
    specifications: {
      size: "180cm",
      weight: 75,
    },
    address: "sr nagar",
  },
  {
    name: "kiran",
    age: 42,
    specifications: {
      size: "180cm",
      weight: 75,
    },
    address: "ameerpet",
  },
  {
    name: "charan",
    age: 34,
    specifications: {
      size: "180cm",
      weight: 75,
    },
    address: "ameerpet",
  },
];

// console.log(persons);
// for each loop goes forward
persons.forEach(function (object, index) {
  object.city = "Amaravati";
  console.log(index);
  console.log(object);
  console.log(object.name);
});

// you can also use loops for, while dowhile
// these all are defines the repeatation of your requirments

// to filter the recods base on your requirements
let prabha = persons.filter(function (x) {
  if (x.name === "prabha") {
    return x;
    console.log("prabhakar age is: ", x.age);
  }
});

console.log(prabha[0]);

// dynamically changes the values
persons.map(function (x) {
  x.age++;
});

console.log(persons);
