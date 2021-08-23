console.log("yeah, i am running");

//draw a circle
function drawCircle(x, y, radius, color) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
}
var weather;
function setup() {
    createCanvas(400, 200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&appid=95636f793513e3a97203334decbd35c0',
            getData);
}

function getData(data){
    println(data);
}

function draw() {
    background(0);
    document.body.test(weather);
}
console.log("I am done");