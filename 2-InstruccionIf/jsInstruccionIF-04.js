function mostrar()
{
	var edadInresada;
	edadInresada=txtIdEdad.value;			
	edadInresada=parseInt(edadInresada);

	if(edadInresada<18 && edadInresada>12   )
	{
		alert("adolescentes");
	}

}//FIN DE LA FUNCIÓN