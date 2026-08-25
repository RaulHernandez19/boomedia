import type { bloqueCarrusel } from './BloqueCarrusel'

export interface Carrusel {
  id: number
  titulo: string
  listabloques: bloqueCarrusel[]
  tamaño: string
  /** Color del titulo. Si se omite, toma el del primer bloque. */
  color?: string
}
