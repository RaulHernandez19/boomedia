import type { BloqueIntro } from '../models/BloqueIntro'

/**
 * Los dos bloques de arriba. La imagen ocupa el recuadro completo; el alto real
 * lo manda el `min-h-*` de SeccionIntro y `alto` solo sirve de minimo.
 */
export const bloquesIntro: BloqueIntro[] = [
  {
    id: 1,
    titulo: 'Qué somos?',
    color: 'var(--color-naranja)',
    columnas: 1,
    centrado: true,
    alto: 300,
    imagenes: ['/queSomos.png', '/quesomos2.png'],
  },
  {
    id: 2,
    titulo: '¿Qué hacemos?',
    color: 'var(--color-rojo)',
    columnas: 1,
    centrado: true,
    alto: 300,
    imagenes: ['/queHacemos.png', '/quehacemos2.png'],
  },
]

export const lema = 'Lema de la empresa o gancho comercial'
