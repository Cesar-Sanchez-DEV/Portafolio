import type { Lenguaje } from "./Lenguaje"

export interface Experience {
    id: number
    cargo: string
    empresa: string
    logo: string
    inicio: string
    activo?: boolean
    fin?: string
    ubicacion: string
    descripcion: string,
    lenguajes: Lenguaje[]
}