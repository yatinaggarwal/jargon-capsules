function initialCanvas() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  return ctx;
}

function createArrow(sx, sy, ex, ey, ctx) {
  ctx.beginPath();
  console.log(sx, sy, ex, ey);
  ctx.moveTo(sx, sy);
  ctx.bezierCurveTo(ex, sy, sx, ey, ex, ey);

  ctx.stroke();
}

const ctx = initialCanvas();
createArrow(500, 400, 300, 200, ctx);
createArrow(500, 400, 300, 300, ctx);
createArrow(500, 400, 300, 400, ctx);
createArrow(500, 400, 300, 500, ctx);
createArrow(500, 400, 300, 600, ctx);
createArrow(500, 400, 300, 700, ctx);
