import type { BloqueIntro } from '../models/BloqueIntro'

/**
 * Los dos bloques de arriba. Para poner imagenes reales basta con llenar
 * `imagenes` (una por columna) o `imagenFondo`; si se dejan vacios sale el placeholder.
 */
export const bloquesIntro: BloqueIntro[] = [
  {
    id: 1,
    titulo: '¿Quiénes somos?',
    color: 'var(--color-naranja)',
    columnas: 3,
  },
  {
    id: 2,
    titulo: '¿Qué hacemos?',
    color: 'var(--color-rojo)',
    columnas: 1,
    centrado: true,
    alto: 300,
  },
]

export const lema = 'Lema de la empresa o gancho comercial'
