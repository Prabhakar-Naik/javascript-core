var bellBoy = {
    name: "prabha",
    age: 25,
    experience: 3,
    job: ["luggage-service","room-service","food-service"],
    language: ["French","Telugu","English",]
}

console.log(bellBoy.name);
console.log(bellBoy.job);
console.log(bellBoy.job[0])
console.log(bellBoy.language);
console.log(bellBoy.language[2]);

//or

function BellBoy(name,age,experience,job,language){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.job = job;
    this.language = language;
}

var bellBoy1 = new BellBoy("suman",30,4,["room","lobby","food"],["Spain","English","Hindi"]);
var bellBoy2 = new BellBoy("kiran",24,2,["room","lobby","food"],["Telugu","English","Hindi"]);
var bellBoy3 = new BellBoy("veera",30,7,["room","lobby","food"],["Kannada","English","Hindi"]);
var bellBoy4 = new BellBoy("charan",32,8,["room","lobby","food"],["Tamil","English","Hindi"]);


console.log(bellBoy1);
console.log(bellBoy2);
console.log(bellBoy3);
console.log(bellBoy4);


