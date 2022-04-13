canvas=document.getElementById("myCanvas");
color="black";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(150,143,430,200);
ctx.stroke();
ctx.arc(200,200,60,0,2*Math.PI);
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    console.log(color);
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log("X = "+mousex+"Y = "+mousey)
    circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,50,0,Math.PI*2);
    ctx.stroke();
}