var jf= require("johnny-five");//traemos la carpeta de johnny five
var circuito =new  jf.Board();//guradamos la case de tipo board que esta dentro de johnny

circuito.on("ready",prender);


function prender(){
	var led1 = new jf.Led(2);//instancia de la clase led,parametro el pùerto
	

	led1.blink(70); 
	

}