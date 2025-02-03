var a=10;
var b=20;
var c=a+b;
console.log(c);

var d=10;
var e=4;
var f=d%e;
console.log(f);

var g=99;
g++;
console.log(g);

var h=99;
h--;
console.log(h);

var i=20;
var j=2;
var k=i**j;
console.log(k);

var x = 15;
x+= 5;
console.log(x);

var l=100;
var m=10;
console.log(l != m)

var n=1234;
var o="1234";
console.log(n===o);

var var1=20;
console.log(var1 >= 18 && var1 <=50);

var2=4;
var3=6;
console.log(var2 == 4);

var4=9;
var5=10;
console.log(!(var4 == var5));

function showMessage(){
    alert("Klasa ma e mire");
}
showMessage();

function sum(numb1, numb2){
    return numb1 - numb1;
}

console.log(sum(22,2));

function computer(name,cpu,ram){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
}

var computer1=new computer("macBook", "Mi 8-core" ,"8gb")
var computer2=new computer("Lenovo", "Mi 8-core" ,"8gb")
var computer3=new computer("Deli", "Mi 8-core" ,"8gb")

console.log(computer1);
console.log(computer2);
console.log(computer3);