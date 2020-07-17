/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nobreIngresado;
	var edadIngresada;

	nobreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;

	alert("Usted se llama "+nobreIngresado+" y tiene "+edadIngresada+" años")

	//testing
	//alert("Usted se llama "+nobreIngresado+" y tiene "+edadIngresada+" años")
	/*alert("Usted se llama "+nobreIngresado);
	alert(" y tiene "+edadIngresada+" años");
	*/
	


	//alert("Usted se llama José y tiene 66 años");
}

