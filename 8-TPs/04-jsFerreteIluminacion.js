/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	//txtIdCantidad, txtIdprecioDescuento y Marca
 	var precioLamparas;
 	var cantidad;
 	var precioConDescuento;
 	var marcaDeLampara;
 	var precioTotal;
 	var descuento;
 	var ingresosBrutos;

 	precioLamparas=35;

 	cantidad=txtIdCantidad.value;
 	cantidad=parseInt(cantidad);

 	marcaDeLampara=Marca.value;

 	precioTotal=precioLamparas*cantidad;

 	if(cantidad>5)
 	{
 		descuento=precioTotal*50/100;
 		precioConDescuento=precioTotal-descuento;
 	}
 	else
 	{
 		if(cantidad==5)
 		{
 			if(marcaDeLampara=="ArgentinaLuz")
 			{
 				descuento=precioTotal*40/100;
 				precioConDescuento=precioTotal-descuento;
 			}
 			else
 			{
 				descuento=precioTotal*30/100;
 				precioConDescuento=precioTotal-descuento;
 			}
 		}
 		else
 		{
 			if(cantidad==4)
 			{
 				if(marcaDeLampara=="ArgentinaLuz" || marcaDeLampara=="FelipeLamparas")
 				{
 					descuento=precioTotal*25/100;
 					precioConDescuento=precioTotal-descuento;
 				}
 				else
 				{
 					descuento=precioTotal*20/100;
 					precioConDescuento=precioTotal-descuento;
 				}
 			}
 			else
 			{
 				if(cantidad==3)
 				{
 					if(marcaDeLampara=="ArgentinaLuz")
 					{
 						descuento=precioTotal*15/100;
 						precioConDescuento=precioTotal-descuento;
 					}
 					else
 					{
 						if(marcaDeLampara=="FelipeLamparas")
 						{
 							descuento=precioTotal*10/100;
 							precioConDescuento=precioTotal-descuento;
 						}
 						else
 						{
 							descuento=precioTotal*5/100;
 							precioConDescuento=precioTotal-descuento;
 						}
 					}
 				}
 			}
 		}
 	}

 	if(precioConDescuento>120)
 	{
 		ingresosBrutos=precioConDescuento*10/100;

 		alert("Usted pago "+ingresosBrutos+" de IIBB");
 	}
 	else
 	{
 		ingresosBrutos=0
 	}

  	txtIdprecioDescuento.value=precioConDescuento+ingresosBrutos;

}
