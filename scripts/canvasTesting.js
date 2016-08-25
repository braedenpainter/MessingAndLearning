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

function clearCanvas() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

