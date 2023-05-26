import { Person } from "./Person"

export interface Client extends Person {
    age: number;
    email: string;
    phone: string;
}