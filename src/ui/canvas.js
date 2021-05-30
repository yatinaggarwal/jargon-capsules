function initialCanvas() {
  const c = document.getElementById('myCanvas');
  const context = c.getContext('2d');

  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
  return context;
}

function createArrow(sx, sy, ex, ey, ctx) {
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.bezierCurveTo(ex, sy, sx - (sx - ex) / 2, ey, ex, ey);
  ctx.strokeStyle = '#999';
  ctx.stroke();
}

const ctxt = initialCanvas();

export const createArrows = (cords = []) => {
  for (let cord of cords) {
    createArrow(cord.start.x, cord.start.y, cord.end.x, cord.end.y, ctxt);
  }
};
