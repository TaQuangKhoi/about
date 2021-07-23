// function to draw a square
function drawSquare(x, y, size) {
    var square = document.getElementById("drawbyMain.JS");
    square.setAttribute("x", x);
    square.setAttribute("y", y);
    square.setAttribute("width", size);
    square.setAttribute("height", size);
    square.setAttribute("fill", "red");
}