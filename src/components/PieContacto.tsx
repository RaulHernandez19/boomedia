/** Barra de contacto. El color va de lado a lado; el texto se alinea con el contenido. */
export default function PieContacto() {
  return (
    <footer className="bg-azul relative">
      <div className="mx-auto flex w-full max-w-[var(--ancho-contenido)] items-center justify-between px-8 py-5 text-lg font-bold tracking-wide text-white uppercase">
        <span>Contacto</span>
        <span>Correo</span>
      </div>
    </footer>
  )
}
