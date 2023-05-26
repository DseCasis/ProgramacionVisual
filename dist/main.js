"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let clients = [];
let vendedores = [];
var seccion;
(function (seccion) {
    seccion["Mujeres"] = "Mujeres";
    seccion["Hombres"] = "Hombres";
    seccion["Ni\u00F1os"] = "Ni\u00F1os";
})(seccion || (seccion = {}));
function addClient() {
    let currentClient = {
        name: readFromHtml("nameClient"),
        dni: readFromHtml("identClient"),
        adress: readFromHtml("adressClient"),
        age: parseInt(readFromHtml("ageClient")),
        email: readFromHtml("emailClient"),
        phone: readFromHtml("phoneClient"),
    };
    clients.push(currentClient);
    console.log(clients);
    console.table(clients);
}
function addVendedor() {
    let currentVendedor = {
        name: readFromHtml("nameVendedor"),
        dni: readFromHtml("idVendedor"),
        adress: readFromHtml("addressVendedor"),
        departamento: readFromHtml("departamentoVendedor"),
        seccion: readFromHtml("seccionVendedor"),
    };
    vendedores.push(currentVendedor);
    console.log(vendedores);
    console.table(vendedores);
}
function readFromHtml(id) {
    return document.getElementById(id).value;
}
