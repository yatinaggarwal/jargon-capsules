function initialCanvas() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  return ctx;
}

function createArrow(sx, sy, ex, ey, ctx) {
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.bezierCurveTo(ex, sy, sx - ((sx - ex) / 2), ey, ex, ey);

  ctx.stroke();
}

const ctx = initialCanvas();
createArrow(500, 400, 300, 200, ctx);
createArrow(500, 400, 300, 300, ctx);
createArrow(500, 400, 300, 400, ctx);
createArrow(500, 400, 300, 500, ctx);
createArrow(500, 400, 300, 600, ctx);
createArrow(500, 400, 300, 700, ctx);

createArrow(900, 400, 1200, 200, ctx);
createArrow(900, 400, 1200, 300, ctx);
createArrow(900, 400, 1200, 400, ctx);
createArrow(900, 400, 1200, 500, ctx);
createArrow(900, 400, 1200, 600, ctx);
createArrow(900, 400, 1200, 700, ctx);
