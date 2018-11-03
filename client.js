function addRow()
{
	var anno = document.getElementById("slt_ano").value;//$("#slt_ano").val();
	var institucion = document.getElementById("institucion").value;//$("#institucion").val();
	var lugar = document.getElementById("lugar").value;//$("#lugar").val();*/
	alert(anno);
	alert(institucion);
	alert(lugar);

	var table = document.getElementById("educacion").getElementsByTagName('tbody')[0];

	var row = table.insertRow(0);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);


	//var newRowContent = "<tr><td>" + anno + "</td><td>" + institucion + "</td><td>" + lugar + "</td><td>" + culmino + "</td></tr>";

	cell1.innerHTML= anno;
	cell2.innerHTML= institucion;
	cell3.innerHTML= lugar;
	/*cell4.innerHTML= culmino;*/
	/*return true;*/
}
