import type { bloqueCarrusel } from '../models/BloqueCarrusel'

/**
 * Una pieza del carrusel.
 *
 * El largo sale de `largo_bloques`: 1 = cuadrado, 2 = dos bloques mas el gap
 * que habria entre ellos, 3 = tres, etc. Ese termino del gap es lo que
 * mantiene todas las filas cuadriculadas aunque mezclen largos.
 *
 * `--u` (lado del bloque base) y `--g` (separacion) los pone el carrusel;
 * si el bloque se usa suelto, caen a sus valores por defecto.
 */
const largo = (n: number) =>
  `calc(var(--u, 12rem) * ${n} + var(--g, 1rem) * ${Math.max(n - 1, 0)})`

export default function BloqueCarrusel({ bloque }: { bloque: bloqueCarrusel }) {
  const n = bloque.largo_bloques || 1

  return (
    <li
      className="group relative shrink-0 overflow-hidden"
      style={{
        width: largo(n),
        height: `calc(var(--u, 12rem) * ${Math.min(n, 1)})`,
        backgroundColor: bloque.color,
      }}
    >
      {bloque.image && (
        <img
          src={bloque.image}
          alt={bloque.titulo}
          className="absolute inset-0 size-full object-cover"
        />
      )}

      {bloque.imagen_hover && (
        <img
          src={bloque.imagen_hover}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        />
      )}

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 text-left">
        <h3 className="text-base font-medium text-white">{bloque.titulo}</h3>

        {bloque.descripcion_hover && (
          <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100 motion-reduce:transition-none">
            {bloque.descripcion_hover}
          </p>
        )}
      </div>
    </li>
  )
}
