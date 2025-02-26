var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti_id");


button.onclick=function(){
    text.innerHTML= input.value;
}

// var text= "The best school in the world id Digital School";
// var result = text.search("Digital School");
// document.getElementById("result1").innerHTML=result;


// var text= "The best school in the world id Digital School";
// var result = text.search(/Digital School/);
// document.getElementById("result2").innerHTML=result;


// var text= "The best school in the world id Digital School";
// var result = text.replace(/Digital School/, "Another School");
// document.getElementById("result3").innerHTML=result;


// var text="abcdef";
// var regex= new RegExp('abc');
// document.getElementById("result4").innerHTML=regex.test(text);


// var text = "My schhol is the best school in the world";
// var regex= /school/g;
// document.getElementById("result5").innerHTML=text.metch(regex);

// var text="Digital school is the best school in the world";
// var regex= /i/g;
// document.getElementById("result6").innerHTML=text.matches(regex);


// var text="Digital school is the best school in the world";
// var regex= /[abc]/g;
// document.getElementById("result7").innerHTML=text.matches(regex);


// var text="Digital school is the best school in the world";
// var regex= /[0-9]]/g;
// document.getElementById("result8").innerHTML=text.matches(regex);


// var text="My school is the best school in the world";
// var regex= /(top|best|school)/g;
// document.getElementById("result9").innerHTML=text.matches(regex);


// var text="100 percent";
// var regex=/d/g;
// document.getElementById("result10").innerHTML=text.matches(regex);


// var text="My school is the best school in the world";
// var regex=/s/g;
// document.getElementById("result11").innerHTML=text.matches(regex);


// var text="Heeey, how vare you"
// var regex=/e/g;
// document.getElementById("result12").innerHTML=text.matches(regex);

// var text="so , i hope we'll see each other again soon...";
// var redex=/so*/g;
// document.getElementById("result13").innerHTML=text.matches(regex);


// var text ="hey, hi, hiii";
// var redex=/h1?/g;
// document.getElementById("result14").innerHTML=text.matches(regex);

// var text="hello, helloo, hellooo";
// var regex=/0{3}/g;
// document.getElementById("result15").innerHTML=text.matches(regex);


// var text="hello, helloo, hellooo, helloooo, hellooooo";
// var regex=/0{3,5}/g;
// document.getElementById("result16").innerHTML=text.matches(regex);


// var text="bestfriend, boyfriend, girldfriend";
// var regex=/end$/g;
// document.getElementById("result17").innerHTML=text.matches(regex);

// var text="cat, catalog, category";
// var regex=/^end/g;
// document.getElementById("result18").innerHTML=text.matches(regex);