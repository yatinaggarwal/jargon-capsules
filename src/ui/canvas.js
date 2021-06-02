import u from "umbrellajs";
let canvasObj = null;

export const initialCanvas = () => {
  const myCanvas = `<canvas id="myCanvas" width="1000" height="1000">
                      Your browser does not support the HTML5 canvas tag.
                    </canvas>`;
  const canvasInstance = u("body").append(myCanvas);

  const c = document.getElementById('myCanvas');
  canvasObj = c;
  const context = c.getContext('2d');
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
  return context;
};


function createArrow(sx, sy, ex, ey, ctx) {
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.bezierCurveTo(ex, sy, sx - (sx - ex) / 2, ey, ex, ey);
  ctx.strokeStyle = '#999';
  ctx.stroke();
}

export const createArrows = (cords = [], ctx = {}) => {
  ctx.clearRect(0,0,ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  for (let cord of cords) {
    createArrow(cord.start.x, cord.start.y, cord.end.x, cord.end.y, ctx);
  }
};
