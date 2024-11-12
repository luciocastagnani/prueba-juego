class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 255, 0);
    this.vivo = true;
  }
  
  dibujar() {
    if (this.vivo) {
      fill(this.miColor);
      ellipse(this.posX, this.posY, 30, 30);
    }
  }
  
  matar() {
    this.vivo = false;
  }
  
  haTocadoLaBala(bala) {
    if (this.vivo && dist(this.posX, this.posY, bala.posX, bala.posY) < 15) {
      this.matar();
      return true;
    }
    return false;
  }
}
