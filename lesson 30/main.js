var wakeuptime;
var dstime;
var sleeptime;
var noon=12;


function showCurrenttime(){
    var clock=document.getElementById('clock');
    var currenttime=new Date();

    var hours=currenttime.getHours();
    var minutes=currenttime.getMinutes();
    var seconds=currenttime.getSeconds();

    var meridan="AM";

    if(hours >=noon){
        meridan="PM";
    }

    var clocktime=hours + ":" + minutes + ":" + seconds + "" + meridan;
    clock.innerText=clocktime;
    changeimage();
   
};

var onesecond=1000;

setInterval(showCurrenttime,onesecond);

function changeimage(){
    var time=new Date().getHours;
    console.log(time);


    var image= "ds_clock.png";
    var imageHTMl=document.getElementById("timeimage");
    ;

    if(time == wakeuptime){
        image="morning.gif";
        console.log("morning");

    }

    else if(time == dstime){
        image="class.gif";

    }

    else if(time == sleeptime){
        image="night.gif";
    }

    imageHTMl.src=image;
    console.log(imageHTMl.src);

}

function updateclock(){
    var wakeuptimeselector=document.getElementById('wakeuptimeseletor');

    wakeuptime=wakeuptimeselector.value;

    var dstimeselector=document.getElementById('dstimeselector');

    dstime=dstimeselector.value;


    var sleeptimeselector=document.getElementById('sleeptimeselector');
    sleeptime=sleeptimeselector.value

}

var savebutton=document.getElementById("savebutton");

savebutton.addEventListener("click", updateclock);