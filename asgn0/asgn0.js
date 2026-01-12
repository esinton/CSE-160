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
  const x2 = parseFloat(document.getElementById("xCoord2").value);
  const y2 = parseFloat(document.getElementById("yCoord2").value);

  // no blanks
  if ([x1, y1, x2, y2].some(Number.isNaN)) {
    return;
  }

  const v1 = new Vector3([x1, y1, 0]);
  const v2 = new Vector3([x2, y2, 0]);

  // draw og vectors
  drawVector(v1, "red");
  drawVector(v2, "blue");

  // read op
  const op = document.getElementById("opSelect").value;

  if (op === "add") {
    const v3 = new Vector3(v1.elements); // copy so we don't destroy v1
    v3.add(v2);
    drawVector(v3, "green");

  } else if (op === "sub") {
    const v3 = new Vector3(v1.elements);
    v3.sub(v2);
    drawVector(v3, "green");

  } else if (op === "mul") {
    const s = parseFloat(document.getElementById("scalarInput").value);
    if (Number.isNaN(s)) return;

    const v3 = new Vector3(v1.elements);
    const v4 = new Vector3(v2.elements);
    v3.mul(s);
    v4.mul(s);
    drawVector(v3, "green");
    drawVector(v4, "green");

  } else if (op === "div") {
    const s = parseFloat(document.getElementById("scalarInput").value);
    if (Number.isNaN(s) || s === 0) return;

    const v3 = new Vector3(v1.elements);
    const v4 = new Vector3(v2.elements);
    v3.div(s);
    v4.div(s);
    drawVector(v3, "green");
    drawVector(v4, "green");

  } else if (op === "magnitude") {
    // compute magnitudes
    const m1 = v1.magnitude();
    const m2 = v2.magnitude();

    console.log("Magnitude of v1:", m1);
    console.log("Magnitude of v2:", m2);

  } else if (op === "normalize") {
    const v3 = new Vector3(v1.elements);
    const v4 = new Vector3(v2.elements);

    v3.normalize();
    v4.normalize();

    drawVector(v3, "green");
    drawVector(v4, "green");
  } else if (op === "angle") {
    const angle = angleBetween(v1, v2);
    console.log("Angle:", angle);
  } else if (op === "area") {
  const area = areaTriangle(v1, v2);
  console.log("Area of the triangle:", area);
  }

}

function handleDrawEvent() {
  const canvas = document.getElementById("example");
  const ctx = canvas.getContext("2d");

  //clear canvas to black
  ctx.fillStyle = "black";
  ctx.fillRect(0,0, canvas.width, canvas.height);

  //read x and y for both!

  const x1 = parseFloat(document.getElementById("xCoord1").value);
  const y1 = parseFloat(document.getElementById("yCoord1").value);

  const x2 = parseFloat(document.getElementById("xCoord2").value);
  const y2 = parseFloat(document.getElementById("yCoord2").value);



  //set v1 and v2
  const v1 = new Vector3([x1, y1, 0]);
  const v2 = new Vector3([x2, y2, 0]);

  //draw them
  drawVector(v1, "red");
  drawVector(v2, "blue");
}

function drawVector(v, color) {

  const canvas = document.getElementById("example");
  const ctx = canvas.getContext("2d");

  //set origin

  const ox = canvas.width / 2;
  const oy = canvas.height / 2;

  //set scale

  const scale = 20;

  //subtracting so y-axis goes up!
  //setting coords

  const ex = ox + v.elements[0] * scale;
  const ey = oy - v.elements[1] * scale;

  //draw ittt

  ctx.strokeStyle = color;
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(ox, oy);
  ctx.lineTo(ex, ey);
  ctx.stroke();

}

function angleBetween(v1, v2) {
  const dot = Vector3.dot(v1, v2);
  const mag1 = v1.magnitude();
  const mag2 = v2.magnitude();

  if (mag1 === 0 || mag2 === 0) {
    return 0;
  }

  // cos(theta) = dot / (|v1||v2|)
  const cosTheta = dot / (mag1 * mag2);

  const clamped = Math.min(1, Math.max(-1, cosTheta));

  const angleRad = Math.acos(clamped);
  const angleDeg = angleRad * (180 / Math.PI);

  return angleDeg;
}

function areaTriangle(v1, v2) {
  const cross = Vector3.cross(v1, v2);
  const parallelogramArea = cross.magnitude();

  return parallelogramArea / 2;
}

function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  //set background

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width, canvas.height);
}
