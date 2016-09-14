var data = {
    canvas: null,
    ctx: null,
    dots: [{x: 100, y: 100}, {x: 200, y: 200}]
};

function prepCanvas () {
    var res = window.devicePixelRatio || 1,
        scale = 1 / res;
    data.canvas = document.getElementById('dots');
    data.ctx = data.canvas.getContext('2d');
    
    data.canvas.width = window.innerWidth * res;
    data.canvas.height = window.innerHeight * res;
    data.canvas.style.width = window.innerWidth + 'px';
    data.canvas.style.height = window.innerHeight + 'px';
    
    data.ctx.scale(res, res);
}

function drawDots () {
    var i = 0;
    for (; i < data.dots.length; i++) {
        var d = data.dots[i];
        data.ctx.beginPath();
        data.ctx.arc(d.x, d.y, 10, 0, 2*Math.PI);
        data.ctx.fillStyle = '#777';
        data.ctx.fill();
        data.ctx.closePath();
    }
}

prepCanvas();
drawDots();