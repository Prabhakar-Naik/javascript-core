var year = 2000;

if(year % 100 === 0 && year % 400 === 0 || year % 100 !== 0 && year % 4 === 0)
    console.log(year+"  leap year");
else
    console.log(year+"  Not leap year");

function isLeap(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap year "+year;
            }else{
                return "Not Leap Year";
            }
        }else{
            return "Not Leap Year";
        }
    }else{
        return "Not Leap Year";
    }
}

console.log(isLeap(2000))