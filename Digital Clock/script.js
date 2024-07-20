function days(day){
    if (day==7){
        document.getElementById("d").innerHTML="SUN"
    }
    else if (day==1){
        document.getElementById("d").innerHTML="MON"
    }
    else if (day==2){
        document.getElementById("d").innerHTML="TUS"
    }
    else if (day==3){
        document.getElementById("d").innerHTML="WED"
    }
    else if (day==4){
        document.getElementById("d").innerHTML="THU"
    }
    else if (day==5){
        document.getElementById("d").innerHTML="FRI"
    }
    else if (day==6){
        document.getElementById("d").innerHTML="SAT"
    }
}

function maridian(time){
    if (time>=0 && time<12){
        document.getElementById("me").innerHTML="AM"
    }
    else{
        document.getElementById("me").innerHTML="PM"
    }
}

setInterval(() => {
let date=new Date()
let houre=date.getHours()
let minute=date.getMinutes()
let second=date.getSeconds()
let day=date.getDay()

days(day)
maridian(h)

if(houre<=9){
    document.getElementById("h").innerHTML="0"+houre
}

else if(houre>12){
    document.getElementById("h").innerHTML=houre%12
}

else{
document.getElementById("h").innerHTML=houre
}

if(minute<=9){
document.getElementById("m").innerHTML="0"+minute
}
else{
    document.getElementById("m").innerHTML=minute
}

if(second<=9){
    document.getElementById("s").innerHTML="0"+second
}
else{
document.getElementById("s").innerHTML=second
}

}, 1000);