

export interface JuegoModel22 {
    id:string,
    iniciado: boolean,
    cantidadJugadores: number,
    jugadores: Map<string,Jugador>
  }
  
  export interface Jugador {
    alias:string,
    uid:string
  }