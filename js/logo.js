let mainCanvas;
let ctx;
function drawA(left, top, size) {
  const lineWidth = size/10;
  const fillStryle = "rgb(233,233,89)";
  const strokeStryle = "rgba(0,0,0, 0.5)";
  ctx.beginPath();
  ctx.arc(left + size*2/3, top + size*1/3, size*1/3, 0, 2*Math.PI, true);
  ctx.fillStyle = fillStryle;
  ctx.fill();
  ctx.beginPath();
  ctx.rect(left, top, size*2/3, size*1/3);
  ctx.fillStyle = fillStryle;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(left + size*1/3, top + size*2/3, size*1/3, 0, 2*Math.PI, true);
  ctx.fillStyle = fillStryle;
  ctx.fill();
  ctx.beginPath();
  ctx.rect(left + size*1/3, top + size*1/3, size*2/3, size*1/3);
  ctx.fillStyle = fillStryle;
  ctx.fill();
  ctx.beginPath();
  ctx.rect(left, top + size*2/3, size, size*1/3);
  ctx.fillStyle = fillStryle;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(left + size*1/3, top + size*2/3);
  ctx.lineTo(left + size*2/3, top + size*2/3);
  ctx.strokeStyle = strokeStryle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();

}
function drawN(left, top, size) {
  const lineWidth = size/10;
  const fillStryle = "rgb(89,89,233)";
  const strokeStryle = "rgba(255,255,255, 0.5)";
  ctx.beginPath();
  ctx.arc(left + size*1/2, top + size*1/2, size*1/2, 0, 2*Math.PI, true);
  ctx.fillStyle = fillStryle;
  ctx.fill();

  ctx.beginPath();
  ctx.rect(left, top, size*1/2, size);
  ctx.fillStyle = fillStryle;
  ctx.fill();

  ctx.beginPath();
  ctx.rect(left, top + size*1/2, size, size*1/2);
  ctx.fillStyle = fillStryle;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(left + size*1/2, top + size*1/2);
  ctx.lineTo(left + size*1/2, top + size);
  ctx.strokeStyle = strokeStryle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();

}

function drawLogo(left, top, mul, len) {
  let sizeArr = [mul, mul];
  for (let i = 2; i <= len+1; i++) {
    sizeArr.push(sizeArr[i-1] + sizeArr[i-2]);
  }

  const drawHeight = sizeArr[len+1];
  const drawWidth  = sizeArr[len+1] + sizeArr[len];
  mainCanvas.height = drawHeight;
  mainCanvas.width = drawWidth;
  let drawLeft = left;
  let drawTop  = top;

  // ctx.beginPath();
  // ctx.fillStyle = 'rgb( 0, 0, 0)';
  // ctx.fillRect(drawLeft, drawTop, drawWidth, drawHeight);

  drawA(drawLeft, drawTop, sizeArr[sizeArr.length-1]);
  drawLeft += sizeArr[sizeArr.length-1];
  for (let i = len; i > 0; i--) {
    drawN(drawLeft, drawTop, sizeArr[i]);
    if (i%2 == 0) {
      drawLeft += sizeArr[i];
    } else {
      drawTop += sizeArr[i];
    }
  }
  drawA(drawLeft, drawTop, sizeArr[0]);
}
function init() {
  mainCanvas = document.getElementById('logoCanvas');
  ctx = mainCanvas.getContext("2d") ;
  drawLogo(0,0, 2, 7);
}
