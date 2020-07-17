function mostrar()
{
	var precio;
	var descuento;
	var porcentaje;
	var precioFinal;

	precio=prompt("Ingrese el precio del producto");
	precio=parseInt(precio);

	porcentaje=prompt("Ingrese el porcentaje de descuento");
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;

	precioFinal=precio-descuento;
	elPrecioFinal.value=precioFinal;
}
