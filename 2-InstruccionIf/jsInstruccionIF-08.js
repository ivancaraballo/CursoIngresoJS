/*Se pide ingresar una edad y un estado cicvil
	--a todos los mayores de edad, mostrar el mensaje "se responsable"
	--a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	--a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	--a los niños tambien informar "hagan la tarea" 
	--a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	--a los mayores de edad solteros, tambien informar "a vivir la vida"
	--a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	--a los divorciados informar tambien "a intentarlo nuevamente"
Caraballo Iván
*/
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivilIngresado=estadoCivil.value;

	if(edadIngresada>17)
	{
		alert("se responsable");


		if(estadoCivilIngresado=="Soltero")
		{
			alert("a vivir la vida");
		}
		else
		{
			if(estadoCivilIngresado=="Casado")
			{
				alert("a disfrutar la pareja");
			}
		}

		if(edadIngresada>59)
		{
			alert("sos persona de riesgo");
		}
}// fin de if(edadIngresada>17)

	else
	{
		if(edadIngresada<13)
		{
			alert("respeta a tus mayores");
			alert("hagan la tarea");
		}
		else
		{
			if(edadIngresada>12 && edadIngresada<18 && estadoCivilIngresado!="Soltero")
			{
				alert("sos muy joven para no ser soltero");
			}
		}	
	}
	if(estadoCivilIngresado=="Divorciado")
	{
		alert("a intentarlo nuevamente");
	}	
}//FIN DE LA FUNCIÓN