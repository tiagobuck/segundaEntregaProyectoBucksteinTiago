function Producto(info){
    this.nombre = info.nombre;
    this.precio = info.precio;
    
};

let producto1 = new Producto({
    nombre: "hilos",
    precio: 3100,
 
});

let producto2 = new Producto({
    nombre: "elastico",
    precio: 1000,
    
});

let producto3 = new Producto({
    nombre: "guata",
    precio: 1500,
   
});

const catalogo = [producto1, producto2, producto3];



alert(`Bienvenidos a la tienda online!
        La lista de productos es:
        Producto - Precio - Peso
        ${catalogo[0].nombre} - $ ${catalogo[0].precio} - ${catalogo[0].peso}kg
        ${catalogo[1].nombre} - $ ${catalogo[1].precio} - ${catalogo[1].peso}kg
        ${catalogo[2].nombre} - $ ${catalogo[2].precio} - ${catalogo[2].peso}kg
        
        `);

const respuesta = [];


for (let index = 0; index < catalogo.length; index++) {
    let comprarProducto1 = prompt(`¿Quiere comprar el producto ${catalogo[index].nombre} a $ ${catalogo[index].precio}? Su respuesta debe ser si o no. En caso contrario deberá ingresar nuevamente la respuesta.`).toLowerCase();
    while ((comprarProducto1 != "si") && (comprarProducto1 != "no")) {
        comprarProducto1 = prompt(`Su respuesta es incorrecta. Vuelva a ingresar una respuesta para el producto ${catalogo[index].nombre}.`);
    }    
    respuesta.push(comprarProducto1);
}

function compra() {
    let carrito = 0;
  

    for (let index = 0; index < catalogo.length; index++) {
        if (respuesta[index] === "si"){
            carrito = carrito + catalogo[index].precio;
           
        }
    }


   
    let costoTotal = carrito;

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