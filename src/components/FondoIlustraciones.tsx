/** Posicion, tamaño y giro de cada cuadro decorativo. */
const CUADROS = [
  'left-[2%] top-[8%] size-32 -rotate-6',
  'right-[4%] top-[10%] size-28 rotate-12',
  'left-[5%] top-[34%] size-24 rotate-6',
  'right-[2%] top-[42%] size-36 -rotate-12',
  'left-[8%] top-[58%] size-20 rotate-12',
  'right-[6%] top-[68%] size-28 -rotate-6',
  'left-[3%] top-[82%] size-24 rotate-3',
  'right-[9%] top-[88%] size-20 rotate-12',
]

/**
 * Fondo decorativo, a pantalla completa. Con `imagen` usa esa foto y la muestra
 * entera (`bg-contain`, sin recortar); sin ella deja los cuadros grises.
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
        CUADROS.map((cuadro) => (
          <span key={cuadro} className={`bg-ilustracion absolute ${cuadro}`} />
        ))
      )}
    </div>
  )
}
