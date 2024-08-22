function calcBottles(amount, cost){
    var no_of_bottles = Math.floor(amount / cost);
    return no_of_bottles;
}

function calcChange(amount, cost){
    var change = amount % cost;
    return change;
}

function getMilk(money, cost) {
    
   console.log("leaveHouse");
   console.log("moveRight");
   console.log("moveUp");
   console.log("buy "+calcBottles(money, cost)+" bottles of milk.");
   console.log("moveLeft");
   console.log("moveDown");
   console.log("moveLeft");
   console.log("enterHouse");
//    console.log("put the remaining "+ change+" change on table.");
   console.log("change "+calcChange(money, cost));
 }


getMilk(85,40);