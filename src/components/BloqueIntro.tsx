import type { BloqueIntro as ModeloBloqueIntro } from '../models/BloqueIntro'
import placeholder from '../assets/placeholder.svg'

/**
 * La imagen ocupa todo el recuadro y el titulo va encima, al centro.
 *
 * Con `activo` se funde la segunda imagen de `imagenes` encima de la primera
 * y el titulo se desvanece. Las dos imagenes estan siempre montadas y solo
 * cambia la opacidad, que es lo que permite el cruce suave.
 *
 * Quien esta activo lo decide SeccionIntro, no el bloque: asi abrir uno cierra
 * al otro.
 *
 * Encima va una capa negra que mantiene la imagen apagada; al pasar el mouse
 * esa capa se desvanece y la imagen recupera su color, mientras el bloque crece.
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
  activo,
  onAlternar,
}: {
  bloque: ModeloBloqueIntro
  lado?: 'izquierda' | 'derecha'
  activo: boolean
  onAlternar: () => void
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onAlternar}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onAlternar()}
      className="group relative w-full cursor-pointer self-stretch overflow-hidden transition-transform duration-700 ease-out hover:z-10 hover:scale-103"
      style={{ minHeight: bloque.alto ?? 128, backgroundColor: bloque.color }}
    >
      <img
        src={bloque.imagenes?.[0] || bloque.imagenFondo || placeholder}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />

      {bloque.imagenes?.[1] && (
        <img
          src={bloque.imagenes[1]}
          alt=""
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out ${
            activo ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      <div className="absolute inset-0 bg-black/15 transition-opacity duration-700 ease-out group-hover:opacity-0" />

      <h2
        className={`absolute inset-0 m-0 flex items-center justify-center px-4 text-center text-5xl font-black text-white transition-opacity duration-700 ease-out ${
          activo ? 'opacity-0' : 'opacity-100'
        } ${lado === 'derecha' ? 'sm:pl-24' : 'sm:pr-10'}`}
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
