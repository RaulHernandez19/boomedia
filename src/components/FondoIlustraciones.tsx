/** Posicion y giro de cada cuadro decorativo. El tamaño es el mismo para los ocho. */
const POSICIONES = [
  'left-[2%] top-[8%] -rotate-6',
  'right-[4%] top-[10%] rotate-12',
  'left-[5%] top-[34%] rotate-6',
  'right-[2%] top-[42%] -rotate-12',
  'left-[8%] top-[58%] rotate-12',
  'right-[6%] top-[68%] -rotate-6',
  'left-[3%] top-[82%] rotate-3',
  'right-[9%] top-[88%] rotate-12',
]

/** Las cuatro ilustraciones de fondo, repetidas para cubrir las ocho posiciones. */
const FONDOS = ['/fondo1.png', '/fondo2.png', '/fondo3.png', '/fondo4.png']

/**
 * Fondo decorativo, a pantalla completa. Con `imagen` usa esa foto y la muestra
 * entera (`bg-contain`, sin recortar); sin ella deja los cuadros con fondo1-4.
 */
export default function FondoIlustraciones({ imagen }: { imagen?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {imagen ? (
        <div
          className="size-full bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${imagen})` }}
        />
      ) : (
        POSICIONES.map((posicion, i) => (
          <span
            key={posicion}
            className={`absolute size-10 bg-contain bg-center bg-no-repeat sm:size-28 ${posicion}`}
            style={{ backgroundImage: `url(${FONDOS[i % FONDOS.length]})` }}
          />
        ))
      )}
    </div>
  )
}
