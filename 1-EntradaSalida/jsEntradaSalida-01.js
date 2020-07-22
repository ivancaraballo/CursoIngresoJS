/*
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"
*/
function mostrar()
{
	var importeUno;
	var importeDos;
	var porcentaje;
	var descuento;
	var sumaDeLosImportes;
	var precioFinal;
	var iva;
	var aumentoDelIva;
	var precioFinalConIva;

	importeUno=prompt("Ingrese el precio de un producto");
	importeUno=parseInt(importeUno);

	importeDos=prompt("Ingrese el precio de un producto");
	importeDos=parseInt(importeDos);

	porcentaje=prompt("Ingrese el porcentaje de porcentaje");
	porcentaje=parseInt(porcentaje);

	sumaDeLosImportes=importeUno+importeDos;

	descuento=sumaDeLosImportes*porcentaje/100;

	precioFinal=sumaDeLosImportes-descuento;

	iva=21/100;

	aumentoDelIva=precioFinal*iva;
	aumentoDelIva=parseInt(aumentoDelIva);

	precioFinalConIva=precioFinal+aumentoDelIva;

	alert("los productos cuestan $"+importeUno+" y $"+importeDos+" , sumados son $"+sumaDeLosImportes+" ,tienen un descuento de $"+descuento+" , el precio total con descuento es $"+precioFinal+" ,el iva es de $"+aumentoDelIva+" y el precio final con IVA es $"+precioFinalConIva);
}

