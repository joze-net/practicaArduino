var j=require("johnny-five");
var circuito = new j.Board();
var led, motorcito, celda;
var moverBandera=false;

circuito.on("ready",prender);


function prender(){

	var configurcion ={pin:"A0", freq: 50};
	celda = new j.Sensor(configurcion);

	led = new j.Led(2);
	led.blink(500);

	motorcito = new j.Servo(9);
	motorcito.to(90);

	console.log("luz: "+celda.value);

     ondear();
}

function ondear(){
	console.log("luz: "+celda.value);

	if (celda.value>800){
		if(moverBandera){
				motorcito.to(70);
				moverBandera=false;
		}else {
			  motorcito.to(110);
			  moverBandera=true;
		}
		
	}else{
		motorcito.to(0);
	}
	setTimeout(ondear, 1000);
}