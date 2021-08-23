console.log("yeah, i am running");
var weather;
function setup() {
    createCanvas(400, 200);
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&appid=95636f793513e3a97203334decbd35c0',
            getData);
}

function getData(data){
    println(data);
}