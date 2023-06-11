
//Coundown

var countDownDate = new Date("Jun 13, 2023 09:00:00").getTime();

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

}, 1000);

//darkmode

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});