array = ["prabha", 45, "name", "value", 34.65, true, 23];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

console.log("=============");
for (let index = 1; index < 50; index++) {
  console.log(index);
}

console.log("============");
var num = 1;
while (num <= 10) {
  console.log("repeating");
  num++;
}

console.log("============");
num = 1;
do {
  console.log("do while example");
  num++;
} while (num <= 5);

console.log("==============");
array.forEach((element) => {
  console.log(element);
});
