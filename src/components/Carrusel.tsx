import type { CSSProperties } from 'react'
import type { Carrusel as ModeloCarrusel } from '../models/Carrusel'
import BloqueCarrusel from './BloqueCarrusel'

/** `tamaño` -> en cuantas columnas se parte la fila. */
const COLUMNAS: Record<string, number> = {
  grande: 4,
  mediano: 6,
  chico: 8,
}

export default function Carrusel({
  carrusel,
  lado = 'izquierda',
}: {
  carrusel: ModeloCarrusel
  lado?: 'izquierda' | 'derecha'
}) {
  const cols = COLUMNAS[carrusel.tamaño] ?? COLUMNAS.mediano
  const color = carrusel.color ?? carrusel.listabloques[0]?.color

  return (
    <section className="@container">
      <ul
        className="flex items-center gap-[var(--g)] overflow-x-auto pb-2"
        style={
          {
            '--cols': cols,
            '--g': '1rem',
            '--u': 'calc((100cqw - (var(--cols) - 1) * var(--g)) / var(--cols))',
          } as CSSProperties
        }
      >
        {carrusel.listabloques.map((bloque) => (
          <BloqueCarrusel key={bloque.id} bloque={bloque} />
        ))}
      </ul>

      <h2
        className={`mt-1 text-3xl font-black tracking-tighter ${
          lado === 'derecha' ? 'text-right' : 'text-left'
        }`}
        style={{ color }}
      >
        {carrusel.titulo}
      </h2>
    </section>
  )
}
