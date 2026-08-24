
export default function Carrusel({ color, corte = 'fin', n = 4 }) {
  const chica = corte === 'fin' ? n - 1 : 0

  return (
    <ul className="flex snap-x gap-4 overflow-x-auto py-1 [scrollbar-width:none]">
      {Array.from({ length: n }, (_, i) => (
        <li
          key={i}
          className={`group relative aspect-square shrink-0 snap-start transition duration-300 hover:brightness-110 ${color} ${
            i === chica
              ? `w-28 self-center brightness-75 ${corte === 'inicio' ? '-ml-10' : ''}`
              : 'w-40'
          }`}
        >
          {/* placeholder de descripcion-hover */}
          <span className="absolute inset-x-3 bottom-3 h-2 origin-left scale-x-0 rounded-full bg-white/70 transition duration-300 group-hover:scale-x-100" />
        </li>
      ))}
    </ul>
  )
}
