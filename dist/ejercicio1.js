"use strict";
// La clase debe tener:
Object.defineProperty(exports, "__esModule", { value: true });
// Un constructor que inicialice los atributos.
// Un método calcularTotal() que retorne el total (precio × cantidad).
// Un método mostrarDetalle() que imprima la información del producto.
// Instanciar al menos un objeto y ejecutar sus métodos.
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    calcularTotal() {
        return this.precio * this.cantidad;
    }
    mostrarDetalle() {
        console.log("Producto: " + this.nombre);
        console.log("Precio: " + this.precio);
        console.log("Cantidad: " + this.cantidad);
        console.log("Total: " + this.calcularTotal());
    }
}
const producto1 = new Producto("Laptop", 1000, 2);
producto1.mostrarDetalle();
//# sourceMappingURL=ejercicio1.js.map