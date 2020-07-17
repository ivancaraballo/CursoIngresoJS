/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;
	var porcentaje;

	importe=prompt("Ingrese el importe");
	importe=parseInt(importe);

	porcentaje=prompt("Ingrese el porcentaje");
	porcentaje=parseInt(porcentaje);

	descuento=(importe*porcentaje/100);

	resultado=importe-descuento;

	alert("el importe es $"+importe+", el total de descuento es $"+descuento+" y el precio final es $"+resultado+", gracias por su compra");
}
