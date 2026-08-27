/** Encabezado. Con `logo` usa la imagen real; sin ella queda el logotipo de texto. */
export default function Marca({ logo }: { logo?: string }) {
  return (
    <header className="py-4">
      {logo ? (
        <img src={logo} alt="BOOMedia" className="mx-auto h-64 object-contain" />
      ) : (
        <p
          className="text-rojo text-6xl font-black tracking-tighter"
          style={{
            textShadow:
              '4px 4px 0 var(--color-azul), 8px 8px 0 var(--color-naranja)',
          }}
        >
          BOOM<span className="text-4xl">edia</span>
        </p>
      )}
    </header>
  )
}
