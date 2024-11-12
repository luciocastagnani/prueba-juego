class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
  }
  
  dibujar() {
    this.personaje.dibujar();
    
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujar();
    }
    
    this.controlarDisparosAEnemigos();
  }
  
  iniciar() {
  }
  
  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i * 60 + 50, 100);
    }
  }
  
  crearPersonaje() {
    this.personaje = new Personaje(width / 2, height - 50);
  }
  
  personajeGano() {
  }
  
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
  
  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        if (this.enemigos[i].haTocadoLaBala(this.personaje.bala)) {
          this.enemigos[i].destruido = true;
        }
      }
    }
  }
}
