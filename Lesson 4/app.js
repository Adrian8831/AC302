var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var bw = new Image();
bw.src = "Black-Widow.png";

var capt = new Image();
capt.src = "capt.png";

var hawkeye = new Image();
hawkeye.src = "hawkeye.png";

var hulk = new Image();
hulk.src = "hulk.png";

var im = new Image();
im.src = "Iron_Man.png";

var thor = new Image();
thor.src = "thor.png";

bw.onload = function(){
	ctx.drawImage(bw,650,200,150,200);
}

capt.onload = function(){
	ctx.drawImage(capt,370,250,200,200);
}

hawkeye.onload = function(){
	ctx.drawImage(hawkeye,10,120,150,200);
}

hulk.onload = function(){
	ctx.drawImage(hulk,220,110,190,190);
}

im.onload = function(){
	ctx.drawImage(im,470,110,200,200);
}

thor.onload = function(){
	ctx.drawImage(thor,150,250,200,180);
}

ctx.fillStyle = "sandybrown";
ctx.fillRect(0,380,800,150);
ctx.fillStyle = "midnightblue";
ctx.fillRect(0,0,800,300);


ctx.beginPath();
ctx.arc(100,100,50,0,6.28);
ctx.closePath();
ctx.fillStyle = "ivory";
ctx.fill();

ctx.font = "55px Freckle Face"
ctx.fillStyle = "ivory";
ctx.fillText("Avengers Assemble",210,80);



