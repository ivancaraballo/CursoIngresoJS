
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese al ancho del rectangulo");
	ancho=parseInt(ancho);

	largo=prompt("Ingrese el lardo del rectangulo");
	largo=parseInt(largo);

	perimetro=(ancho+largo)*2;

	alert("El perimetro del rectangulo es "+perimetro);
}
