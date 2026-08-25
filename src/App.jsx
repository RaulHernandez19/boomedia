import Carrusel from './components/Carrusel'
import { carruseles } from './data/carruseles'

export default function App() {
  return (
    <main className="flex flex-1 flex-col gap-8 px-6 py-10">
      {carruseles.map((carrusel, i) => (
        <Carrusel
          key={carrusel.id}
          carrusel={carrusel}
          lado={i % 2 ? 'derecha' : 'izquierda'}
        />
      ))}
    </main>
  )
}
