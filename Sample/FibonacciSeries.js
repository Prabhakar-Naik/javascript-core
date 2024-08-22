
//  first way
var a=0,b=1,c;
var n =3;

for(var i=1;i<=n;i++){

        console.log(a+"  ");
        c=a+b;
        a=b;
        b=c;
}

// second way
var output = [];
a=0,b=1
if(n === 1){
    output = [a];
    console.log(output);
}else if(n === 2){
    output = [a,b];
    console.log(output);
}else{
    output = [a,b];
    for(var i =2; i<n; i++){
        output.push(output[output.length-2]+output[output.length-1]);
    }
}

console.log(output);

// functional way
function fibonacciGenerator (n) {
    var output = [];
    if(n === 1){
        output = [0];
    }else if(n === 2){
        output = [0,1];
    }else{
        output = [0,1];
        for(var i =2; i<n; i++){
            output.push(output[output.length-2]+output[output.length-1]);
        }
    }
    return output;
}

console.log(fibonacciGenerator(10));