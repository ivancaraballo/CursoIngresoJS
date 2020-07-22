/*Al ingresar una edad debemos informar solo si la persona es mayor de edad
Iván Caraballo*/
function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);
	if(edadIngresada>17)
	{
		alert("Usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN