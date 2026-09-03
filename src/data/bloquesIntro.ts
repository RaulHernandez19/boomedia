import type { BloqueIntro } from '../models/BloqueIntro'

/**
 * Los dos bloques de arriba. La imagen ocupa el recuadro completo; el alto real
 * lo manda el `min-h-*` de SeccionIntro y `alto` solo sirve de minimo.
 */
export const bloquesIntro: BloqueIntro[] = [
  {
    id: 1,
    titulo: '¿Qué somos?',
    color: 'var(--color-naranja)',
    columnas: 1,
    centrado: true,
    alto: 300,
    imagenes: ['/queSomos.png', '/quesomosre3.png'],
    contenido:
      '',
  },
  {
    id: 2,
    titulo: '¿Qué hacemos?',
    color: 'var(--color-rojo)',
    columnas: 1,
    centrado: true,
    alto: 300,
    imagenes: ['/queHacemos.png', '/quehacemosre.png'],
    imagenActivaMovil: '/quehacemos2invertido.png',
    contenido: [
      ''
    ],
  },
]

export const lema = 'Diferentes Talentos Una Estrategia'
