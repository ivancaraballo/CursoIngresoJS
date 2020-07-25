function mostrar()
{
		var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if( edadIngresada<13)
	{
		alert("no es adolescentes");
	}

	if(edadIngresada>17)
	{
		alert("no es adolescentes");
	}

}//FIN DE LA FUNCIÓN