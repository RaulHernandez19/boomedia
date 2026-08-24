import { bloqueCarrusel } from "./bloqueCarrusel";

export interface Carruse{
    id: number;
    titulo: string;
    direccion: "izq" | "der";
    listabloques: bloqueCarrusel[];
}

