/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	resultadoSuma=precioUno+precioDos+precioTres;

	alert("La suma del valor de los productos es  "+resultadoSuma);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoPromedio;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	resultadoPromedio=(precioUno+precioDos+precioTres)/3;

	alert("El promedio del valor de los productos es  "+resultadoPromedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var resultadoConIva;
	var resultadoFinal;

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	resultadoSuma=precioUno+precioDos+precioTres;
	
	resultadoConIva=resultadoSuma*21/100;

	resultadoFinal=resultadoSuma+resultadoConIva;

	alert("El precio final es "+resultadoFinal);

}