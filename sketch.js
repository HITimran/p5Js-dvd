let x;
let y;
let xSpeed;
let ySpeed;


function setup() {
  createCanvas(800, 600);
  x=400;
  y=300;
  xSpeed=10;
  ySpeed=10;
}

let dvd;

function preload(){
dvd= loadImage("dvd_logo.png");}

function draw() {
  background(0);
 // rect(x,y,80,60);
  image(dvd,x,y);
  x=x+xSpeed;
  y=y+ySpeed;
  
  if(x +80== width || x==0)
  {xSpeed=-xSpeed;
  }
  
  if(y +60== height || y==0)
  {ySpeed=-ySpeed;
  }
}