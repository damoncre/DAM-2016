alert('SceneScene4EC2.js loaded');

function SceneScene4EC2() {

};

SceneScene4EC2.prototype.initialize = function () {
	alert("SceneScene4EC2.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	
	$.ajax({
		type: "GET",
		crossDomain: true,
		async: true,
		dataType: "json",
		url: API+"/votaciones",
		success: function(data){
				var elementos_columna = 75;	
				for(var i = 181 ;i < data.result[0].xml.resultado.votaciones.votacion.length ;i++){
					if (data.result[0].xml.resultado.votaciones.votacion[i].voto=="Sí"){
						elementos_columna++;
						if (elementos_columna > 75 && elementos_columna < 100 ) {
							if (elementos_columna == 76) $("#SceneScene4EC2").append("<div class='col_1'>");
							$(".col_1").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 100) $("#SceneScene4EC2").append("</div>");
						}else if (elementos_columna > 100 && elementos_columna < 125) {
							if (elementos_columna == 101) $("#SceneScene4EC2").append("<div class='col_2'>");
							$(".col_2").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 124) $("#SceneScene4EC2").append("</div>");
						}else if (elementos_columna > 124 && elementos_columna < 149) {
							if (elementos_columna == 125) $("#SceneScene4EC2").append("<div class='col_3'>");
							$(".col_3").append("<h5>"+data.result[0].xml.resultado.votaciones.votacion[i].diputado+"</h5>");
							if (elementos_columna == 148) {
								$("#SceneScene4EC2").append("</div>");
							}
							alert(i);
						}
					}
				
				}
				elementos_columna = 0;
			
			},
			error: function(){
				alert('error');
			}
		});

};

SceneScene4EC2.prototype.handleShow = function (data) {
	alert("SceneScene4EC2.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneScene4EC2.prototype.handleHide = function () {
	alert("SceneScene4EC2.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneScene4EC2.prototype.handleFocus = function () {
	alert("SceneScene4EC2.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneScene4EC2.prototype.handleBlur = function () {
	alert("SceneScene4EC2.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneScene4EC2.prototype.handleKeyDown = function (keyCode) {
	alert("SceneScene4EC2.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			sf.scene.hide('Scene4EC2');
			sf.scene.show('Scene4EC');
			sf.scene.focus('Scene4EC');
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('Scene4EC2');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;			
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};