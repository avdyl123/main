var i=0;

do{
    i=i+1;
    console.log(i);
}while(i < 5);

console.log("----------");

var j=0;
while(j<5);{
    j=j+1;
    console.log(j);
}

console.log("----------");

let n=0;
let x=0;
while(n<3){
    n++;
    x += n;
    console.log(n);
    console.log(x);
}

console.log("----------");

for(var i=0; i<5; i++){
     console.log("value of i is: " + i);
}

console.log("----------");


var person={firstNmae: "Anid", lastName: "Kabashi" , age: 15};

var text= '';
var z;

for(z in person){
    text += person [z];
}
console.log(text);

console.log("----------");

var names =['Festa,' , 'Ardit' ,'Erand'];

var y;

for(y of names){
    console.log(y);
}

console.log("----------");

var txt = "Javascript";
var l;
 for(l of txt){
    console.log(l);
 }

