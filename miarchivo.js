
let nombre = prompt("Ingrese su nombre para conocer los valores");
alert ("Bienvenido " + nombre);

let servicio = prompt("Elija el servicio a realizar: Combo novia, 15 años");
while (servicio != "continuar") {
    switch servicio {
        case "combo novia":
            let precio = cupon(10000, 10);
            alert("El valor del servicio Combo Novia es de $" + precio);
            break;
        case "15 años":
            let precio = cupon(8000, 10);
            alert("El valor del servicio Combo Novia es de $" + precio);
            break;
    }
    servicio = prompt("Elija el servicio a realizar: Combo novia, 15 años")
}
function cupon(precioComboNovia, descuento) {
    let resultado = precioComboNovia - (precioComboNovia * descuento / 100)
    return resultado;
}



