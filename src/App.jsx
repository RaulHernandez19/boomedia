import FondoIlustraciones from './components/FondoIlustraciones'
import SeccionIntro from './components/SeccionIntro'
import Carrusel from './components/Carrusel'
import PieContacto from './components/PieContacto'
import { carruseles } from './data/carruseles'

export default function App() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-white">
      <FondoIlustraciones />

      <main className="relative mx-auto flex w-full max-w-[var(--ancho-contenido)] flex-1 flex-col gap-2 px-8 py-6">
        <SeccionIntro />

        <div className="flex flex-col gap-8">
          {carruseles.map((carrusel, i) => (
            <Carrusel
              key={carrusel.id}
              carrusel={carrusel}
              lado={i % 2 ? 'derecha' : 'izquierda'}
            />
          ))}
        </div>
      </main>

      <PieContacto />
    </div>
  )
}
