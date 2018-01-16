var n = 0;
var c = 5;
var angle;
var milestone = 200;
var color;

function setup(){
	createCanvas(windowWidth,windowHeight)
	background(0);
	angle = random(130, 137.5);
	colorMode(HSB);
}

function draw(){
	if(n > milestone){
		angle = random(135, 137);
		milestone = random(milestone,milestone * random(1,5));
	}
	var a = n * angle;
	var r = c * sqrt(n);

	var x = r * cos(a) + width/2;
	var y = r * sin(a) + height/2;
	noStroke();
	fill(random(150, 200), 150, random(150,250));
	ellipse(x,y,7,7);


	n++;
}
