import Carrusel from './components/Carrusel'
import bloques from './data/mockboard.json'

/** Placeholder de titulo: barra de color en lugar de texto. */
const Etiqueta = ({ color, lado }) => (
  <span
    className={`block h-3 w-44 rounded-full ${color} ${lado === 'derecha' ? 'ml-auto' : ''}`}
  />
)

export default function App() {
  return (
    <main className="relative flex-1 overflow-hidden px-6 py-10">
      {/* cunas grises decorativas */}
      <span className="absolute -top-8 left-0 size-40 bg-zinc-300 [clip-path:polygon(0_0,100%_0,0_100%)]" />
      <span className="absolute top-1/2 -right-10 size-40 bg-zinc-300 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="relative flex flex-col gap-3">
        {bloques.map((b, i) =>
          b.tipo === 'etiqueta' ? (
            <Etiqueta key={i} color={b.color} lado={b.lado} />
          ) : (
            <Carrusel key={i} color={b.color} corte={b.corte} n={b.piezas} />
          ),
        )}
      </div>
    </main>
  )
}
