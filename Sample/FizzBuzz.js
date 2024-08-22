
var list = [];
var count = 1;

function fizzBuzz(){

  if(count % 3 === 0 && count % 5 === 0){
    list.push("FizzBuzz");
  }else if(count % 3 === 0){
    list.push("Fizz");
  }else if(count % 5 === 0){
    list.push("Buzz");
  }else{
    list.push(count);
  }
  
  console.log(list);
  count++;
}

for (let index = 1; index <10; index++) {
    fizzBuzz();
}


