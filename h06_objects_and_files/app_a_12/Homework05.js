var fs = require('fs');

var contents = fs.readFileSync('input.json', 'utf8');
var object =  JSON.parse(contents);



if(object.a == 0) {
	if(object.b == 0 && object.c == 0) {
		console.log("#");
	} else {
		var result = (-object.c/object.b);
		console.log("{");
		if(Number.isInteger(result) == true) {	
			console.log("x:"+result);
		} else {
			console.log("x:"+result.toFixed(2));
		}
		
		console.log("}");
		return 0;
	}
} else {
	var d = object.b*object.b - 4*object.a*object.c;
	if(d > 0){
		var x1 = (-object.b + Math.sqrt(d))/(2*object.a);
		var x2 = (-object.b - Math.sqrt(d))/(2*object.a);
		console.log("{");
		if(Number.isInteger(x1) == true) {
			console.log("x1:"+x1+",");
		} else {
			console.log("x1:"+x1.toFixed(2)+",");
		}
		
		if(Number.isInteger(x2) == true){
			console.log("x2:"+x2+",");
		} else {
			console.log("x2:"+x2.toFixed(2)+",");
		}
		console.log("D:"+d);
		console.log("}");
		return 0;
		
	} else if (d == 0){
		var x3 = (-object.b/2*object.a);
		console.log("{");
		if(Number.isInteger(x3) == true) {
			console.log("x:"+x3);
		} else {
			console.log("x:"+x3.toFixed(2));
		}
		console.log("}");
		return 0;
	} else if (d < 0){
		console.log("Error");
	}
}
