persons = [
  {
    name: "prabha",
    age: 24,
  },
  {
    name: "sudha",
    age: 34,
  },
  {
    name: "veera",
    age: 45,
  },
  {
    name: "charan",
    age: 33,
  },
  {
    name: "kiran",
    age: 48,
  },
];

// first

// for (let index = 0; index < persons.length; index++) {
//   var template = "Name: " + persons[index].name + " age: " + persons[index].age;
//   var newDiv = window.document.createElement("div");
//   var text = window.document.createTextNode(template);
//   newDiv.appendChild(text);
//   document.body.appendChild(newDiv);
// }

// second

// function emptyResponse() {
//   document.getElementById("responses").innerHTML = "";
// }
// function filterPersons(name) {
//   emptyResponse();
//   var result = persons.filter(function (x) {
//     return x.name === name;
//   });
//   result.forEach(function (response) {
//     if (response) {
//       createParagraph(response.name);
//     }
//   });
// }

// function createParagraph(text) {
//   var newDiv = document.createElement("div");
//   var newText = document.createTextNode(text);
//   newDiv.appendChild(newText);
//   document.getElementById("responses").appendChild(newDiv);
//   // document.body.appendChild(newDiv);
// }

// var newInput = window.document.createElement("input");
// newInput.addEventListener("input", function (event) {
//   filterPersons(event.target.value);
// });

// document.body.appendChild(newInput);

// var newResponse = window.document.createElement("div");
// newResponse.setAttribute("id", "responses");
// document.body.appendChild(newResponse);

persons = [];

// nornal way

// var createPerson = function (name, age, city) {
//   return {
//     name,
//     age,
//     city,
//   };
// };

// advance

var createPerson = (name, age, city) => ({
  name,
  age,
  city,
  setName: function (name) {
    this.name = name;
  },
});

var newPerson = createPerson("prabha", 34, "hyd");
persons.push(newPerson);

console.log(persons);
console.log(createPerson("sudhakar", 28, "Atp"));
