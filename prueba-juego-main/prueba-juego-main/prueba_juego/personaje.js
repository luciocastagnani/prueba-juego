class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.vida = 1;
    this.bala = new Bala();
  }

  dibujar() {
    this.bala.dibujar();

    fill(this.miColor);
    triangle(this.posX, this.posY - 25,       
             this.posX - 25, this.posY + 25,  
             this.posX + 25, this.posY + 25); 
  } 

  teclaPresionada(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == UP_ARROW) {
      this.moverArriba();
    } else if (keyCode == DOWN_ARROW) {
      this.moverAbajo();
    } else if (keyCode == ENTER) {
      this.dispararBala();
    }
  }

  moverDerecha() {
    this.posX += 10;
  }

  moverIzquierda() {
    this.posX -= 10;
  }

  moverArriba() {
    if (this.posY > 25) {
      this.posY -= 10;
    }
  }

  moverAbajo() {
    if (this.posY < height - 25) {
      this.posY += 10;
    }
  }

  estaVivo() {
  }

  dispararBala() {
    this.bala = new Bala(this.posX, this.posY - 25); 
    this.bala.disparar();
  }

  haDisparadoBala() {
    return this.bala.disparada;
  }
}
