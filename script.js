//this was basically just to see if i could figure it out lol

const canvas = document.querySelector(".canvas");
const c = canvas.getContext("2d");

var angle;

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

(function setup(){
  angle = 0;
	window.setInterval(() => {
    angle += 0.1;
    c.clearRect(0,0,canvas.width*3/2,canvas.height*3/2);
    c.translate(canvas.width/2,canvas.height/2)
    c.rotate(angle);
//rotated stuff
    c.fillText("hewwo",0,0);

    c.rotate(-angle);
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
  c.restore();
  if (page=="menu"){
    for (let i = 0; i < buttons.length; i++){
      let die = buttons[i];
      if (event.x >= die.x && event.x <= die.x + 64 && event.y >= die.y && event.y <= die.y + 64) {
        page = "dice";
        set = i;
      }
    }
  }
  if (page=="dice"){
    for (let i = 0; i < dice.length; i++){
      let die = dice[i];
      if (event.x >= die.x && event.x <= die.x + 64 && event.y >= die.y && event.y <= die.y + 64) {
        die.num = "";
        die.draw();
        die.num = Math.floor(Math.random()*die.max + 1);
      }
    }
    if (event.x >= canvas.width-200 && event.y >= canvas.height-50 && event.x <= canvas.width-50 && event.y <= canvas.height-15) page = "menu";
  }
});