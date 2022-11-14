
function Producto(info){
    this.nombre = info.nombre;
    this.precio = info.precio;
  
};
let producto1 = new Producto({
    nombre: "hilos",
    precio: 300,
   
});

let producto2 =new Producto({
    nombre: "elastico",
    precio: 100,
    
});

let producto3 = new Producto({
    nombre: "guata",
    precio: 600,
   
});

alert(`Bienvenidos a la tienda online!
        La lista de productos es:
        Producto - Precio
        ${producto1.nombre} - $ ${producto1.precio} 
        ${producto2.nombre} - $ ${producto2.precio} 
        ${producto3.nombre} - $ ${producto3.precio} 
        
        `);

let comprarProducto1 = prompt(`¿Quiere comprar el producto ${producto1.nombre} a $ ${producto1.precio}? Su respuesta debe ser si o no. En caso contrario deberá ingresar nuevamente la respuesta.`).toLowerCase();

while ((comprarProducto1 != "si") && (comprarProducto1 != "no")) {
    comprarProducto1 = prompt(`Su respuesta es incorrecta. Vuelva a ingresar una respuesta para el producto ${producto1.nombre}.`);
}

let comprarProducto2 = prompt(`¿Quiere comprar el producto ${producto2.nombre} a $ ${producto2.precio}? Su respuesta debe ser si o no. En caso contrario deberá ingresar nuevamente la respuesta.`).toLowerCase();

while ((comprarProducto2 != "si") && (comprarProducto2 != "no")) {
    comprarProducto2 = prompt(`Su respuesta es incorrecta. Vuelva a ingresar una respuesta para el producto ${producto2.nombre}.`);
}

let comprarProducto3 = prompt(`¿Quiere comprar el producto ${producto3.nombre} a $ ${producto3.precio}? Su respuesta debe ser si o no. En caso contrario deberá ingresar nuevamente la respuesta.`).toLowerCase();

while ((comprarProducto3 != "si") && (comprarProducto3 != "no")) {
    comprarProducto3 = prompt(`Su respuesta es incorrecta. Vuelva a ingresar una respuesta para el producto ${producto3.nombre}.`);
}

function compra() {
    let carrito = 0;
    
    if (comprarProducto1 === "si") {
        carrito = carrito + producto1.precio;
       
    }

    if (comprarProducto2 === "si") {
        carrito = carrito + producto2.precio;
       
    }


    if (comprarProducto3 === "si") {
        carrito = carrito + producto3.precio;
       
    }

   
    let costoTotal = carrito ;

    if (carrito != 0) {
        alert(`Resumen de la compra
Subtotal - $ ${carrito}

--------------------------
Total - $ ${costoTotal}`);
        alert("Fin de la compra.");
    } else {
        alert("Dado que no ha agregado ningún producto a su carrito, usted no ha realizado ninguna compra. Gracias por su tiempo.")
    }

}

compra();