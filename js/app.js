var api ={
	url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};

var cargarPagina= function(){
	cargarLista();
};

var cargarLista= function(){
	$.getJSON(api.url,function(alumnas){
		alumnas.forEach(mostrarLista);
	});
}

var mostrarLista= function(alumnas){
	var name= alumnas.name;
	var pName= alumnas.pLastName;
	var mName=alumnas.mLastName;
	console.log(name);
	var $ol=$("#lista-alumnas");
 	var $li=$("<li />");
 	var $checkbox=$("<input type=checkbox>");
 	var $dates=$("<p>" + name + " "+ pName + " " + mName +"</p>");
	$ol.append($li);
 	$li.append($checkbox);
 	$li.append($dates);

 };

$(document).ready(cargarPagina);