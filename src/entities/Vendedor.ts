import { Person } from "./Person";

export interface Vendedor extends Person{
    departamento: string;
    seccion: "Mujeres" | "Hombres" | "Niños";
}