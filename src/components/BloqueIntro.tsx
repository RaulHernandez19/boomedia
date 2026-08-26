import type { BloqueIntro as ModeloBloqueIntro } from '../models/BloqueIntro'
import placeholder from '../assets/placeholder.svg'

/**
 * Bloque de presentacion: color (o imagen) de fondo, titulo y tarjetas.
 * `columnas` decide cuantas tarjetas van y `centrado` si el titulo se monta encima.
 *
 * Las tarjetas llevan alto fijo y `mt-auto`: se pegan abajo y no se estiran
 * aunque el bloque crezca, que es lo que las mantiene chicas y parejas.
 */
export default function BloqueIntro({ bloque }: { bloque: ModeloBloqueIntro }) {
  return (
    <article
      className="relative flex w-full flex-col gap-4 bg-cover bg-center p-5"
      style={{
        backgroundColor: bloque.color,
        backgroundImage: bloque.imagenFondo
          ? `url(${bloque.imagenFondo})`
          : undefined,
      }}
    >
      <div
        className="mt-auto grid gap-3"
        style={{
          gridTemplateColumns: `repeat(${bloque.columnas}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: bloque.columnas }, (_, i) => (
          <img
            key={i}
            src={bloque.imagenes?.[i] || placeholder}
            alt=""
            className="w-full object-cover"
            style={{ height: bloque.alto ?? 128 }}
          />
        ))}
      </div>

      <h2
        className={
          bloque.centrado
            ? 'absolute inset-0 m-0 flex items-center justify-center text-3xl font-extrabold text-white'
            : 'order-first m-0 text-left text-2xl font-extrabold text-white'
        }
      >
        {bloque.titulo}
      </h2>
    </article>
  )
}
