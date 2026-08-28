import type { BloqueIntro as ModeloBloqueIntro } from '../models/BloqueIntro'
import placeholder from '../assets/placeholder.svg'

/**
 * La imagen ocupa todo el recuadro y el titulo va encima, al centro.
 *
 * `lado` dice de que lado queda el logo para dejarle aire: el titulo sigue
 * centrado, pero dentro del espacio que sobra despues del padding. Solo aplica
 * de `sm` para arriba, porque en celular los bloques se apilan y no se estorban.
 *
 * Las letras son blancas con un contorno del color del bloque. `paintOrder`
 * dibuja ese contorno por detras del relleno; sin el, el trazo se come la
 * letra desde el borde y a este grosor quedaria ilegible.
 */
export default function BloqueIntro({
  bloque,
  lado,
}: {
  bloque: ModeloBloqueIntro
  lado?: 'izquierda' | 'derecha'
}) {
  return (
    <div
      className="relative w-full self-stretch overflow-hidden"
      style={{ minHeight: bloque.alto ?? 128, backgroundColor: bloque.color }}
    >
      <img
        src={bloque.imagenes?.[0] || bloque.imagenFondo || placeholder}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />

      <h2
        className={`absolute inset-0 m-0 flex items-center justify-center px-4 text-center text-5xl font-black text-white ${
          lado === 'derecha' ? 'sm:pl-24' : 'sm:pr-10'
        }`}
        style={{
          WebkitTextStrokeWidth: '6px',
          WebkitTextStrokeColor: bloque.color,
          paintOrder: 'stroke fill',
        }}
      >
        {bloque.titulo}
      </h2>
    </div>
  )
}
