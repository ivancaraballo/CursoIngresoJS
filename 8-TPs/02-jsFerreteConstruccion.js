/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var perimetroDelTerreno;
	var cantidadDeAlambre;

	largoDelTerreno=txtIdLargo.value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=txtIdAncho.value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	perimetroDelTerreno=(largoDelTerreno+anchoDelTerreno)*2;

	cantidadDeAlambre=perimetroDelTerreno*3;

	alert("La cantidad de alambre requerido es "+cantidadDeAlambre);

}
function Circulo () 
{
	var radioDelCirculo;
	var perimetroDelCirculo;
	var cantidadDeAlambre;

	radioDelCirculo=txtIdRadio.value;
	radioDelCirculo=parseInt(radioDelCirculo);

	perimetroDelCirculo=2*3.14*radioDelCirculo;

	cantidadDeAlambre=perimetroDelCirculo*3;

	alert("La cantidad de alambre requerido es "+cantidadDeAlambre);

}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var superficieDelTerrno;
	var bolsasDeCemento
	var bolsasDeCal

	largoDelTerreno=txtIdLargo.value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=txtIdAncho.value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	superficieDelTerrno=largoDelTerreno*anchoDelTerreno;

	bolsasDeCemento=superficieDelTerrno*2;

	bolsasDeCal=superficieDelTerrno*3;

	alert("La cantidad de bolsas de cemento requeridas son "+bolsasDeCemento+" y "+bolsasDeCal+" bolsas de cal");
	
}