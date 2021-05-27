
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
  ctx.strokeStyle = "#999";
  ctx.stroke();
}

const ctx = initialCanvas();

export const createArrows = (cords=[]) => {
  for(let i = 0; i< cords.length; i ++ ){
    createArrow(cords[i].start.x,cords[i].start.y , cords[i].end.x, cords[i].end.y, ctx );
  }
}
