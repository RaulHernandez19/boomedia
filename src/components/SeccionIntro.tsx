import { useState } from 'react'
import { bloquesIntro, lema } from '../data/bloquesIntro'
import BloqueIntro from './BloqueIntro'
import Marca from './Marca'

/**
 * La fila de arriba: "Quienes somos" y "Que hacemos" ocupan cada uno la
 * mitad del ancho, pegados uno al otro (sin `gap`) y con el mismo alto
 * (`min-h-96` en los dos). El logo va superpuesto encima de la fila
 * entera, centrado sobre la union de los dos bloques, y no reserva su
 * propio espacio (`absolute`).
 *
 * El id del bloque abierto vive aqui y no dentro de cada bloque: es lo que
 * permite que abrir uno cierre al otro, porque solo cabe un id a la vez.
 */
export default function SeccionIntro() {
  const [quienesSomos, queHacemos] = bloquesIntro
  const [activo, setActivo] = useState<number | null>(null)
  const alternar = (id: number) => setActivo(activo === id ? null : id)

  return (
    <section className="flex flex-col gap-2">
      <div className="relative gap-2 grid sm:grid-cols-2">
        <div className="flex min-h-96">
          <BloqueIntro
            bloque={quienesSomos}
            lado="izquierda"
            activo={activo === quienesSomos.id}
            onAlternar={() => alternar(quienesSomos.id)}
          />
        </div>

        <div className="flex min-h-96">
          <BloqueIntro
            bloque={queHacemos}
            lado="derecha"
            activo={activo === queHacemos.id}
            onAlternar={() => alternar(queHacemos.id)}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <Marca logo="/boomedia_logo.png" />
        </div>
      </div>

      <p className="text-azul text-center text-3xl leading-tight font-extrabold">
        {lema}
      </p>
    </section>
  )
}
