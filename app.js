var hour = 00;
var min = 00;
var sec = 00;
var msec = 00;

var hcounter = document.getElementById("h");
var mcounter = document.getElementById("m");
var scounter = document.getElementById("s");
var mscounter = document.getElementById("ms");
var lapRcd = 0;
var interval;

document.getElementById("undis").disabled = true;
document.getElementById("undisl").disabled = true;

if (msec == 0){
    document.getElementById("undisr").disabled = true;
}

var notshow = document.getElementById('showlaps');
notshow.className = 'noshow';

function timer(){
    msec++
    document.getElementById("undisl").disabled = false;
    mscounter.innerHTML = msec;
    if(msec >= 100){
        sec++;
        scounter.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        mcounter.innerHTML = min;
        sec = 0;
    }
    else if(min >= 60){
        hour++;
        hcounter.innerHTML = hour; 
        min = 0;
    }
}


function start(){
    interval = setInterval(timer, 10)
    document.getElementById("dis").disabled = true;
    document.getElementById("undis").disabled = false;
    document.getElementById("undisr").disabled = false;
}

function pause(){
    clearInterval(interval);
    document.getElementById("dis").disabled = false;
    document.getElementById("undis").disabled = true;
}

function lap(){

    notshow.className = 'border-bottom pb-2';
    document.getElementById('showlaps').innerHTML = "Laps Splits";
    lapRcd++;
    for(var i=1; i <= lapRcd; i++){
        document.getElementById("laprecords").innerHTML += "<p>" + lapRcd + ") " + hour + ":" + min + ":" + sec + ":" + msec + "<hr>" + "</p>";
        break;
    }
}

function reset(){
    hour = "0"+"0";
    min = "0"+"0";
    sec = "0"+"0";
    msec = "0"+"0";

    hcounter.innerHTML = hour;
    mcounter.innerHTML = min;
    scounter.innerHTML = sec;
    mscounter.innerHTML = msec;
    pause();
    document.getElementById("undisr").disabled = true;
    document.getElementById("undisl").disabled = true;
    document.getElementById("laprecords").innerHTML = " ";
    notshow.className = 'noshow';
    lapRcd = 0;
}