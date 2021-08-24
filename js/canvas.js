window.addEventListener("load", () => {
    console.log("Loaded canvas.js");
    var canvas = document.querySelector("#canvas");

    // Chỉnh kích cỡ canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    //auto resize
    window.addEventListener("resize", () => {
        const canvas = document.querySelector("#canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    //function draw
    let paiting = false;
    //define ctx
    var ctx = canvas.getContext("2d");
    
    //clear canvas
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    /*const clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }*/

    function startPainting(e) {
        paiting = true;
        draw(e);
    }
    
    function stopPainting() {
        paiting = false;
        ctx.beginPath();
    }

    
    
    function draw(e) {
        if (!paiting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "blue";
        
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    
    //EventListeners
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);
});

//clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}