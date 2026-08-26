export interface BloqueIntro {
  id: number
  titulo: string
  /** Color de fondo del bloque. */
  color: string
  /** Cuantas imagenes van dentro: 3 en "Quienes somos", 1 en "Que hacemos". */
  columnas: number
  /** Titulo encima de la imagen y al centro, en vez de arriba a la izquierda. */
  centrado?: boolean
  /** Alto de las tarjetas en px. Por defecto 128. */
  alto?: number
  /** Imagen de fondo del bloque completo. Si se omite, queda el color solo. */
  imagenFondo?: string
  /** Una imagen por columna. Las que falten caen al placeholder. */
  imagenes?: string[]
}
