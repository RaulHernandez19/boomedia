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
  /** Una imagen por columna. Las que falten caen al placeholder. `imagenes[1]` es la que cruza al hacer click. */
  imagenes?: string[]
  /** Reemplaza a `imagenes[1]` en celular (por debajo de `sm`). Si se omite, usa la misma en todos los tamaños. */
  imagenActivaMovil?: string
  /** Texto que aparece al hacer click, en vez del titulo: parrafo simple o lista de puntos. */
  contenido?: string | string[]
}
