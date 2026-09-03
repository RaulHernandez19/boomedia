export interface bloqueCarrusel {
  id: number;
  titulo: string;
  image: string;
  descripcion_hover: string;
  imagen_hover: string;
  color: string;
  largo_bloques: number;
  /** Si esta presente, el bloque abre este PDF en otra pestaña al hacer click. */
  doc_link?: string;
}
