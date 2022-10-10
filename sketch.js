//variáveis
var fundo;

function setup() {
createCanvas(windowWidth,windowHeight);
}


function preload() {
fundo = loadImage("floresta.png");
}

function draw() {
background(fundo);

}