function clearCanvas() {
  const canvas = document.getElementById("example"); // or "webgl" if you changed it
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleDrawOperationEvent() {
  clearCanvas();

  // read v1
  const x1 = parseFloat(document.getElementById("xCoord1").value);
  const y1 = parseFloat(document.getElementById("yCoord1").value);

  // read v2
  const x2 = parseFloat(document.getElementB