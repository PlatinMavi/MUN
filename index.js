
//Coundown

var countDownDate = new Date("Jun 10, 2023 15:37:25").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days= Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Day").innerHTML = days
    document.getElementById("Hour").innerHTML = hours
    document.getElementById("Minute").innerHTML = minutes
    document.getElementById("Second").innerHTML = seconds

    if (days.toString().length === 1){
        document.getElementById("Day").innerHTML = "0"+days.toString()
    }
    if (hours.toString().length === 1){
        document.getElementById("Hour").innerHTML = "0"+hours.toString()
    }
    if (minutes.toString().length === 1){
        document.getElementById("Minute").innerHTML = "0"+minutes.toString()
    }
    if (seconds.toString().length === 1){
        document.getElementById("Second").innerHTML = "0"+seconds.toString()
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);