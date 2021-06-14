var canvas = null; var ctx = null;
self.onmessage = function(e) {
    canvas = e.data.canvas;
    ctx = canvas.getContext("2d");
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
}
