/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Caraballo Iván*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var precioBase;
	var porcentaje;
	var porcentajeFinal;
	var precioFinal;

	//alert(estacionIngresada);

	porcentaje=parseInt(porcentaje);

	precioBase=parseInt(precioBase);
	precioBase=15000

	switch(estacionIngresada)
	{
		case"Invierno":
			switch(destinoIngresado)
			{
				case"Bariloche":
						porcentaje=20;
						porcentajeFinal=precioBase*porcentaje/100;
						precioFinal=precioBase+porcentajeFinal;
					alert("La tarifa a pagar es "+precioFinal);
					break;
				case"Cataratas":
				case"Cordoba":
						porcentaje=10;
						porcentajeFinal=precioBase*porcentaje/100;
						precioFinal=precioBase-porcentajeFinal;
					alert("La tarifa a pagar es "+precioFinal);
					break;
				case"Mar del plata":
						porcentaje=20;
						porcentajeFinal=precioBase*porcentaje/100;
						precioFinal=precioBase-porcentajeFinal;
					alert("La tarifa a pagar es "+precioFinal);
					break;
			}
		break;	
		case"Verano":
			switch(destinoIngresado)
			{
				case"Bariloche":
						porcentaje=20;
						porcentajeFinal=precioBase*porcentaje/100;
						precioFinal=precioBase-porcentajeFinal;
					alert("La tarifa a pagar es "+precioFinal);
					break;
				case"Cataratas":
				case"Cordoba":
						porcentaje=10;
						porcentajeFinal=precioBase*porcentaje/100;
						precioFinal=precioBase+porcentajeFinal;
					alert("La tarifa a pagar es "+precioFinal);
					break;
				case"Mar del plata":
						porcentaje=20;
						porcentajeFinal=precioBase*porcentaje/100;
						precioFinal=precioBase+porcentajeFinal;
					alert("La tarifa a pagar es "+precioFinal);
					break;
			}
		break;	
		case"Otoño":
		case"Primavera":
			switch(destinoIngresado)
			{
				case"Bariloche":
				case"Cataratas":
				case"Mar del plata":
						porcentaje=10;
						porcentajeFinal=precioBase*porcentaje/100;
						precioFinal=precioBase+porcentajeFinal;
					alert("La tarifa a pagar es "+precioFinal);
					break;
				case"Cordoba":
						precioFinal=precioBase;
					alert("La tarifa a pagar es "+precioFinal);
					break;
			break;
			}				
	}

}//FIN DE LA FUNCIÓN