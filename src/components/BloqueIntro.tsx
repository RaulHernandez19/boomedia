import type { BloqueIntro as ModeloBloqueIntro } from '../models/BloqueIntro'
import placeholder from '../assets/placeholder.svg'

/**
 * Por ahora el bloque es solo la imagen: ocupa todo el recuadro y su alto lo
 * manda `alto` desde los datos. El color queda de respaldo mientras carga.
 */
export default function BloqueIntro({ bloque }: { bloque: ModeloBloqueIntro }) {
  return (
    <img
      src={bloque.imagenes?.[0] || bloque.imagenFondo || placeholder}
      alt=""
      className="w-full self-stretch object-cover"
      style={{ minHeight: bloque.alto ?? 128, backgroundColor: bloque.color }}
    />
  )
}
