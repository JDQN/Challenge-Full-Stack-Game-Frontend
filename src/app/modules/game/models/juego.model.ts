export interface JuegoModel {
    id:string,
    iniciado: boolean,
    cantidadJugadores: number,
    jugadores: Map<string,Jugador>
  }
  
  export interface Jugador {
    alias:string,
    uid:string
  }