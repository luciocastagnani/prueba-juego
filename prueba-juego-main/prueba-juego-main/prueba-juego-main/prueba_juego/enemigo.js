class Enemigo {
  constructor(posX, posY, tamano = 60) { 
    this.posX = posX;
    this.posY = posY;
    this.tamano = tamano; 
    this.miColor = color(random(255), random(255), random(255));
    this.vivo = true;
    this.rebote = false;
    this.velocidad = 0.3; 
  }
  
  dibujar() {
    if (this.vivo) {
      fill(this.miColor);
      ellipse(this.posX, this.posY, this.tamano, this.tamano); 
    }
  }
  
  matar() {
    this.vivo = false;
  }
  
  haTocadoLaBala(bala) {
    if (this.vivo && dist(this.posX, this.posY, bala.posX, bala.posY) < this.tamano / 2) {
      this.matar();
      return true;
    }
    return false;
  }
  
  mover() {
    if (this.vivo) {
      this.posY += this.velocidad; 
      if (this.posY > height + this.tamano / 2) {
        this.posY = -this.tamano / 2; 
      }
    }
  }
}
