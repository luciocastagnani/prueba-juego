let objJuego;
let img;

function preload() {
  img = loadImage('data/espacioexterior.jpeg');
}

function setup() {
  createCanvas(640,480);
  objJuego = new Juego(10);
}


function draw() {
  background(200);
  image(img, 0, 0, width, height);
  objJuego.dibujar();
}

function keyPressed(){
  objJuego.teclaPresionada(keyCode);
}
