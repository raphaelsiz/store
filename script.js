//this was basically just to see if i could figure it out lol

const canvas = document.querySelector(".canvas");
const c = canvas.getContext("2d");

var angle;
var rotate;

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

(function setup(){
  angle = 0;
	window.setInterval(() => {
    angle += 0.1;
    c.clearRect(0,0,canvas.width*3/2,canvas.height*3/2);
    c.translate(canvas.width/2,canvas.height/2)
    if (rotate === true) c.rotate(angle);
//rotated stuff
    c.fillText("hewwo",0,0);

    if (rotate === true) c.rotate(-angle);
    c.fillText("HEWWO", 10,10);
//normal stuff

    c.translate(-canvas.width/2,-canvas.height/2);
	},50);
}());


window.addEventListener('resize',function(event){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});

window.addEventListener('click',function(event){
  if (rotate === true) rotate = false;
  else if (rotate === false) rotate = true;
});
