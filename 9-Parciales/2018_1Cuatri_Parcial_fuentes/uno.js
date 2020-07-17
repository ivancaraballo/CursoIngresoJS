
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese el ancho","ej: 5");
	ancho=parseInt(ancho);
	
	largo=prompt("Ingrese el lardo","ej: 10");
	largo=parseInt(largo);
	
	perimetro=(ancho+largo)*2;

	alert("El perimetro del rectangulo es "+perimetro);
}
