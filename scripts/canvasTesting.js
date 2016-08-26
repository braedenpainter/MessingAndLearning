function drawRect(x1, y1, x2, y2, color) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    if(color === 1) {
        ctx.fillStyle = "#FF0000";
    }
    else if(color === 2) {
        ctx.fillStyle = "#0000FF";
    }
    ctx.fillRect(x1, y1, x2, y2);
}

function drawElipse(x1, y1, diam) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContex("2d");
    
    ctx.beginPath();
    ctx.arc(x1, y1, diam, 0, 2 * Math.PI);
    ctx.strokeStyle("#FF0000");
}

