const eraserBtn = document.getElementById('eraser-btn');
const destroyBtn = document.querySelector('#destroy-btn');
const modeBtn = document.getElementById('mode-btn');
const colorOptions = Array.from(document.getElementsByClassName('color-option'));
const color = document.querySelector('#color');
const lineWidth = document.querySelector('#line-width')
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

// ctx.fillRect(210, 200, 15, 100);
// ctx.fillRect(350, 200, 15, 100);
// ctx.fillRect(260, 200, 60, 200);

// ctx.arc(290, 140, 50, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.fillStyle = "tomato"
// ctx.arc(270, 140, 8, 1 * Math.PI, 2 * Math.PI);
// ctx.fill();
// ctx.arc(300, 140,8, 1 * Math.PI, 2 * Math.PI);
// ctx.fill();

ctx.lineWidth = lineWidth.value;

const colors = 
["#ff3838",
"#ffb8b8",
"#c56cf0",
"#ff9f1a",
"#fff200",
"#32ff7e",
"#7efff5",]

// function onClick(event) {
    
//     ctx.beginPath();
//     const color = colors[Math.floor(Math.random()* colors.length)]
//     ctx.moveTo(0,0)
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// canvas.addEventListener('mousemove' , onClick);

let isPainting = false;
let isFilling = false;
function onMove(event) {
    if(isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);

}
function startPainting() {
   isPainting = true;
}
function cancelPainting() {
    isPainting = false;
 }

function onLineWidthChange (event) {
    ctx.lineWidth = event.target.value;
}

function  onColorChange (event) {
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
     const colorValue = event.target.dataset.color
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue
}

function onModeClick () {
    if(isFilling) {
        isFilling =false;
        modeBtn.innerText = "Fill"
    }else {
        isFilling = true;
        modeBtn.innerText = "Draw"
    }
}
function onCanvasClick () {
    if (isFilling) {
        ctx.fillRect(0,0,800,800);
    }
}

function onDestroyClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,800,800);
}

function onEraserClick() {
    ctx.strokeStyle ="white";
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown',startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);

colorOptions.forEach(color => color.addEventListener('click', onColorClick));

modeBtn.addEventListener('click', onModeClick);
destroyBtn.addEventListener('click', onDestroyClick);
eraserBtn.addEventListener('click', onEraserClick);