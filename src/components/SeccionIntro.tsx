import { bloquesIntro, lema } from '../data/bloquesIntro'
import BloqueIntro from './BloqueIntro'

/**
 * La fila de arriba: "Quienes somos" ocupa 2 de 5 columnas y manda su propio
 * alto con `min-h-*`; "Que hacemos" y el lema van apilados en las otras 3.
 *
 * Van en columnas separadas (y no compartiendo filas) justo para que alargar
 * el naranja no estire tambien el rojo.
 */
export default function SeccionIntro() {
  const [quienesSomos, queHacemos] = bloquesIntro

  return (
    <section className="grid gap-4 sm:grid-cols-5 sm:items-start">
      <div className="flex min-h-96 sm:col-span-2">
        <BloqueIntro bloque={quienesSomos} />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-3">
        <BloqueIntro bloque={queHacemos} />

        <p className="text-azul text-right text-2xl leading-tight font-extrabold">
          {lema}
        </p>
      </div>
    </section>
  )
}
