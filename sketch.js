let x;
let y;
let xSpeed;
let ySpeed;
let r,g,b;

function setup() {
  createCanvas(800, 600);
  x=400;
  y=300;
  xSpeed=10;
  ySpeed=10;
  pickcolor();
}

function pickcolor() {
  r=random(100,256);
  g=random(100,256);
  b=random(100,256);
}

let dvd;

function preload(){
dvd= loadImage("dvd_logo.png");}

function draw() {
  background(0);
 // rect(x,y,80,60);
  tint(r,g,b);
  image(dvd,x,y);
  x=x+xSpeed;
  y=y+ySpeed;
  
  if(x +80== width || x==0)
  {xSpeed=-xSpeed;
   pickcolor();
  }
  
  if(y +60== height || y==0)
  {ySpeed=-ySpeed;
   pickcolor();
  }
}