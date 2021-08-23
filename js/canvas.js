window.addEventListener("load", () => {
    console.log("Loaded canvas.js");
    const canvas = document.querySelector("#canvas");

    // Chỉnh kích cỡ canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

//auto resize
window.addEventListener("resize", () => {
    const canvas = document.querySelector("#canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});