/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno
	//txtIdNumeroDos
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);

	//numeroUno=3;
	//numeroDos=3;

	resultado=numeroUno+numeroDos;

	alert("el resultado es: "+resultado);
}

