/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
Caraballo Iván*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case"Febrero":
			alert("Tiene 28 dias");
			break;
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
			alert("Tiene 30 dias");
			break;
		default:
			alert("Tiene 31 dias");
	}
	
	



}//FIN DE LA FUNCIÓN