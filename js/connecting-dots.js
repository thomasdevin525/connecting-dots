var data = {
    canvas: null,
    ctx: null,
    dots: [{x: 100, y: 100}, {x: 200, y: 200}]
};

function circleCollision (c1, c2) {
    var a = c1.r + c2.r,
        x = c1.x - c2.x,
        y = c1.y - c2.y;

    if ( a > Math.sqrt( (x*x) + (y*y) ) ) return true;
    else return false;
}

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
    
    data.canvas.addEventListener('mousedown', function (e) {
        checkForDot(e);
    });
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

function checkForDot (e) {
    var i = 0;
    for (; i < data.dots.length; i++) {
        var d = data.dots[i],
            c1 = {x: d.x, y: d.y, r: 10},
            c2 = {x: e.pageX, y: e.pageY, r: 10};
        if (circleCollision(c1, c2)) alert('They are colliding!');
    }
}

prepCanvas();
drawDots();












