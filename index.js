
//Coundown

var countDownDate = new Date("Jun 10, 2023 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days= Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Day").innerHTML = days.toString()+'<span class="font-extralight">D</span>'
    document.getElementById("Hour").innerHTML = hours.toString()+'<span class="font-extralight">H</span>'
    document.getElementById("Minute").innerHTML = minutes.toString()+'<span class="font-extralight">M</span>'
    document.getElementById("Second").innerHTML = seconds.toString()+'<span class="font-extralight">S</span>'

    if (days.toString().length === 1){
        document.getElementById("Day").innerHTML = "0"+days.toString()+'<span class="font-extralight">D</span>'
    }
    if (hours.toString().length === 1){
        document.getElementById("Hour").innerHTML = "0"+hours.toString()+'<span class="font-extralight">H</span>'
    }
    if (minutes.toString().length === 1){
        document.getElementById("Minute").innerHTML = "0"+minutes.toString()+'<span class="font-extralight">M</span>'
    }
    if (seconds.toString().length === 1){
        document.getElementById("Second").innerHTML = "0"+seconds.toString()+'<span class="font-extralight">S</span>'
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);