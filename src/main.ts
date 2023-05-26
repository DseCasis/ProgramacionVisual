import { Client } from "./entities/Client"
import { Vendedor } from "./entities/Vendedor";

let clients: Client[] = [];
let vendedores: Vendedor[] = [];

enum seccion {
    Mujeres = "Mujeres",
    Hombres = "Hombres",
    Niños = "Niños",
}

function addClient(): void {
    let currentClient: Client = {

        name: readFromHtml("nameClient"),
        dni: readFromHtml("identClient"),
        adress: readFromHtml("adressClient"),
        age: parseInt(readFromHtml("ageClient")),
        email: readFromHtml("emailClient"),
        phone: readFromHtml("phoneClient"),
    }
    clients.push(currentClient);
    console.log(clients);
    console.table(clients);

}

function addVendedor(): void {
    let currentVendedor: Vendedor = {
        name: readFromHtml("nameVendedor"),
        dni: readFromHtml("idVendedor"),
        adress: readFromHtml("addressVendedor"),
        departamento: readFromHtml("departamentoVendedor"),
        seccion: readFromHtml("seccionVendedor") as "Mujeres" | "Hombres" | "Niños",
    }
    vendedores.push(currentVendedor);
    console.log(vendedores);
    console.table(vendedores);
}

function readFromHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}