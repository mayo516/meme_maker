const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.rect(250, 250, 100, 100);
// ctx.fill();

// ctx.beginPath();
// ctx.rect(350, 350, 100, 100);
// ctx.fillStyle  = "tomato";
// ctx.fill();

// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150,150);
// ctx.lineTo(50,150);
// ctx.lineTo(50,50);
// ctx.stroke();
//집그리기
// ctx.fillRect ( 200, 200 , 50, 200);
// ctx.fillRect ( 400, 200 , 50, 200);

// ctx.lineWidth = 2;
// ctx.fillRect ( 300, 300 , 50, 100);
// ctx.fillRect (200, 200, 200, 20);

// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

//원그리기

ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 140, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "tomato"
ctx.arc(270, 140, 8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.arc(300, 140,8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();