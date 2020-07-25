/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.
Caraballo Iván*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case"Cataratas":
		case"Mar del plata":
			alert("CALOR");
			break;
		case"Ushuaia":
		case"Bariloche":
			alert("FRIO");
			break;
	}		

}//FIN DE LA FUNCIÓN